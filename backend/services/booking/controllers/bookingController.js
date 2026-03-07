import doctorModel from '../../../models/doctorModel.js';
import appointmentModel from '../../../models/appointmentModel.js';
import userModel from '../../../models/userModel.js';
import logger from '../../../shared/utils/logger.js';
import { Queue } from 'bullmq';

const notificationQueue = new Queue('notifications', {
    connection: {
        host: process.env.REDIS_HOST || 'redis',
        port: process.env.REDIS_PORT || 6379
    }
});

// API to get all doctors with caching
const getDoctors = async (req, res) => {
    try {
        const cachedDoctors = await req.redis.get('all_doctors');
        if (cachedDoctors) {
            return res.json({ success: true, doctors: JSON.parse(cachedDoctors) });
        }

        const doctors = await doctorModel.find({}).select(['-password', '-email']);
        await req.redis.setEx('all_doctors', 3600, JSON.stringify(doctors));

        res.json({ success: true, doctors });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// API to get doctor by ID with caching
const getDoctorById = async (req, res) => {
    try {
        const { docId } = req.params;
        const cacheKey = `doctor_${docId}`;
        const cachedDoctor = await req.redis.get(cacheKey);
        
        if (cachedDoctor) {
            return res.json({ success: true, doctor: JSON.parse(cachedDoctor) });
        }

        const doctor = await doctorModel.findById(docId).select('-password');
        await req.redis.setEx(cacheKey, 3600, JSON.stringify(doctor));

        res.json({ success: true, doctor });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// API to book appointment
const bookAppointment = async (req, res) => {
    const session = await appointmentModel.startSession();
    session.startTransaction();
    try {
        const { userId, docId, slotDate, slotTime } = req.body;
        const docData = await doctorModel.findById(docId).session(session);

        if (!docData || !docData.available) {
            throw new Error('Doctor not available');
        }

        let slots_booked = docData.slots_booked;
        if (slots_booked[slotDate] && slots_booked[slotDate].includes(slotTime)) {
            throw new Error('Slot already booked');
        }

        if (!slots_booked[slotDate]) {
            slots_booked[slotDate] = [];
        }
        slots_booked[slotDate].push(slotTime);

        const userData = await userModel.findById(userId).select('-password').session(session);
        
        const appointmentData = {
            userId,
            docId,
            userData,
            docData: { ...docData._doc, slots_booked: undefined },
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        };

        const newAppointment = new appointmentModel(appointmentData);
        await newAppointment.save({ session });

        await doctorModel.findByIdAndUpdate(docId, { slots_booked }).session(session);

        await session.commitTransaction();

        // Invalidate cache
        await req.redis.del(`doctor_${docId}`);
        await req.redis.del('all_doctors');

        // Add to notification queue
        await notificationQueue.add('bookingEmail', {
            email: userData.email,
            doctorName: docData.name,
            slotDate,
            slotTime
        });

        res.json({ success: true, message: 'Appointment Booked' });
    } catch (error) {
        await session.abortTransaction();
        res.json({ success: false, message: error.message });
    } finally {
        session.endSession();
    }
};

// ... other methods listAppointment, cancelAppointment, changeAvailability ...
// (Truncated for brevity, but they should mirror original logic with cache invalidation)

const listAppointment = async (req, res) => {
    try {
        const { userId } = req.body;
        const appointments = await appointmentModel.find({ userId });
        res.json({ success: true, appointments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const cancelAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);

        if (appointmentData.userId !== userId) {
            return res.json({ success: false, message: 'Unauthorized action' });
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

        const { docId, slotDate, slotTime } = appointmentData;
        const doctorData = await doctorModel.findById(docId);
        let slots_booked = doctorData.slots_booked;
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);

        await doctorModel.findByIdAndUpdate(docId, { slots_booked });
        
        // Invalidate cache
        await req.redis.del(`doctor_${docId}`);
        await req.redis.del('all_doctors');

        res.json({ success: true, message: 'Appointment Cancelled' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        
        // Invalidate cache
        await req.redis.del(`doctor_${docId}`);
        await req.redis.del('all_doctors');
        
        res.json({ success: true, message: 'Availability Changed' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export { getDoctors, getDoctorById, bookAppointment, listAppointment, cancelAppointment, changeAvailability };

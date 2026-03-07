import { Worker } from 'bullmq';
import logger from '../../shared/utils/logger.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const worker = new Worker('notifications', async (job) => {
    if (job.name === 'bookingEmail') {
        const { email, doctorName, slotDate, slotTime } = job.data;
        logger.info(`Processing notification for ${email}`);

        // Simulate or send actual email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Appointment Booked Successfully',
            text: `Your appointment with Dr. ${doctorName} on ${slotDate} at ${slotTime} has been booked successfully.`
        };

        try {
            // await transporter.sendMail(mailOptions);
            logger.info(`Email sent to ${email}`);
        } catch (error) {
            logger.error(`Failed to send email to ${email}`, error);
        }
    }
}, {
    connection: {
        host: process.env.REDIS_HOST || 'redis',
        port: process.env.REDIS_PORT || 6379
    }
});

worker.on('completed', (job) => {
    logger.info(`Job ${job.id} completed!`);
});

worker.on('failed', (job, err) => {
    logger.error(`Job ${job.id} failed with error ${err.message}`);
});

logger.info('Notification Service Worker started');

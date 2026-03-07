import express from 'express';
import { bookAppointment, listAppointment, cancelAppointment, getDoctors, getDoctorById, changeAvailability } from '../controllers/bookingController.js';
import authUser from '../../shared/middleware/authUser.js';
import authAdmin from '../../shared/middleware/authAdmin.js';
import bookingLimiter from '../../shared/middleware/rateLimiter.js';

const bookingRouter = express.Router();

bookingRouter.post('/book', authUser, bookingLimiter, bookAppointment);
bookingRouter.get('/list', authUser, listAppointment);
bookingRouter.post('/cancel', authUser, cancelAppointment);
bookingRouter.get('/doctors', getDoctors);
bookingRouter.get('/doctor/:docId', getDoctorById);
bookingRouter.post('/change-availability', authAdmin, changeAvailability);

export default bookingRouter;

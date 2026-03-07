import express from 'express';
import { paymentRazorpay, verifyRazorpay } from '../controllers/paymentController.js';
import authUser from '../../shared/middleware/authUser.js';

const paymentRouter = express.Router();

paymentRouter.post('/razorpay', authUser, paymentRazorpay);
paymentRouter.post('/verify', authUser, verifyRazorpay);

export default paymentRouter;

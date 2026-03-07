import express from 'express';
import { registerUser, loginUser, loginAdmin, loginDoctor } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/admin-login', loginAdmin);
authRouter.post('/doctor-login', loginDoctor);

export default authRouter;

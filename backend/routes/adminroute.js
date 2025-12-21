import express from 'express';
import { allDoctors } from '../controllers/adminController.js';
import { loginAdmin } from '../controllers/adminController.js';
import { addDoctor } from '../controllers/adminController.js'
import upload from '../middleware/multer.js';
import { changeAvailability } from '../controllers/doctorController.js'
import authAdmin from '../middleware/authAdmin.js';
const adminRouter = express.Router();

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-doctors', authAdmin, allDoctors);
adminRouter.post('/change-availability', authAdmin, changeAvailability) // <--- 2. ADD THIS ROUTE
export default adminRouter;

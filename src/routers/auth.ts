import express from 'express';
//import User from '../models/User.js';
import { registerCoordinator,loginCoordinator,loginAdmin, sendOtp, verifyOtp } from '../controllers/auth.js';
import adminAuthenticationMiddleware from '../middlewares/admin-authentication.js';

const router = express.Router();



router.post('/send-otp', sendOtp);


router.post('/verify-otp', verifyOtp);

// Add other endpoints here

router.route('/register-coordinator').post(adminAuthenticationMiddleware,registerCoordinator)

router.route('/login-coordinator').post(loginCoordinator)
router.route('/login-admin').post(loginAdmin)

export default router;

import express from 'express';
//import User from '../models/User.js';
import { sendOtpEmail } from '../email-otp/index.js';
import bcrypt from 'bcryptjs';
const router = express.Router();

function generateOtp(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let otp = '';
  for (let i = 0; i < 6; i++) {
      otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return otp;
}

router.post('/register', async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp(); // Implement this function
  const otpHash = await bcrypt.hash(otp, 10);

  // const user = new User({ email, otpHash });
  // await user.save();

  sendOtpEmail(email, otp); // Implement this function

  res.json({ message: 'OTP sent to your email' });
});

// Add other endpoints here

export default router;

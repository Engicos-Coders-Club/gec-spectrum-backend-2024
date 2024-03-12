import nodemailer from 'nodemailer';

// Replace these with your own values
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN';
const SENDER_EMAIL = 'your.email@example.com';

async function sendOtpEmail(to: string, otp: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL,
    to: to,
    subject: 'Your OTP',
    text: `Your OTP is: ${otp}`,
    // You can also use HTML content
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Example usage
const recipient = 'recipient.email@example.com';
const otp = '123456'; // Generate your OTP here
sendOtpEmail(recipient, otp).catch(console.error);


export  { sendOtpEmail }
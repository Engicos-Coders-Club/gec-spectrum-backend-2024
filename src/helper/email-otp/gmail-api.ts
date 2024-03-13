import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { config } from 'dotenv';
// Replace these with your own values
config();

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const SENDER_EMAIL = process.env.GMAIL_SENDER_EMAIL;

const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


async function sendOtpEmail(to: string, otp: string, name: string = "") {
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
    subject: `Hello ${name}!`,
    text: `Your OTP is: ${otp}`,
    html: '<h1>Hello from gmail email using API</h1>', // You can also use HTML content
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

//if (import.meta.url === `file://${process.argv[1]}`) { // will only run when the file is individually executed, not when imported
// Example usage
//const recipient = '264sideemail@gmail.com';
//const otp = '123456'; // Generate your OTP here
//sendOtpEmail(recipient, otp).catch(console.error);

//}

export  { sendOtpEmail }
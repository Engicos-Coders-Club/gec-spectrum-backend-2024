import Razorpay from 'razorpay';
import { createHmac } from 'crypto';
import { config } from 'dotenv';
config();

const razorpay = new Razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_SECRET'
});

export const createPayment = async () => {
  const options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log(order);
    return order;
  } catch (err) {
    console.error(err);
    throw err; // Or handle error as per your application's error handling logic
  }
};


export const verifyPayment = (
    orderId: string,
    paymentId: string,
    razorpaySignature: string,
    keySecret: string
  ): boolean => {
    const hmac = createHmac('sha256', keySecret);
    hmac.update(`${orderId}|${paymentId}`);
    const generatedSignature = hmac.digest('hex');
    return generatedSignature === razorpaySignature;
  };
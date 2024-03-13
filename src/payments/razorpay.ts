import Razorpay from 'razorpay';
import { createHmac } from 'crypto';
import { config } from 'dotenv';
config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'YOUR_KEY_ID',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_KEY_SECRET',
});

export const createPayment = async ( amount:number ) => {
  const options = {
    amount: amount, // amount in the smallest currency unit
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


export const verifyPaymentSignature = (
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

if (import.meta.url === `file://${process.argv[1]}`) { // will only run when the file is individually executed, not when imported

//Example usage
// const payment = createPayment(100).catch(console.error);

}
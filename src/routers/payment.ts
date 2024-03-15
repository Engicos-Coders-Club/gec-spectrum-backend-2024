import { Router } from 'express';
import { verifyPayment } from '../controllers/payments.js';
const router = Router();

router.route('/payment/success').post(verifyPayment)

export default router;

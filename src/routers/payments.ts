import { Router } from 'express';
import { checkPaymentStatus, updatePaymentStatus, uploadPaymentReceipt } from '../controllers/payment.js';
import authenticationMiddleware from '../middlewares/authentication.js';
import multer from 'multer';

const router = Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// payment status ( can be checked by coordinator )
router.route('/payment-status/:teamId').get(authenticationMiddleware,checkPaymentStatus)
router.route('/update-payment-status/:teamId').patch(authenticationMiddleware,updatePaymentStatus)
router.route('/upload-payment-receipt/:teamId').patch(upload.single('file'),uploadPaymentReceipt)

export default router
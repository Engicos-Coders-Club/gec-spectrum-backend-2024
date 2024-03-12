import { Router } from 'express';
const router = Router();
import { registerCoordinator,loginCoordinator,loginAdmin } from '../controllers/auth.js';
import adminAuthenticationMiddleware from '../middlewares/admin-authentication.js';

router.route('/register-coordinator').post(adminAuthenticationMiddleware,registerCoordinator)

router.route('/login-coordinator').post(loginCoordinator)
router.route('/login-admin').post(loginAdmin)

export default router;
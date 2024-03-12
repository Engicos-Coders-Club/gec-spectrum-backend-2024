import { Router } from 'express';
const router = Router();
import { addDepartment,getDepartments } from '../controllers/departments.js';
import adminAuthenticationMiddleware from '../middlewares/admin-authentication.js';

router.route('/').post(adminAuthenticationMiddleware,addDepartment).get(adminAuthenticationMiddleware,getDepartments)

export default router;
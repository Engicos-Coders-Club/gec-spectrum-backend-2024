import { Router } from 'express';
import authenticationMiddleware from '../middlewares/authentication.js';
import { getDepartmentName } from '../controllers/coordinators.js';
const router = Router();

router.route('/get-department').get(authenticationMiddleware,getDepartmentName)

export default router;
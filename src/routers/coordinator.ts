import { Router } from 'express';
import authenticationMiddleware from '../middlewares/authentication.js';
import { assignEvent, getDepartmentName,getCoordinatorsForEvent } from '../controllers/coordinators.js';
import adminAuthenticationMiddleware from '../middlewares/admin-authentication.js';
import { getParticipant } from '../controllers/team.js';
const router = Router();

router.route('/get-department').get(authenticationMiddleware,getDepartmentName)
router.route('/assign-event').post(adminAuthenticationMiddleware,assignEvent)

router.route('/get-participant').get(authenticationMiddleware,getParticipant)

router.route('/get-coordinators/:eventId').get(getCoordinatorsForEvent)

export default router;
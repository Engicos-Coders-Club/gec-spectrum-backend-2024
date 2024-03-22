import { Router } from 'express';
import multer from 'multer';
import { addEvent, addImage, deleteEvent, getAllEvents, getDepartmentEvents, getSingleEvent, updateEvent } from '../controllers/events.js';
import adminAuthenticationMiddleware from '../middlewares/admin-authentication.js';
import { createTeam,getParticipant,getTeam,getTeams,getTeamsWhole} from '../controllers/team.js';
import authenticationMiddleware from '../middlewares/authentication.js';

const router = Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.route('/').post(adminAuthenticationMiddleware,addEvent).get(getAllEvents)
router.route('/:id').patch(adminAuthenticationMiddleware,updateEvent).delete(adminAuthenticationMiddleware,deleteEvent)
.get(getSingleEvent)
router.route('/department/:id').get(getDepartmentEvents)

router.route('/add-event-image/:eventId').post(adminAuthenticationMiddleware,upload.single('file'),addImage)

router.route('/register-event').post(createTeam)

// coordinator access needed
router.route('/get-teams/:eventId').get(authenticationMiddleware, getTeams)

router.route('/get-teams-whole/:eventId').get(authenticationMiddleware, getTeamsWhole)


router.route('/get-team/:teamId').get(authenticationMiddleware,getTeam)

export default router;
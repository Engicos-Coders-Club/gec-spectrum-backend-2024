import { Router } from 'express';
import multer from 'multer';
import { addEvent, addImage, deleteEvent, getAllEvents, getDepartmentEvents, getSingleEvent, updateEvent } from '../controllers/events.js';
import adminAuthenticationMiddleware from '../middlewares/admin-authentication.js';

const router = Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.route('/').post(adminAuthenticationMiddleware,addEvent).get(getAllEvents)
router.route('/:id').patch(adminAuthenticationMiddleware,updateEvent).delete(adminAuthenticationMiddleware,deleteEvent)
.get(getSingleEvent)
router.route('/department/:id').get(getDepartmentEvents)

router.route('/add-event-image/:eventId').post(adminAuthenticationMiddleware,upload.single('file'),addImage)

export default router;
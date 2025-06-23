import express from 'express';
import {
  createAdmin,
  approveUser,
  rejectUser,
  listPendingUsers
} from '../controllers/adminController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/create-admin', createAdmin);

router.use(authenticate);
router.use(authorizeRoles('admin'));

router.get('/pending-users', listPendingUsers);
router.patch('/approve-user/:userId', approveUser);
router.patch('/reject-user/:userId', rejectUser);

export default router;

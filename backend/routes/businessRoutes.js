import express from 'express';
import { registerBusiness, approveBusiness } from '../controllers/businessController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/register', registerBusiness);

// Admin approves business
router.patch('/approve/:id', authenticate, authorizeRoles('admin'), approveBusiness);

export default router;

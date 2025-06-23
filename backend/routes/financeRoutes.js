import express from 'express';
import {
  addTransaction,
  getTransactions,
  getSummary
} from '../controllers/financeController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticate);

router.post('/transaction', addTransaction);
router.get('/transactions', getTransactions);
router.get('/summary', getSummary);

export default router;

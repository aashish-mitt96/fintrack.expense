import express from 'express'
import { createAccount, updateAccount, deleteAccount, getAccounts } from '../controllers/accountController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/')
  .post(protect, createAccount)
  .get(protect, getAccounts)

router.route('/:id')
  .put(protect, updateAccount)
  .delete(protect, deleteAccount)

export default router
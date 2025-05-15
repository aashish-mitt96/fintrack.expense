import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/db.js'
import { errorHandler } from './middlewares/errorMiddleware.js'
import authRoutes from './routes/authRoutes.js'
import transactionRoutes from './routes/transactionRoutes.js'
import budgetRoutes from './routes/budgetRoutes.js'
import accountRoutes from './routes/accountRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/transactions', transactionRoutes)
app.use('/api/accounts', accountRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/budgets', budgetRoutes)

app.get('/', (req, res) => {
  res.send('FinTrack API is running')
})

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  category: String,
  description: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);

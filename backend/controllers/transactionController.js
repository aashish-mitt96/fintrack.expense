import Transaction from '../models/Transaction.js'

export const createTransaction = async (req, res) => {
  const newTx = await Transaction.create({ ...req.body, userId: req.user._id });
  res.status(201).json(newTx);
};

export const getTransactions = async (req, res) => {
  const txns = await Transaction.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(txns);
};

export const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: 'Transaction deleted' });
};

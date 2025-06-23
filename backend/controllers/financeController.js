import Transaction from '../models/Transaction.js';

// Add transaction (income or expense)
export const addTransaction = async (req, res) => {
  try {
    const { amount, type, category, description, date } = req.body;
    const businessId = req.user.businessId;
    const createdBy = req.user.id;

    if (!amount || !type) return res.status(400).json({ message: 'Amount and type are required' });

    const transaction = new Transaction({
      amount,
      type,
      category,
      description,
      date: date || Date.now(),
      businessId,
      createdBy
    });

    await transaction.save();

    res.status(201).json({ message: 'Transaction added', transaction });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all transactions for the user's business
export const getTransactions = async (req, res) => {
  try {
    const businessId = req.user.businessId;

    const transactions = await Transaction.find({ businessId }).populate('createdBy', 'name email');

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get summary (total income, total expenses)
export const getSummary = async (req, res) => {
  try {
    const businessId = req.user.businessId;

    const incomeAgg = await Transaction.aggregate([
      { $match: { businessId: businessId, type: 'income' } },
      { $group: { _id: null, totalIncome: { $sum: '$amount' } } }
    ]);
    const expenseAgg = await Transaction.aggregate([
      { $match: { businessId: businessId, type: 'expense' } },
      { $group: { _id: null, totalExpense: { $sum: '$amount' } } }
    ]);

    const totalIncome = incomeAgg[0]?.totalIncome || 0;
    const totalExpense = expenseAgg[0]?.totalExpense || 0;

    res.json({ totalIncome, totalExpense, balance: totalIncome - totalExpense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

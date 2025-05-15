import Budget from '../models/Budget.js'

export const createBudget = async (req, res) => {
  const budget = await Budget.create({ ...req.body, userId: req.user._id })
  res.status(201).json(budget)
}

export const getBudgets = async (req, res) => {
  const budgets = await Budget.find({ userId: req.user._id }).populate('categoryId')
  res.json(budgets)
}

export const updateBudget = async (req, res) => {
  const updated = await Budget.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  )
  res.json(updated)
}

export const deleteBudget = async (req, res) => {
  await Budget.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
  res.json({ message: 'Budget deleted' })
}

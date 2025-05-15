import Account from '../models/Account.js'

export const createAccount = async (req, res) => {
  const account = await Account.create({ ...req.body, userId: req.user._id })
  res.status(201).json(account);
}

export const getAccounts = async (req, res) => {
  const accounts = await Account.find({ userId: req.user._id }).sort({ createdAt: -1 })
  res.json(accounts);
}

export const updateAccount = async (req, res) => {
  const updated = await Account.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  res.json(updated)
}

export const deleteAccount = async (req, res) => {
  await Account.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
  res.json({ message: 'Account deleted' })
}

import Category from '../models/Category.js'

export const createCategory = async (req, res) => {
  const category = await Category.create({ ...req.body, userId: req.user._id })
  res.status(201).json(category)
};

export const getCategories = async (req, res) => {
  const categories = await Category.find({ userId: req.user._id })
  res.json(categories)
};

export const updateCategory = async (req, res) => {
  const updated = await Category.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  )
  res.json(updated)
}

export const deleteCategory = async (req, res) => {
  await Category.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
  res.json({ message: 'Category deleted' })
}

import mongoose from "mongoose"

const budgetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    amount: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
}, {timestamps: true})

const Budget = mongoose.model("Budget", budgetSchema)
export default Budget
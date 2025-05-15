import mongoose from "mongoose"

const activitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        trim: true
    }
}, {timestamps: true})

const Activity = mongoose.model("Activity", activitySchema)
export default Activity

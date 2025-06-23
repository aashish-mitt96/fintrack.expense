import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  businessId: { type: String, required: true, unique: true },
  businessPassword: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Business", businessSchema);

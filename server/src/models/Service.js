const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    name: { type: String, required: true, trim: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
    availableQuantity: { type: Number, default: 1, min: 0 },
    images: [String],
    status: {
      type: String,
      enum: ["draft", "active", "inactive"],
      default: "draft"
    }
  },
  { timestamps: true }
);

serviceSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Service", serviceSchema);


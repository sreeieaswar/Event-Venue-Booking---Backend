const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: String,
    type: {
      type: String,
      enum: ["venue", "service", "event"],
      default: "venue"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);


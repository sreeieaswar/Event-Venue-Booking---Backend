const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    name: { type: String, required: true, trim: true },
    description: String,
    address: {
      line1: String,
      city: String,
      state: String,
      country: String,
      pincode: String
    },
    images: [String],
    capacity: { type: Number, required: true, min: 1 },
    pricePerDay: { type: Number, required: true, min: 0 },
    availableQuantity: { type: Number, default: 1, min: 0 },
    amenities: [String],
    status: {
      type: String,
      enum: ["draft", "active", "inactive"],
      default: "draft"
    }
  },
  { timestamps: true }
);

venueSchema.index({ name: "text", description: "text", "address.city": "text" });

module.exports = mongoose.model("Venue", venueSchema);


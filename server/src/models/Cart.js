const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    itemType: { type: String, enum: ["venue", "service"], required: true },
    item: { type: mongoose.Schema.Types.ObjectId, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    quantity: { type: Number, default: 1, min: 1 },
    bookingDate: Date,
    price: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: [cartItemSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);

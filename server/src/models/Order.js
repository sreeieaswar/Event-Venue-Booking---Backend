const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    itemType: { type: String, enum: ["venue", "service"], required: true },
    item: { type: mongoose.Schema.Types.ObjectId, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    quantity: Number,
    bookingDate: Date,
    price: Number
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true, min: 0 },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending"
    },
    orderStatus: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending"
    },
    notes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);


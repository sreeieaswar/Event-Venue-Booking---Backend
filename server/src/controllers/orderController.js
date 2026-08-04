const Cart = require("../models/Cart");
const Order = require("../models/Order");

async function checkout(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const items = cart.items.map((item) => ({
      itemType: item.itemType,
      item: item.item,
      owner: item.owner,
      name: item.name,
      quantity: item.quantity,
      bookingDate: item.bookingDate,
      price: item.price
    }));
    const totalAmount = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = await Order.create({ customer: req.user._id, items, totalAmount, notes: req.body.notes });
    cart.items = [];
    await cart.save();

    return res.status(201).json(order);
  } catch (error) {
    return next(error);
  }
}

async function myOrders(req, res, next) {
  try {
    const orders = await Order.find({ customer: req.user._id }).sort("-createdAt");
    return res.json(orders);
  } catch (error) {
    return next(error);
  }
}

async function listOrders(req, res, next) {
  try {
    const filter = req.user.role === "venue_owner" ? { "items.owner": req.user._id } : {};
    const orders = await Order.find(filter).populate("customer", "name email").sort("-createdAt");
    return res.json(orders);
  } catch (error) {
    return next(error);
  }
}

async function getOrder(req, res, next) {
  try {
    const order = await Order.findById(req.params.id).populate("customer", "name email");
    if (!order) return res.status(404).json({ message: "Order not found" });
    const isCustomer = String(order.customer._id) === String(req.user._id);
    const isOwner = order.items.some((item) => String(item.owner) === String(req.user._id));
    if (req.user.role !== "admin" && !isCustomer && !isOwner) {
      return res.status(403).json({ message: "Forbidden" });
    }
    return res.json(order);
  } catch (error) {
    return next(error);
  }
}

async function updateOrderStatus(req, res, next) {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: req.body.orderStatus, paymentStatus: req.body.paymentStatus },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    return res.json(order);
  } catch (error) {
    return next(error);
  }
}

module.exports = { checkout, myOrders, listOrders, getOrder, updateOrderStatus };

const Cart = require("../models/Cart");

async function getCart(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    return res.json(cart || { user: req.user._id, items: [] });
  } catch (error) {
    return next(error);
  }
}

async function addItem(req, res, next) {
  try {
    const cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { $push: { items: req.body } },
      { new: true, upsert: true }
    );
    return res.status(201).json(cart);
  } catch (error) {
    return next(error);
  }
}

async function updateItem(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const item = cart.items.id(req.params.itemId);
    if (!item) return res.status(404).json({ message: "Cart item not found" });
    Object.assign(item, req.body);
    await cart.save();
    return res.json(cart);
  } catch (error) {
    return next(error);
  }
}

async function removeItem(req, res, next) {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    cart.items.pull(req.params.itemId);
    await cart.save();
    return res.json(cart);
  } catch (error) {
    return next(error);
  }
}

async function clearCart(req, res, next) {
  try {
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] }, { upsert: true });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = { getCart, addItem, updateItem, removeItem, clearCart };


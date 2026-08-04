const User = require("../models/User");

async function listUsers(req, res, next) {
  try {
    const users = await User.find().select("-password").sort("-createdAt");
    return res.json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUser(req, res, next) {
  try {
    if (req.user.role !== "admin" && String(req.user._id) !== req.params.id) {
      return res.status(403).json({ message: "Forbidden" });
    }
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

async function updateRole(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role: req.body.role }, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

module.exports = { listUsers, getUser, updateRole };


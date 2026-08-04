const Category = require("../models/Category");

async function listCategories(req, res, next) {
  try {
    const categories = await Category.find().sort("name");
    return res.json(categories);
  } catch (error) {
    return next(error);
  }
}

async function createCategory(req, res, next) {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json(category);
  } catch (error) {
    return next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    return res.json(category);
  } catch (error) {
    return next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = { listCategories, createCategory, updateCategory, deleteCategory };


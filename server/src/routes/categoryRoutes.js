const router = require("express").Router();
const { listCategories, createCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", listCategories);
router.post("/", protect, authorize("admin"), createCategory);
router.put("/:id", protect, authorize("admin"), updateCategory);
router.delete("/:id", protect, authorize("admin"), deleteCategory);

module.exports = router;


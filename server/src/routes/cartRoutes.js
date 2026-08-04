const router = require("express").Router();
const { getCart, addItem, updateItem, removeItem, clearCart } = require("../controllers/cartController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.use(protect, authorize("customer"));
router.get("/", getCart);
router.post("/items", addItem);
router.patch("/items/:itemId", updateItem);
router.delete("/items/:itemId", removeItem);
router.delete("/", clearCart);

module.exports = router;


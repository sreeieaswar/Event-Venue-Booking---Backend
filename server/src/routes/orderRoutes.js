const router = require("express").Router();
const { checkout, myOrders, listOrders, getOrder, updateOrderStatus } = require("../controllers/orderController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.use(protect);
router.post("/checkout", authorize("customer"), checkout);
router.get("/my", authorize("customer"), myOrders);
router.get("/", authorize("venue_owner", "admin"), listOrders);
router.get("/:id", getOrder);
router.patch("/:id/status", authorize("venue_owner", "admin"), updateOrderStatus);

module.exports = router;


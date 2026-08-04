const router = require("express").Router();
const { listServices, createService, updateService, deleteService } = require("../controllers/serviceController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", listServices);
router.post("/", protect, authorize("venue_owner", "admin"), createService);
router.put("/:id", protect, authorize("venue_owner", "admin"), updateService);
router.delete("/:id", protect, authorize("venue_owner", "admin"), deleteService);

module.exports = router;


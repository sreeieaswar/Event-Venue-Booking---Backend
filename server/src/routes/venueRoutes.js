const router = require("express").Router();
const { listVenues, getVenue, createVenue, updateVenue, deleteVenue } = require("../controllers/venueController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", listVenues);
router.get("/:id", getVenue);
router.post("/", protect, authorize("venue_owner", "admin"), createVenue);
router.put("/:id", protect, authorize("venue_owner", "admin"), updateVenue);
router.delete("/:id", protect, authorize("venue_owner", "admin"), deleteVenue);

module.exports = router;


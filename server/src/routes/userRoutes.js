const router = require("express").Router();
const { listUsers, getUser, updateRole } = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.use(protect);
router.get("/", authorize("admin"), listUsers);
router.get("/:id", getUser);
router.patch("/:id/role", authorize("admin"), updateRole);

module.exports = router;


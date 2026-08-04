const router = require("express").Router();

router.use("/auth", require("./authRoutes"));
router.use("/users", require("./userRoutes"));
router.use("/categories", require("./categoryRoutes"));
router.use("/venues", require("./venueRoutes"));
router.use("/services", require("./serviceRoutes"));
router.use("/cart", require("./cartRoutes"));
router.use("/orders", require("./orderRoutes"));

module.exports = router;


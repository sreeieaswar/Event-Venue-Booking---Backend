const router = require("express").Router();
const { body } = require("express-validator");
const { signup, login, me } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");

router.post(
  "/signup",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  validate,
  signup
);
router.post("/login", [body("email").isEmail(), body("password").notEmpty()], validate, login);
router.get("/me", protect, me);

module.exports = router;


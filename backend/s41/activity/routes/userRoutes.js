const express = require("express");
const userControllers = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.patch("/:id/change-details", userControllers.updateUserDetails);

module.exports = router;

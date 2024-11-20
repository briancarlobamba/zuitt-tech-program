const express = require("express");
// const passport = require("passport");
const orderController = require("../controllers/order");

const { verify, verifyAdmin } = require("../auth");

const router = express.Router();






router.post("/checkout", verify, orderController.createOrder);

router.get("/my-orders", verify, orderController.retrieveUserOrders);

router.get("/all-orders", verify, verifyAdmin, orderController.retrieveAllOrders);








module.exports = router;
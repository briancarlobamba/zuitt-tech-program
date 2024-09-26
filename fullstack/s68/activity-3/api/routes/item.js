const express = require("express");
const itemController = require("../controllers/item");

const {verify} = require("../auth");

const router = express.Router();

router.post("/", verify, itemController.addItem);
router.get("/", verify, itemController.getAllItems);

module.exports = router;
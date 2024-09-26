//Activity
const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe");
const { verify,verifyAdmin } = require("../auth");

router.get("/all", verify, recipeController.getAll)
router.post("/", verify, recipeController.addRecipe)

module.exports = router;
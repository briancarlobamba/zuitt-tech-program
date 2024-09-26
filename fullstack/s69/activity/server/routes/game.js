const express = require("express");
const gameController = require("../controllers/game");
const auth = require("../auth");
const { verify } = auth;
const router = express.Router();


router.get("/all", verify, gameController.getAllGames)
router.post("/", verify, gameController.addGame)
router.patch("/:gameId", verify, gameController.updateGameStatus)
router.delete("/:gameId", verify, gameController.deleteGame)

module.exports = router;
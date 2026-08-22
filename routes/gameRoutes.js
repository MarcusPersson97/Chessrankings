const express = require("express");
const router = express.Router();
const gameController = require("../Controller/gameController");

router.post('/', gameController.createGame);
router.get('/', gameController.getGames);
router.get('/player/:id', gameController.getGamesForPlayer);

module.exports = router;
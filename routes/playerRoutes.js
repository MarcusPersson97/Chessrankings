const express = require("express");
const router = express.Router();
const playerController = require("../Controller/playerController");

router.get('/', playerController.getPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/', playerController.createPlayer);
router.delete('/:id', playerController.deletePlayer);
router.patch('/:id', playerController.updatePlayer);
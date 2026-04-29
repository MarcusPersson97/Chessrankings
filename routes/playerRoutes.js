const express = require("express");
const router = express.Router();
const playerController = require("../Controller/playerController");

router.get('/', playerController.getPlayers);
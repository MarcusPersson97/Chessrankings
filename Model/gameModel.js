const mongoose = require("mongoose");
const gameSchema = require("../gameSchema");





async function createGame(gameData) {

  return await gameSchema.create(gameData);

}






async function getGames(){

  return await Game.find().populate("whitePlayerId").populate("blackPlayerId");

}

module.exports = {createGame, getGames};
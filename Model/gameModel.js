const mongoose = require("mongoose");
const gameSchema = require("../gameSchema");





async function createGame(gameData) {

  return await gameSchema.create(gameData);

}






async function getGames(){





}

module.exports = {createGame, getGames};
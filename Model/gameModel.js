const mongoose = require("mongoose");
const gameSchema = require("../gameSchema");





async function createGame(gameData) {

  return await gameSchema.create(gameData);

}


async function getGamesForPlayer(id) {
    return await gameSchema.find({
        $or: [
            { whitePlayerId: id },
            { blackPlayerId: id }
        ]
    });
}



async function getGames(){

  return await Game.find().populate("whitePlayerId").populate("blackPlayerId");

}

module.exports = {createGame, getGames, getGamesForPlayer};
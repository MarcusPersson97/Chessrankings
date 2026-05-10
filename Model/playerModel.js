const mongoose = require("mongoose");
const playerSchema = require("../playerSchema");
const gameSchema = require('../gameSchema');


async function getPlayers(filter){
    
    const players = await playerSchema.find(filter);
    return players;
    


}

async function createPlayer(player){
    
    return await playerSchema.create(player);

}

async function getPlayerById(id){


    return await playerSchema.findById(id);

}

async function deletePlayer(id){


    return await playerSchema.findByIdAndDelete(id);


}

async function updatePlayer(id){

    


}

async function getGamesFromId(id){

    return await gameSchema.find({ $or:[
    { whitePlayerId: playerId },
    { blackPlayerId: playerId }
  ]})


}

module.exports = {getPlayers, createPlayer, deletePlayer, getPlayerById, updatePlayer, getGamesFromId};
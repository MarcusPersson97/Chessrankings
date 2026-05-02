const mongoose = require("mongoose");
const playerSchema = require("./playerSchema.js");



async function getPlayers(){
    
    const players = await playerSchema.find();
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



module.exports = {getPlayers, createPlayer, deletePlayer, getPlayerById};
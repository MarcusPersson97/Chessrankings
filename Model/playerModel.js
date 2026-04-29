const mongoose = require("mongoose");
const playerSchema = require("./playerSchema.js");

async function getPlayers(){
    
    const players = await playerSchema.find();
    return players;


}

async function createPlayer(player){

    return await playerSchema.create(player);

}





module.exports = {getPlayers, createPlayer};
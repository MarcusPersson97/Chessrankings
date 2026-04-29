const mongoose = require("mongoose");
const playerSchema = require("./playerSchema.js");

async function getPlayers(){
    
    const players = await playerSchema.find();
    return players;
    

}

module.exports = {getPlayers};
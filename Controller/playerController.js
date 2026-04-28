const playerModel = require("../Model/playerModel");

async function getPlayers(req, res){


    try {
        const playerdata = await playerModel.getPlayers();
        return res.status(200).json(playerdata);
    } 
    
    catch (error) {
        return res.status(500).json({message: "Server error"});
    }

    

}
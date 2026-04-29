const playerModel = require("../Model/playerModel");

async function getPlayers(req, res){


    try {
        const playerdata = await playerModel.getPlayers();
        return res.status(200).json(playerdata);
    } 
    
    catch (error) {
        console.error(error);
        return res.status(500).json({message: "Server error"});
    }

    

}

    async function createPlayer(req, res){

        const {name, country, rating, title, peakRating, style} = req.body;
            
            if(!name || !country || !rating){
                return res.status(400).json({message: "Name, country and rating are required fields"});
            }

            if(rating<1000 || rating>3000){
                return res.status(400).json({message: "ratings must be between 400 and 3000"});
            }
        
        const playerData = {
            name,
            country,
            rating,
            title,
            peakRating,
            style
            };
            
        try {
            const newPlayer = await playerModel.createPlayer(playerData);
            return res.status(201).json({message: "player was succesfully created", player: newPlayer});
        } 

        catch (error) {
            console.error(error);
            return res.status(500).json({message: "Server error"});
        }  

    }

module.exports = {getPlayers, createPlayer};
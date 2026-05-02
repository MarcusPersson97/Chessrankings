const playerModel = require("../Model/playerModel");
const mongoose = require("mongoose");

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

    async function getPlayerById(req, res){

        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: "Invalid player id"});
        }

        let foundPlayer;

        try {
            
            foundPlayer = await playerModel.getPlayerById(id); 
            if(!foundPlayer){

                return res.status(404).json({message: "A player with that id was not found", id: id});

            }

            return res.status(200).json({message: "player was successfully found", player: foundPlayer}); 

        } 
        
        catch (error) {

            console.error(error);
            return res.status(500).json({message: "Server error"});

        }
    } 

    async function deletePlayer(req, res){

        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){

            return res.status(400).json({message: "Invalid player id", id: id});

        }

        let playerExists;
        try {
            playerExists = await playerModel.findPlayerById(id);
        }
        
        catch (error) {
            console.error(error);
            return res.status(500).json({message: "Server error"});
        }
        

        if(!playerExists){

            return res.status(404).json({message: "A player with that id was not found", id: id});
            
        }

        try {
            const deletedPlayer = await playerModel.deletePlayer(id);
            return res.status(200).json({message: "Player was successfully deleted", player: deletedPlayer});    
        }
        
        catch (error) {
            console.error(error);
            return res.status(500).json({message: "Server error"});

        }
    }

    async function updatePlayer(req, res) {

    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid player id" });
    }

    try {
        const updatedPlayer = await playerModel.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,      
                runValidators: true   
            }
        );

        if (!updatedPlayer) {
            return res.status(404).json({
                message: "Player not found",
                id
            });
        }

        return res.status(200).json({
            message: "Player updated successfully",
            player: updatedPlayer
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports = {getPlayers, createPlayer, deletePlayer, updatePlayer, getPlayerById};
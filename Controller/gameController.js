const gameModel = require("../Model/gameModel");
const mongoose = require("mongoose");

async function createGame(req, res) {
  try {
    const {
      whitePlayerId,
      blackPlayerId,
      result,
      opening,
      moves
    } = req.body;

    
    if (
      !whitePlayerId ||
      !blackPlayerId ||
      !result ||
      !opening
    ) {
      return res.status(400).json({
        error: "Missing required fields"
      });
    }

    
    if (whitePlayerId === blackPlayerId) {
      return res.status(400).json({
        error: "Players must be different"
      });
    }

    
    const validResults = ["1-0", "0-1", "1/2-1/2"];

    if (!validResults.includes(result)) {
      return res.status(400).json({
        error: "Invalid game result"
      });
    }

    
    const game = await gameModel.createGame({
      whitePlayerId,
      blackPlayerId,
      result,
      opening,
      moves
    });

    res.status(201).json(game);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error"
    });
  }
}






async function getGames(req, res) {
  try {
    const games = await gameModel.getGames();

    res.status(200).json(games);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error"
    });
  }
}



module.exports = {createGame, getGames};
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  whitePlayerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },
  blackPlayerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true
  },
  result: {
    type: String,
    required: true,
    enum: ["1-0", "0-1", "1/2-1/2"]
  },
  opening: {
    type: String,
    required: true
  },
  moves: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Game", gameSchema);
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1000,
    max: 3000
  },
  title: {
    type: String,
    enum: ["GM", "IM", "FM"],
    default: "GM"
  },
  peakRating: Number,
  style: String
});

module.exports = mongoose.model("Player", playerSchema);
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScoreSchema = new Schema({
  score: Number,
  video: String,
  category: String,
  time: Date
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;

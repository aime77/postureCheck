const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScoreSchema = new Schema({
  score: Number,
  video: String,
  category: String,
  time: String,
  date: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;

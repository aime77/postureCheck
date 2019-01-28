const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
  googleId: String,
  firstName: String,
  scores: Number,
  video:,
  category,
  time:
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

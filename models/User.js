const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
  googleId: String,
  name: String,
  age: Number,
  zipcode: Number,
  profilePicture: String,
  athleticType: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;


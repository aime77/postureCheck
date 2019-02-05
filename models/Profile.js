const mongoose = require("mongoose");
const {Schema} = mongoose;

const ProfileSchema = new Schema({

  name: String,
  age: Number,
  zipcode: Number,
  profilePicture: String,
  athleticType: String,
  _user: { type: Schema.Types.ObjectId, ref: "Profile" }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;

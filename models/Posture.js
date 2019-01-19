const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostureSchema = new Schema({
  nickname: String,
  birthdate: Date
});

Posture.plugin(passportLocalMongoose);
const Posture = mongoose.model("Posture", PostureSchema);

module.exports = Posture;

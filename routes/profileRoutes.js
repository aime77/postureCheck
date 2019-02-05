const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const Profile = mongoose.model("Profile");
const User = mongoose.model("User");

module.exports = app => {
  app.post("/api/forms", requireLogin, async (request, response) => {

    try {
      const newProfile = await Profile.create({
        name: request.body.name,
        age: request.body.age,
        zipcode: request.body.zipcode,
        profilePicture: request.body.profilePicture,
        athleticType: request.body.athleticType,
        date: Date.now(),
        _user: request.user.id
      });

      if (newProfile) {
        response.send(user);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });

  app.get("/api/profile", requireLogin, async (request, response) => {
    try {
      const updateUser = await  Profile.findOne({ _user: request.user.id });

      if (updateUser) {
          console.log(updateUser)
        response.send(updateUser);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });
};

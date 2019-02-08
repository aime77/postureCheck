const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const Profile = mongoose.model("Profile");
const User = mongoose.model("User");

module.exports = app => {
  app.put("/api/forms", requireLogin, async (request, response) => {

    console.log(request.user.id);
    console.log(request.body.name)
    try {
      const newProfile = await User.update(
        { _id: request.user.id },

        {
          name: request.body.name,
          age: request.body.age,
          zipcode: request.body.zipcode,
          profilePicture: request.body.profilePicture,
          athleticType: request.body.athleticType,
          date: Date.now()
        }
      );

      if (newProfile) {
        console.log("success")
        response.send(user);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });

  app.get("/api/profile", requireLogin, async (request, response) => {
    console.log("hello");
    try {
      const updateUser = await User.findOne({ _id: request.user.id });

      if (updateUser) {
        console.log(updateUser);
        response.send(updateUser);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });

  app.put("/api/profile_update", requireLogin, async (request, response) => {
    console.log("hello");
    try {
      const updateUser = await User.update(
        { _user: request.user.id },
        {
          name: request.body.name,
          age: request.body.age,
          zipcode: request.body.zipcode,
          profilePicture: request.body.profilePicture,
          athleticType: request.body.athleticType,
          date: Date.now()
        }
      );

      if (updateUser) {
        console.log(updateUser);
        response.send(updateUser);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });
};

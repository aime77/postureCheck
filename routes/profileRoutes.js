const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const User = mongoose.model("Score");

module.exports = app => {
  app.put("/api/forms/", requireLogin, (request, response) => {
    console.log(request.body);
    try {
      const updateUser = User.update(
        { _id: request.user._id },
        {
          name: request.body.name,
          profilePicture: request.body.profilePicture,
          age: request.body.age,
          athleticType: request.body.athleticType
        },
        { new: true }
      );

      if (updateUser) {
        response.send(user);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });
};

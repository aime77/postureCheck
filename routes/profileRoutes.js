const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const User = mongoose.model("Score");

module.exports = app => {
  app.put("/api/forms/", requireLogin, (request, res) => {
    console.log(requset.body);
    const { profilePicture, age, time, zipcode, athleticType } = request.body;
    try {
      const updateProfile = User.update(
        {
          name,
          profilePicture,
          age,
          time,
          zipcode,
          athleticType
        },
        { new: true }
      );
      response.send(user);
    } catch (err) {
      response.status(422).send(err);
    }
  });
};

const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const Score = mongoose.model("Score");

module.exports = app => {
  app.post("/api/scores", requireLogin, async (request, response) => {
    console.log(request.user);
    console.log(response);
    
   

    const scoreNew = new Score({
      score,
      video,
      category,
      time,
      date: Date.now(),
      _user: request.user.id
    });

    try {
      await scoreNew.save();
    } catch (err) {
      response.status(422).send(err);
    }
  });
};

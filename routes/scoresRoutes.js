const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Score = mongoose.model("Score");

module.exports = app => {
  app.post("/api/scores", requireLogin, async (request, response) => {
    console.log(request.user);
    console.log(request.body);
    try {
      const newScore = await Score.create({
        score: request.body.score,
        videoSelected: request.body.selectedVideo,
        time: request.body.time,
        date: Date.now(),
        _user: request.user.id
      });

      if (newScore) {
        response.send(user);
      }
    } catch (err) {
      response.status(422).send(err);
    }
  });
};

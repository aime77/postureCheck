const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const keys = require("./config/keys");
require("./models/User");
require("./models/Scores");
require("./services/passport");

mongoose.connect(keys.mongoURI || "mongodb://localhost/posture-check");

const app = express();

app.use(
  cookieSession({
    maxAge: 20 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/scoresRoute")

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌎 API server on port ${PORT}`);
});

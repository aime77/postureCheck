const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require("./models/User");

const app = express();

mongoose.connect(keys.mongoURI || "mongodb://localhost/posture-check");

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`🌎 API server on port ${PORT}`);
});

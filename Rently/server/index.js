const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const PORT = process.env.PORT || 8080;

authRoutes(app);

//middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});

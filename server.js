// install express package
const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
const appRouter = require("./routes/appRouter");
const passport = require("./config/passport");

//Setting up morgan
app.use(morgan("dev"));

//Setting up cors
app.use(cors());

//Parse JSON bodies
app.use(express.json());

//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//Configure passport
app.use(passport.initialize());

const port = 3000;

app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

// import packages
const fs = require("fs");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const logger = require("morgan");

// import db
const connectDB = require("./config/db");

// error handler
const { errorHandler } = require("./middleware/errorMiddleware");

// set default port
const port = process.env.PORT || 5000;

// initalise db
connectDB();

// initialise express app
const app = express();

// use cors
app.use(cors());

// use json
app.use(express.json());

// express routes
// API V1

app.use("/api/v1", require("./routes/forumRoutes"));

// create a write stream to the file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

// middleware
app.use(errorHandler);

app.use(logger("dev"));

// initialise server
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

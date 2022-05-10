// import packages
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");

// import db
const connectDB = require("./config/db");

// error handler
const { errorHandler } = require("./middleware/errorMiddleware");
const { logHandler } = require("./middleware/logHandler");

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

// log routes
app.use(logHandler);

// express routes
// API V1

app.use("/api/v1", require("./routes/forumRoutes"));

// initialise error handler
app.use(errorHandler);

// initialise server
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

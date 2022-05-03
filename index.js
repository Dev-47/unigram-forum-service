// import packages
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");

// import db
const connectDB = require("./config/db");

// error handler
const { errorHandler } = require("./middleware/errorMiddleware");

// set default port
const port = process.env.PORT || 5000;

// iniitalise db
connectDB();

// initialise express app
const app = express();

// use cors
app.use(cors());

// use json
app.use(express.json());

// express routes
app.use("/", require("./routes/testRoutes"));
app.use("/forum", require("./routes/forumRoutes"));

// initialise error handler
app.use(errorHandler);

// initialise server
app.listen(port, () => console.log(`server running on port ${port}`));

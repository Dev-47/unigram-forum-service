// imports
const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const logger = require("morgan");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

// set default port
const port = process.env.PORT || 5000;

// connect db
connectDB();

// initialise express app
const app = express();

// write stream to log file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// middlewares
app.use(express.json());
app.use(errorHandler);
app.use(cors());
app.use(logger("dev", { stream: accessLogStream }));

// routes
app.use("/api/v1", require("./routes/forumRoutes"));

// start server
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

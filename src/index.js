// imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

// set default port
const port = process.env.PORT || 5000;

// connect db
connectDB();

// initialise express app
const app = express();

// middlewares
app.use(express.json());
app.use(errorHandler);
app.use(cors());

// routes
app.use("/api/v1", require("./routes/forumRoutes"));

// start server
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

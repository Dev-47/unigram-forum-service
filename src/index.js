const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./config/db");

const { errorHandler } = require("./middleware/errorMiddleware");
const { authMiddleware } = require("./middleware/authMiddleware");
// get env variables
require("dotenv").config();

// set default port
const port = process.env.PORT || 5000;

// connect db
connectDB();

// initialise express app
const app = express();

// middlewares
app.use(express.json());
app.use(errorHandler);
app.use(authMiddleware);
app.use(cors());
app.use(
  logger(
    "[:date[clf]] :method :url HTTP/:http-version :status :res[content-length] - :response-time ms"
  )
);

// routes
app.use("/api/v1", require("./routes/forumRoutes"));

// start server
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`)
);

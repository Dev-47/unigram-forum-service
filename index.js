// import packages
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
// error handler
const { errorHandler } = require("./middleware/errorMiddleware");
// set default port
const port = process.env.PORT || 5000;

// initialise express app
const app = express();

// use cors
app.use(cors());

// use json
app.use(express.json());

// initialise default headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// express routes
app.use("/", require("./routes/testRoutes"));

// initialise error handler
app.use(errorHandler);

// initialise server
app.listen(port, () => console.log(`server running on port ${port}`));

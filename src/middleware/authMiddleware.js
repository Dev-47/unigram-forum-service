const asyncHandler = require("express-async-handler");
const axios = require("axios").default;

const { USER_SERVICE_API_URL } = process.env;
axios.defaults.baseURL = USER_SERVICE_API_URL;

const SAFE_METHODS = ["GET", "OPTIONS", "HEAD"];

const authMiddleware = asyncHandler(async (req, res, next) => {
  if (!SAFE_METHODS.includes(req.method)) {
    if (!req.headers.authorization) {
      res.status(401).json({ error: "Authentication token is required" });
      next();
    } else {
      await axios({
        method: "GET",
        url: "/auth/profile/",
        headers: req.headers,
      })
        .then((res) => {})
        .catch((err) => {
          res.status(err.response.status).json(err.response.data);
        });
    }
  }

  next();
});

module.exports = { authMiddleware };

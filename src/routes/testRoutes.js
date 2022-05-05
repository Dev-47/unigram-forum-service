// import express
const express = require("express");

// import express router
const router = express.Router();

// get controllers
const { getContent, postContent } = require("../controllers/testController");

// router function
router.route("/").get(getContent).post(postContent);

// router export
module.exports = router;

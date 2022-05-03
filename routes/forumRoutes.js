// import express
const express = require("express");

// import express router
const router = express.Router();

// get controllers
const { getContent, postContent } = require("../controllers/testController");

// router function
router.route("/discussion").get(getContent).post(postContent);
router.route("/:id/reply").get(getContent).post(postContent);
router.route("./:id/vote").get(getContent).post(postContent);

// router export
module.exports = router;

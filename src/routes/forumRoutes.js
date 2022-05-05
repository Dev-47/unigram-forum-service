// import express
const express = require("express");

// import express router
const router = express.Router();

// get controllers
const {
  createDiscussion,
  discussionDetails,
  listDiscussion,
  updateDiscussion,
  deleteDiscussion,
} = require("../controllers/discussionController");

// router function

router.route("/discussion").get(listDiscussion).post(createDiscussion);
router
  .route("/discussion/:discussion_id")
  .get(discussionDetails)
  .put(updateDiscussion)
  .delete(deleteDiscussion);

// router export
module.exports = router;

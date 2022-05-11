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

const {
  addReply,
  replyDetails,
  updateReply,
  deleteReply,
} = require("../controllers/replyController");

const {
  addVote,
  getVotes,
  updateVote,
  removeVote,
} = require("../controllers/voteController");

// router function

// discussion routes
router.route("/discussion").get(listDiscussion).post(createDiscussion);
router
  .route("/discussion/:discussion_id")
  .get(discussionDetails)
  .put(updateDiscussion)
  .delete(deleteDiscussion);

// reply routes
router.route("/reply/").post(addReply);
router
  .route("/reply/:content_id")
  .get(replyDetails)
  .put(updateReply)
  .delete(deleteReply);

// vote routes
router.post("/vote/", addVote);
router.route("/vote/:content_id").get(getVotes).put(updateVote);
router.delete("/vote/:content_id/:vote_id", removeVote);

// router export
module.exports = router;

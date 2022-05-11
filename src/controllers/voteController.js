// express async handler
const asyncHandler = require("express-async-handler");

// vote model
const Vote = require("../models/voteModel");

// POST /vote/
const addVote = asyncHandler(async (req, res) => {
  const { body } = req;

  const add_vote = new Vote(body);

  try {
    // check if user has already voted
    const checkVote = await Vote.exists({
      user_id: body.user_id,
      content_id: body.content_id,
    });

    if (checkVote) {
      // update the vote
      const updated_vote = await Vote.findOneAndUpdate(
        checkVote.content_id,
        body,
        {
          new: true,
        }
      );

      res.status(200).json({
        success: true,
        message: "Vote updated",
        data: updated_vote,
      });
    }

    const __add_vote = await add_vote.save();

    res.status(201).json(__add_vote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /vote/:content_id/
const getVotes = asyncHandler(async (req, res) => {
  const { contentId } = req.params;

  try {
    const vote = await Vote.find({ content_id: contentId });

    // check if there are any votes
    if (!vote) {
      res.status(404).json({ message: "Votes Not Found on this content" });
    }

    res.status(200).json(vote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /vote/:content_id/:vote_id
const removeVote = asyncHandler(async (req, res) => {
  const { vote_id } = req.params;

  const vote = await Vote.findById(vote_id);

  try {
    if (!vote) {
      res.status(404).json({ message: "Not Found" });
    }
    await vote.remove();

    res.status(204).json({ message: "vote removed" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  addVote,
  getVotes,
  updateVote,
  removeVote,
};

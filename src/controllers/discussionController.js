// discussion model
const Discussion = require("../models/discussionModel");

// GET /discussion/
const listDiscussion = async (req, res) => {
  try {
    const discussion_list = await Discussion.find();

    res.status(200).json(discussion_list);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST /discussion/
const createDiscussion = async (req, res) => {
  const { body } = req;

  const create_discussion = new Discussion(body);

  try {
    const __create_discussion = await create_discussion.save();

    res.status(201).json(__create_discussion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET /discussion/:discussion_id/
const discussionDetails = async (req, res) => {
  const { discussion_id } = req.params;

  try {
    const discussion = await Discussion.findById(discussion_id);
    if (discussion == null) {
      res.status(404).json({ message: "Nof Found" });
    }

    res.status(200).json(discussion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /discussion/:discussion_id/
const updateDiscussion = async (req, res) => {
  const { discussion_id } = req.params;
  const { body } = req;

  try {
    const discussion_update = body;
    const updated_discussion = await Discussion.findOneAndUpdate(
      discussion_id,
      discussion_update
    );

    if (updated_discussion == null) {
      res.status(404).json({ message: "Nof Found" });
    }

    res.status(202).json(updated_discussion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /discussion/:discussion_id/
const deleteDiscussion = async (req, res) => {
  const { discussion_id } = req.params;

  try {
    await Discussion.findOneAndDelete(discussion_id);

    res.status(204).json(null);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  listDiscussion,
  createDiscussion,
  discussionDetails,
  updateDiscussion,
  deleteDiscussion,
};

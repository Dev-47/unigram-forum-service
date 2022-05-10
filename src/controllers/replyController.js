// discussion model
const Reply = require("../models/replyModel");

// POST /reply/
const addReply = async (req, res) => {
  const { body } = req;

  const add_reply = new Reply(body);

  try {
    const __add_reply = await add_reply.save();

    res.status(201).json(__add_reply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET /reply/:content_id/
const replyDetails = async (req, res) => {
  const { content_id } = req.params;

  try {
    const reply = await Reply.findById(content_id);
    if (reply == null) {
      res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(reply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /reply/:content_id/
const updateReply = async (req, res) => {
  const { content_id } = req.params;
  const { body } = req;

  try {
    const reply_update = body;
    const updated_reply = await Discussion.findOneAndUpdate(
      content_id,
      reply_update
    );

    if (updated_reply == null) {
      res.status(404).json({ message: "Not Found" });
    }

    res.status(202).json(updated_reply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /reply/:content_id/
const deleteReply = async (req, res) => {
  const { content_id } = req.params;

  try {
    await Reply.findOneAndDelete(content_id);

    res.status(204).json(null);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addReply,
  replyDetails,
  updateReply,
  deleteReply,
};

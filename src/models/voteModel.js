const { Schema, model } = require("mongoose");

const voteSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    content_id: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      enum: ["VOTE_UP", "VOTE_DOWN"],
      required: [
        true,
        'Please provide a valid action, either "VOTE_UP" or "VOTE_DOWN"',
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Vote", voteSchema);

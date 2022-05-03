const { Schema, model } = require("mongoose");

const replySchema = Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    discussion_id: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "Discussion",
    },
    reply_id: {
      type: String,
      required: false,
    },
    reply: {
      type: Object,
      user_id: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: [true, "Please add a comment"],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Reply", replySchema);

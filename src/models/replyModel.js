const { Schema, model } = require("mongoose");

const replySchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    content_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Discussion" || "Reply",
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Reply", replySchema);

const { Schema, model } = require("mongoose");

// discussion signals
const {
  generate_unique_discussion_slug,
} = require("./signals/discussionSignals");

const discussionSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please Add a Discussion title"],
    },
    body: {
      type: String,
      required: [true, "Please Add a body text"],
    },
    attachments: {
      type: Array,
      required: false,
    },
    slug: {
      type: String,
      required: false,
      unique: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

discussionSchema.pre("save", generate_unique_discussion_slug);

module.exports = model("Discussion", discussionSchema);

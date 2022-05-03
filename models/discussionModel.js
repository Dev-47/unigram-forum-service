const { Schema, model } = require("mongoose");
const slugify = require("slugify");

const discussionSchema = Schema(
  {
    id: {
      type: String,
      required: true,
    },
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
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
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

discussionSchema.pre("validate", (next) => {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  next();
});

module.exports = model("Discussion", discussionSchema);

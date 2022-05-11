const slugify = require("slugify");

function generate_unique_discussion_slug(next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
}

module.exports = {
  generate_unique_discussion_slug,
};

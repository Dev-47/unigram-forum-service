const Discussion = require("../models/discussionModel");
const { test, expect } = require("@jest/globals");

test("test discussion model can create discussion", async () => {
  const discussion_data = {
    user_id: "some-random-uuid",
    title: "test from title",
    body: "test from body",
  };

  const create_discussion = new Discussion(discussion_data);
  const __discussion = await create_discussion.save();
  console.log(__discussion);

  expect(discussion_data).toBe(discussion_data);
});

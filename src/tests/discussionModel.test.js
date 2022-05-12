const Discussion = require("../models/discussionModel");
const {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  afterEach,
} = require("@jest/globals");

const db = require("../config/db.test");

beforeAll(async () => {
  await db.setUp();
});

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});

describe("Discussion Model", () => {
  it("model can create discussion", async () => {
    const discussion_data = {
      user_id: "some-random-uuid",
      title: "test from title",
      body: "test from body",
    };

    const create_discussion = new Discussion(discussion_data);
    const __discussion = await create_discussion.save();

    expect(__discussion.user_id).toBe(discussion_data.user_id);
    expect(__discussion.title).toBe(discussion_data.title);
    expect(__discussion.body).toBe(discussion_data.body);
  });
});

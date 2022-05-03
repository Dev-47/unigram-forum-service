// post
const postContent = (req, res) => {
  const { body } = req.body;

  if (!req.body) {
    res.status(400);
    throw new Error("Please add a string");
  }

  try {
    console.log(`it worked! you sent ${body}`);
  } catch (err) {
    console.log("alaye check your code");
    console.error(err);
  }
  res.status(201).send("Server is working");
};

// get
const getContent = (req, res) => {
  res.status(200).send("this service is till in progress");
};

// functions export
module.exports = {
  postContent,
  getContent,
};

const logHandler = (req) => {
  console.log(req.method, req.url);
};

module.exports = {
  logHandler,
};

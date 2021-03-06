const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log(`DB Connected: ${connect.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

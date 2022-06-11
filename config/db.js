const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/scheduleNotification",
      {
        // const conn = await mongoose.connect(
        //   "db link",
        // {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log(`Database connected ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;

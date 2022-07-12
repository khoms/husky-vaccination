const mongoose = require("mongoose");

const connectDB = async () => {
  const link = process.env.DB_LINK;
  try {
    const link = process.env.DB_LINK;
    const conn = await mongoose.connect(
      "mongodb+srv://khoms:khoms@cluster0.xz6vo.mongodb.net/?retryWrites=true&w=majority",
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

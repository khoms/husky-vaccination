const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/error");

const user = require("./routes/user");
const auth = require("./routes/auth");
const dog = require("./routes/dog");
const appointment = require("./routes/appointment");
const admin = require("./routes/admin");

// const app = express();

const connectDB = require("./config/db");
connectDB();

var cors = require("cors");
const app = express(cors({ origin: "*" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
app.use(cookieParser());
dotenv.config({ path: "./config/config.env" });

app.use(express.json());

app.use(errorHandler);

app.use("/api/user", user);
app.use("/api/admin", admin);
app.use("/api/auth", auth);
app.use("/api/dog", dog);
app.use("/api/appointment", appointment);

//eerohandler middleware should be placed after the route
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const ipAdd = process.env.IP_ADD;

app.listen(PORT, console.log("Server running in " + ipAdd + ":" + PORT));

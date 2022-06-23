const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const errorHandler = require("./middleware/error");

const user = require("./routes/user");
const auth = require("./routes/auth");
const dog = require("./routes/dog");

const app = express();

const connectDB = require("./config/db");
connectDB();

var cors = require("cors");
// const app = express(cors({ origin: "*" }));

app.use(express.json());
dotenv.config({ path: "./config/config.env" });

app.use(express.json());

app.use(errorHandler);

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/dog", dog);

const PORT = process.env.PORT || 3000;
const ipAdd = process.env.IP_ADD;

app.listen(PORT, ipAdd, console.log("Server running in " + ipAdd + ":" + PORT));

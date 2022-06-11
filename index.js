const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const errorHandler = require("./middleware/error");

const app = express();

const connectDB = require("./config/db");
connectDB();

dotenv.config({ path: "./config/config.env" });

app.use(express.json());

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, process.env.IP_ADD, console.log("Server running in " + PORT));

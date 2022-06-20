const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your Dog name"],
  },
  species: {
    type: String,
  },
});

module.exports = mongoose.model("Dog", dogSchema);

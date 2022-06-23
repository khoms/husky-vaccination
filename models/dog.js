const mongoose = require("mongoose");

const vaccine = require("./vaccine");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your Dog name"],
  },
  breed: {
    type: String,
    required: [true, "Bredd name is required"],
  },
  totalDays: {
    type: Number,
    required: [
      true,
      "Please enter the total days count of your dog from birth",
    ],
  },
  gender: {
    type: String,
    required: [true, "Add gender"],
    enum: ["Male", "Female"],
  },
  imageUrl: {
    type: String,
    required: true,
    default: "https://iol.edu.np/wp-content/uploads/2021/03/unnamed.png",
  },
  vaccine: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vaccine",
    },
  ],
  userId: {
    type: String,
    required: [true, "UserId is required"],
  },
});

module.exports = mongoose.model("Dog", dogSchema);

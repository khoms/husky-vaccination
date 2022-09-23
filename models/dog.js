const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your Dog name"],
  },
  breed: {
    type: String,
    required: [true, "Bredd name is required"],
  },
  dob: {
    type: Date,
    required: [true, "Please enter  birth date of your dog"],
  },
  gender: {
    type: String,
    required: [true, "Add gender"],
    enum: ["Male", "Female"],
  },
  imageUrl: {
    type: String,
    // required: true,
    // default: "https://iol.edu.np/wp-content/uploads/2021/03/unnamed.png",
  },
  vaccine: {
    type: Array,
  },

  userId: {
    type: String,
    required: [true, "UserId is required"],
  },
  description: {
    type: String,
  },
});

dogSchema.index(
  { name: 1, userId: 1 },
  { unique: [true, "Two dogs with same name is invalid"] }
);

module.exports = mongoose.model("Dog", dogSchema);

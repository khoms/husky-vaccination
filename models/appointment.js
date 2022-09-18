const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  dogName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please add admin's email address"],
    trim: true,
    lowercase: true,
    validator(value) {
      if (validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  address: {
    type: String,
    required: [true, "Your current address is required"],
  },

  phone: {
    type: String,
    maxlength: [10, "Phone no. cannot be longer than 10 characters"],
  },
  date: {
    type: Date,
    required: true,
  },
  isHealthy: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "Requested",
    enum: ["Requested", "UnderReview", "Booked"],
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

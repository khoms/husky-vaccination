const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add admin name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please add admin's email address"],
    trim: true,
    lowercase: true,
    unique: [true, "Admin with this email already exists"],
    validator(value) {
      if (validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },

  password: {
    type: String,
    reqired: [true, "Please add password"],
    // minlength: 5,
    trim: true,
  },
  phone: {
    type: String,
    maxlength: [10, "Phone no. cannot be longer than 10 characters"],
  },
});

AdminSchema.pre("save", async function (next) {
  console.log(this.password);
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Sign JWT and return
AdminSchema.methods.getSignedJwtToken = () => {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

AdminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Admin", AdminSchema);

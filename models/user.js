const mongoose = require("mongoose");

const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter valid name"],
  },
  email: {
    type: String,
    required: [true, "Please enter Email."],
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address.");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: 5,
    trim: true,
    validate(value) {
      if (value.toLowerCase().include("password")) {
        throw new Error('Password cannot contain "password');
      }
    },
  },
  phone: {
    type: String,
    maxlength: [10, "Phone number cannot be longer than 10 character"],
  },
  address: {
    type: String,
  },
});

//Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.encryptPassword = async function (pw) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.pw, salt);
};

//Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);

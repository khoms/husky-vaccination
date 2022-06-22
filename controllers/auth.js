const ErrorResponse = require("../utils/errorResponse");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/user");
const Admin = require("../models/admin");

exports.register = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    //Create Token
    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token, data: user.id });
  } catch (error) {
    next(err);
  }
};

exports.userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(
        new ErrorResponse("Please Provide an Email and Password", 400)
      );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Email", 401));
    }

    //Check if password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Email and Password donot match", 400));
    }

    //Create Token
    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token, data: user.id });
  } catch (err) {
    next(err);
  }
};

exports.adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(
        new ErrorResponse("Please Provide an Email and Password", 400)
      );
    }

    const admin = await User.findOne({ email }).select("+password");

    if (!admin) {
      return next(new ErrorResponse("Invalid Email", 401));
    }

    //Check if password match
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Email and Password donot match", 400));
    }

    //Create Token
    const token = admin.getSignedJwtToken();

    res.status(200).json({ success: true, token, data: admin.id });
  } catch (err) {
    next(err);
  }
};

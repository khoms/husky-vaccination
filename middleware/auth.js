const Admin = require("../models/admin");

const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorResponse = require("../utils/errorResponse");

//check if admin is authenticated or not

exports.isAuthenticatedAdmin = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies;

  if (!token) {
    return next(new ErrorResponse("You neeed to log in for this action.", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.admin = await Admin.findById(decoded.id);

  next();
});

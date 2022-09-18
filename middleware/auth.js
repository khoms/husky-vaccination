const Admin = require("../models/admin");

const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorResponse = require("../utils/errorResponse");

//check if admin is authenticated or not

exports.isAuthenticatedAdmin = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  // console.log(req);

  console.log(token);

  // let token;

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.includes("Bearer")
  // ) {
  //   token = req.headers.authorization.split(" ")[1];
  // }

  if (!token) {
    return next(
      new ErrorResponse("You neeed to log in for this action. sk", 401)
    );
  }

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // req.admin = await Admin.findById(decoded.id);

  // next();

  try {
    //verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.admin = await Admin.findById(decoded.id);

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }
});

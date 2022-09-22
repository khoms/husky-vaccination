const ErrorResponse = require("../utils/errorResponse");
const path = require("path");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const sendEmail = require("../utils/sendEmail");

const Admin = require("../models/admin");

//get all admins
//Route GET/admins
exports.getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();

    res.status(200).json({ success: true, count: admins.length, data: admins });
  } catch (error) {
    res.status(400).json({ success: false });
  }
  // res.status(200).json({success:true,msg:'Show all admins'});
};

//get single admins

exports.getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return next(
        new ErrorResponse("Admin not found with id of" + req.params.id, 404)
      );
    }
    res.status(200).json({ success: true, data: admin });
  } catch (err) {
    // res.status(400).json({success:false})
    next(err);
  }
  // res.status(200).json({success:true,msg:'Show admin'+req.params.id});
};

//create new admin

exports.createAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json({ success: true, data: admin });
  } catch (err) {
    next(err);
    // res.status(400).json({success:false})
  }
  // console.log(req.body);
  // res.status(200).json({success:true,msg:'Created new admin'});
};

//update admin
exports.updateAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!admin) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: admin });
  } catch (err) {
    res.status(400).json({ success: false });
  }
  // res.status(200).json({success:true,msg:'Update admin'+req.params.id});
};

//delete admin

exports.deleteAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }

  // res.status(200).json({success:true,msg:'Delete admin'+req.params.id});
};

exports.sendMail = catchAsyncErrors(async (req, res, next) => {
  // email= req.body.email;
  const message = req.body.message;
  const email = req.body.email;

  try {
    await sendEmail({
      email: email,
      subject: "Vaccination Bookings Details",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to `,
    });
  } catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
});

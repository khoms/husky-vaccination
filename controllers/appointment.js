const ErrorResponse = require("../utils/errorResponse");
// const path = require("path");

const Appointment = require("../models/appointment");

//get all appointments
//Route GET/appointments
exports.getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find();

    res.status(200).json({
      success: true,
      count: appointments.lenghts,
      data: appointments,
    });
  } catch (error) {
    res.status(400).json({ success: false });
    console.log(error);
  }
  // res.status(200).json({success:true,msg:'Show all appointments'});
};

//get single appointments

exports.getAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return next(
        new ErrorResponse("Data not found with id of" + req.params.id, 404)
      );
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (err) {
    // res.status(400).json({success:false})
    next(err);
  }
  // res.status(200).json({success:true,msg:'Show appointment'+req.params.id});
};

//create new appointment

exports.createAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    next(err);
    // res.status(400).json({success:false})
  }
  // console.log(req.body);
  // res.status(200).json({success:true,msg:'Created new appointment'});
};

//update appointment
exports.updateAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!appointment) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: appointment });
  } catch (err) {
    res.status(400).json({ success: false });
  }
  // res.status(200).json({success:true,msg:'Update appointment'+req.params.id});
};

//delete appointment

exports.deleteAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }

  // res.status(200).json({success:true,msg:'Delete appointment'+req.params.id});
};

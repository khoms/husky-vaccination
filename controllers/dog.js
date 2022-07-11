const ErrorResponse = require("../utils/errorResponse");
const Dog = require("../models/dog");
const Vaccine = require("../models/vaccine");

//create new user
exports.createDog = async (req, res, next) => {
  try {
    let name, breed, totalDays, gender, userId, vaccine;
    const data = {
      name: req.body.name,
      breed: req.body.breed,
      totalDays: req.body.totalDays,
      gender: req.body.gender,
      userId: req.body.userId,
      vaccine: new Vaccine(),
    };
    const dog = await Dog.create(data);
    res.status(201).json({ success: true, data: dog });
  } catch (err) {
    next(err);
    // res.status(400).json({ success: false });
  }
};

//get single user
// exports.getUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return next(
//         new ErrorResponse("User not found with the id of " + req.params.id, 404)
//       );
//     }
//     res.status(200).json({ success: true, data: user });
//   } catch (err) {
//     next(err);
//   }
// };

//get all users
exports.getDogs = async (req, res, next) => {
  try {
    const dogs = await Dog.find();

    res.status(200).json({ success: true, count: dogs.length, data: dogs });
  } catch (err) {
    next(err);
  }
};

// //update user
// exports.updateUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!user) {
//       return res.status(400).json({ success: false });
//     }
//     res.status(200).json({ success: true, data: user });
//   } catch (err) {
//     res.status(400).json({ success: false });
//   }
// };

// //delete user
// exports.deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(400).json({ success: false });
//     }
//     res.status(200).json({ success: true, data: {} });
//   } catch (err) {
//     res.status(400).json({ success: false });
//   }
// };

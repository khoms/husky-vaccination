const ErrorResponse = require("../utils/errorResponse");
const Dog = require("../models/dog");
const Vaccine = require("../models/vaccine");

//create new dog
exports.createDog = async (req, res, next) => {
  try {
    let name, breed, totalDays, gender, userId, vaccine;
    const data = {
      name: req.body.name,
      breed: req.body.breed,
      dob: req.body.dob,
      gender: req.body.gender,
      userId: req.body.userId,
      description: req.body.description,
      vaccine: new Vaccine(),
    };
    const dog = await Dog.create(data);
    res.status(201).json({ success: true, data: dog });
  } catch (err) {
    next(err);
    // res.status(400).json({ success: false });
  }
};

// get single dog
exports.getDog = async (req, res, next) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) {
      return next(
        new ErrorResponse("Dog not found with the id of " + req.params.id, 404)
      );
    }
    res.status(200).json({ success: true, data: dog });
  } catch (err) {
    next(err);
  }
};

//get all fogs
exports.getDogs = async (req, res, next) => {
  try {
    const dogs = await Dog.find();

    res.status(200).json({ success: true, count: dogs.length, data: dogs });
  } catch (err) {
    next(err);
  }
};

// //update dog
exports.updateDog = async (req, res, next) => {
  try {
    const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!dog) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: dog });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// //delete dog
exports.deleteDog = async (req, res, next) => {
  try {
    const dog = await Dog.findByIdAndDelete(req.params.id);
    if (!dog) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

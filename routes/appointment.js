const express = require("express");

const {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
} = require("../controllers/appointment");

const router = new express.Router();
router.route("/").get(getAppointments).post(createAppointment);
// router.route('/').get(getUsers).post(createUser)
router.route("/:id").get(getAppointment).put(updateAppointment);
module.exports = router;

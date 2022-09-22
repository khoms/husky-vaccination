const express = require("express");

const {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
} = require("../controllers/appointment");

const { isAuthenticatedAdmin } = require("../middleware/auth");

const router = new express.Router();
router
  .route("/")
  .get(getAppointments)
  // .get(isAuthenticatedAdmin, getAppointments)
  .post(createAppointment);
// router.route('/').get(getUsers).post(createUser)
router
  .route("/:id")
  .get(getAppointment)
  // .get(isAuthenticatedAdmin, getAppointment)
  // .put(isAuthenticatedAdmin, updateAppointment);
  .put(updateAppointment);
module.exports = router;

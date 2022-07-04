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
  .get(isAuthenticatedAdmin, getAppointments)
  .post(createAppointment);
// router.route('/').get(getUsers).post(createUser)
router
  .route("/:id")
  .get(isAuthenticatedAdmin, getAppointment)
  .put(isAuthenticatedAdmin, updateAppointment);
module.exports = router;

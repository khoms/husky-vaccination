const express = require("express");

const {
  getAdmins,
  getAdmin,
  createAdmin,
  updateAdmin,
  sendMail,
} = require("../controllers/admin");

const router = new express.Router();
router.route("/").get(getAdmins).post(createAdmin);
// router.route('/').get(getUsers).post(createUser)
router.route("/:id").get(getAdmin).put(updateAdmin);

router.route("/sendMail").post(sendMail);
module.exports = router;

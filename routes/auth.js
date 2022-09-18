const express = require("express");

const {
  register,
  adminLogin,
  userLogin,
  adminLogout,
} = require("../controllers/auth");

const router = new express.Router();

router.route("/register", register);
router.route("/userLogin").post(userLogin);

router.route("/adminlogin").post(adminLogin);

router.route("/adminlogout").get(adminLogout);

module.exports = router;

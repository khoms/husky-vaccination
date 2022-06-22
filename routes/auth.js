const express = require("express");

const { register, adminLogin, userLogin } = require("../controllers/auth");

const router = new express.Router();

router.route("/register", register);
router.route("/userLogin").post(userLogin);

router.route("/adminlogin").post(adminLogin);

module.exports = router;

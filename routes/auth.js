const express = require("express");

const { register, loginUser, userLogin } = require("../controllers/auth");

const router = new express.Router();

router.route("/register", register);
router.route("/userLogin").post(userLogin);

module.exports = router;

const express = require("express");

const { createDog, getDogs } = require("../controllers/dog");

const router = new express.Router();

router.route("/").post(createDog).get(getDogs);

// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;

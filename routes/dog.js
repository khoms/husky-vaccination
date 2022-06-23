const express = require("express");

const { createDog } = require("../controllers/dog");

const router = new express.Router();

router.route("/").post(createDog);

// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;

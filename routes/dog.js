const express = require("express");

const {
  createDog,
  getDogs,
  getDog,
  updateDog,
  deleteDog,
} = require("../controllers/dog");

const router = new express.Router();

router.route("/").post(createDog).get(getDogs);

router.route("/:id").get(getDog).put(updateDog).delete(deleteDog);

module.exports = router;

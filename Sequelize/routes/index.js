const express = require("express");
const Car_Info = require("../models/car_info");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const cars = await Car_Info.findAll();
  try {
    res.render("select", { cars });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

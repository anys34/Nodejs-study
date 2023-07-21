const express = require("express");
const Car_Info = require("../models/car_info");

const router = express.Router();

router.get('/', async (req, res, next) => {
  const cars = await Car_Info.findAll();
  try {
    // console.log(cars);
    res.render('select', { cars });
    // res.send(car);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

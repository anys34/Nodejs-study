const express = require("express");
const Car_Info = require("../models/car_info");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Car_Info.findAll({
      where: {
        CarNum: "12가1234"
      }
    });
    res.render('select', { cars });
    // res.send(car);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

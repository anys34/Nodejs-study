const express = require("express");
const Car_Info = require("../models/car_info");
const router = express.Router();

var cars;

router.get("/", async (req, res, next) => {
  console.log(cars);
  res.render('select', { cars });
});

router.post("/", async (req, res, next) => {
  console.log(req.body.carnum);
  console.log("console 실행중");
  cars = await Car_Info.findAll({
    where: {
      CarNum: req.body.carnum,
    },
  });
  try {
    // console.log(cars);
    console.log("dsfsdfds");
    res.json(cars);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

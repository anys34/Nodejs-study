const express = require("express");
const Car_Info = require("../models/car_info");
const router = express.Router();

router.post("/", async (req, res, next) => {
  console.log(req.body.carnum);
  console.log("console 실행중");
  const cars = await Car_Info.findAll({
    where: {
      CarNum: req.body.carnum,
    },
  });
  try {
    // console.log(cars);
    res.json(cars);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

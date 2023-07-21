const express = require("express");
const Car_Info = require("../models/car_info");
const router = express.Router();

var cars;

router.get("/", async (req, res, next) => {
  res.render('show', { cars });
});

router.post("/", async (req, res, next) => {
  console.log(req.body.carnum);
  console.log("console 실행중");
  cars = await Car_Info.findAll({
    where: {
      CarNum: req.body.carnum,
    },
  });
});

module.exports = router;

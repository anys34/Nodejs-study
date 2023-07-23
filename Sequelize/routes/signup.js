const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const user = await User.findAll();
  console.log(user);
  try {
    res.render("user", { user });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const user = await User.findAll({
    where: {
      CarNum: req.body.carnum,
    },
  });

  if (user.length > 0) {
    res.send("fail");
  } else {
    await User.create({
      UserName: req.body.username,
      Password: req.body.password,
      CarNum: req.body.carnum,
    });
  }
});

module.exports = router;

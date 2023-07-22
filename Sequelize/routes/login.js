const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("login");
});

router.post("/", async (req, res, next) => {
  const user = await User.findAll({
    where: {
      UserName: req.body.username,
      Password: req.body.password,
    },
  });

  if (user.length > 0) {
    console.log("로그인 성공");
    res.send("success");
  } else {
    console.log("로그인 실패");
    res.status(401).send("failure");
  }
});

module.exports = router;

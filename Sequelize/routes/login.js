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
    req.session.user = {
        id : user[0].id,
        username: user[0].UserName,
    };
    res.send("success");
  } else {
    console.log("로그인 실패");
    res.send("failure");
  }
});

module.exports = router;

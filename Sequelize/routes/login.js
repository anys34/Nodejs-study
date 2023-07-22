const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.render("login");
});

router.post("/process", async (req, res, next) => {
  const user = await User.findAll({
    where: {
      UserName: req.body.username,
      Password: req.body.password,
    },
  });

  if (user.length > 0) {
    console.log("로그인 성공");
    res.redirect("/login/alert");
  } else {
    console.log("로그인 실패");
    res.redirect("/login");
  }
});

router.get("/alert", async (req, res, next) => {
  res.send("<script>alert('로그인 성공');location.href='/';</script>");
    // res.redirect('/');
});

module.exports = router;

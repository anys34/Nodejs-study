const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    if (req.session.user) {
      await User.update(
        {
          AccountNum: req.body.account,
        },
        {
          where: {
            id: req.session.user.id,
            UserName: req.session.user.username,
            CarNum: req.body.carnum,
          },
        }
      );
      res.send("success");
    } else {
      res.send("fail");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;

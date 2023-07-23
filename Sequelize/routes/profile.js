const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    if (req.session.user) {
      const { username } = req.session.user;
      res.send(`Welcome, ${username}!`);
    } else {
      res.redirect("/login");
    }
  });

module.exports = router;
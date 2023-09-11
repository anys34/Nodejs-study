const express = require("express");
const router = express.Router();

const Users = require("../models/users");

// create
router.get("/create/:id", async (req, res) => {
  const name = req.params.id;
  try {
    const result = await Users.create({
      name: name,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// read
router.get("/select/:id", async (req, res) => {
  const name = req.params.id;
  try {
    const result = await Users.findAll({
      where: {
        name: name,
      },
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// update
router.get("/update/:id/:uid", async (req, res) => {
  const name = req.params.id;
  const uname = req.params.uid;
  try {
    const result = await Users.update(
      {
        name: uname,
      },
      {
        where: {
          name: name,
        },
      }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete
router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Users.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

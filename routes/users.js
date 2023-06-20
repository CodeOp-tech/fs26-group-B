var express = require("express");
var router = express.Router();
const models = require("../models");

// Get all users

router.get("/", async function (req, res, next) {
  try {
    const users = await models.User.findAll({
      include: ["invitations", "proposals"],
    });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get user by id
router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const user = await models.User.findOne({ where: { id } });

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get user by username
router.get("/username/:username", async function (req, res, next) {
  console.log(req.params.username);
  try {
    const { username } = req.params;
    const user = await models.User.findOne({
      where: { username },
      attributes: { exclude: ["password"] },
    });

    if (user) {
      res.send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE all users
// router.delete("/", async (req, res) => {
//   try {
//     // Delete all events
//     await models.User.destroy({
//       where: {},
//       truncate: true, // This ensures that the table is truncated, removing all rows
//     });

//     res.send("All users deleted successfully");
//   } catch (error) {
//     console.error(error); // Log the error for debugging purposes
//     res.status(500).send("Internal server error");
//   }
// });

// FAKE POST
// router.post("/", async function (req, res, next) {
//   const { name, username, password, email } = req.body;
//   try {
//     const user = await models.User.create({
//       name,
//       username,
//       password,
//       email,
//     });
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;

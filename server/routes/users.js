import { Sequelize, DataTypes } from "sequelize";
var express = require("express");
var router = express.Router();


/* GET users listing. */
router.get("/", async function (req, res, next) {
  const sequelize = new Sequelize("sqlite::memory:");
  await sequelize.sync();
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  });

  const jane = await User.create({
    username: "janedoe",
    birthday: new Date(1980, 6, 20),
  });
  const users = await User.findAll();
  res.send("respond with a resource " + users);
});

module.exports = router;

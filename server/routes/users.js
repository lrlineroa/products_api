import db from "../database/models";
var express = require("express");
var router = express.Router();


/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await db.User.findAll();
  res.send("respond with a resource " + users);
});

module.exports = router;

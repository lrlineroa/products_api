import { registerUser, signInUser } from "../controllers/auth.controller";
import { getInvoicesByUserId } from "../controllers/invoices.controller";
import db from "../database/models";
var express = require("express");
var router = express.Router();


/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await db.User.findAll();
  res.send("respond with a resource " + users);
});

// Registration route
router.post('/sign-up', registerUser);


// Signin route
router.post('/sign-in', signInUser);

router.get('/:user_id/invoices',getInvoicesByUserId);

module.exports = router;

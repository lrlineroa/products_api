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


/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// Registration route
router.post('/sign-up', registerUser);


// Signin route
router.post('/sign-in', signInUser);

router.get('/:user_id/invoices',getInvoicesByUserId);

module.exports = router;


var express = require("express");
const { getInvoices, createInvoice, readOneInvoice } = require("../controllers/invoices.controller");
var router = express.Router();

/* GET users listing. */
router.get("/", getInvoices);

// Registration route
router.post("/", createInvoice);

router.get("/:id", readOneInvoice);

// // Signin route
// router.post('/sign-in', signInUser);

module.exports = router;

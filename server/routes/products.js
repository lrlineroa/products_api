import { createProduct } from "../controllers/products.controller";
import db from "../database/models";
var express = require("express");
var router = express.Router();


/* GET users listing. */
router.get("/", async function (req, res, next) {
  const products = await db.Product.findAll();
  res.send("respond with a resource " + products);
});

// Registration route
router.post('/', createProduct);


// // Signin route
// router.post('/sign-in', signInUser);

module.exports = router;

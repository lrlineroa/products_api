import {
  createProduct,
  getProducts,
  readOneProduct,
  updateAProduct,
  deleteAProduct,
} from "../controllers/products.controller";
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", getProducts);

// Registration route
router.post("/", createProduct);

router.get("/:id", readOneProduct);

router.put("/:id", updateAProduct);

router.delete("/:id", deleteAProduct);

// // Signin route
// router.post('/sign-in', signInUser);

module.exports = router;

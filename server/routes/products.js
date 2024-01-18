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
/**
 * @api {get} /products Listing all products
 * @apiName GetAllProducts
 * @apiGroup Products
 * 
 * @apiSuccess {Object} products array of products in the database.
 * 
 *@apiSuccessExample Success-Response:
 *HTTP/1.1 200 OK
 *[
	  {
      "id": 3,
      "batch_number": "1209310298",
      "name": "Producto costoso",
      "price": "1200.00",
      "stock": 40,
      "entry_date": "2024-01-17T20:24:05.000Z",
      "createdAt": "2024-01-17T20:24:05.000Z",
      "updatedAt": "2024-01-17T20:24:05.000Z"
	  }
 *]
 */
router.get("/", getProducts);

// Registration route
/**
 * @api {post} /products Create a product
 * @apiName CreateProduct
 * @apiGroup Products
 * 
 * @apiBody {String} name Product name to be inserted.
 * @apiBody {String} batch_name Product batch_name to be inserted.
 * @apiBody {Number} price Product price to be inserted.
 * @apiBody {Number} stock Product stock to be inserted.
 * 
 * @apiSuccess {String} response of the operation.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "Product Added successfully"
 */
router.post("/", createProduct);

/**
 * @api {get} /products/:id Read one product
 * @apiName ReadOneProduct
 * @apiGroup Products
 * 
 * @apiParam {Number} id Product id to be read.
 * 
 * @apiSuccess {String} name Product name read.
 * @apiSuccess {String} batch_name Product batch_name read.
 * @apiSuccess {Number} price Product price read.
 * @apiSuccess {Number} stock Product stock read.
 * @apiSuccess {Date} entry_date Product entry_date read.
 * @apiSuccess {Date} createdAt Product createdAt read.
 * @apiSuccess {Date} updatedAt Product updatedAt read.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 "id": 3,
 "batch_number": "1209310298",
 "name": "Producto barato",
 "price": "0.00",
 "stock": 0,
 "entry_date": "2024-01-17T20:24:05.000Z",
 "createdAt": "2024-01-17T20:24:05.000Z",
 "updatedAt": "2024-01-17T20:24:05.000Z"
}
*/
router.get("/:id", readOneProduct);

/**
 * @api {put} /products/:id Update a product
 * @apiName UpdateAProduct
 * @apiGroup Products
 * 
 * @apiParam {Number} id Product id to be updated.
 * 
 * @apiBody {String} name Product name to be updated.
 * @apiBody {String} batch_name Product batch_name to be updated.
 * @apiBody {Number} price Product price to be updated.
 * @apiBody {Number} stock Product stock to be updated.
 * 
 * @apiSuccess {String} response of the operation.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "Product updated successfully"
 */
router.put("/:id", updateAProduct);

/**
 * @api {delete} /products/:id Delete a product
 * @apiName DeleteAProduct
 * @apiGroup Products
 * 
 * @apiParam {Number} id Product id to be deleted.
 * 
 * @apiSuccess {String} response of the operation.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "Product deleted successfully"
 */
router.delete("/:id", deleteAProduct);

// // Signin route
// router.post('/sign-in', signInUser);

module.exports = router;

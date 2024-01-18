
var express = require("express");
const { getInvoices, createInvoice, readOneInvoice } = require("../controllers/invoices.controller");
var router = express.Router();

/* GET invoices listing. */
/**
 * @api {get} /invoices Listing All Invoices 
 * @apiName GetAllInvoices
 * @apiGroup Invoices
 * 
 * 
 * @apiSuccess {Object} invoices array of invoices in de database.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
	{
		"id": 17,
		"total": "1500.00",
		"subtotal": "1250.00",
		"taxes": "250.00",
		"invoice_date": null,
		"createdAt": "2024-01-17T21:49:23.000Z",
		"updatedAt": "2024-01-17T21:49:23.000Z",
		"UserId": 2,
		"Products": [
			{
				"id": 3,
				"batch_number": "1209310298",
				"name": "Jabón en polvo",
				"price": "1200.00",
				"stock": 0,
				"entry_date": "2024-01-17T20:24:05.000Z",
				"createdAt": "2024-01-17T20:24:05.000Z",
				"updatedAt": "2024-01-18T11:42:28.000Z",
				"Invoice_items": {
					"createdAt": "2024-01-17T21:49:23.000Z",
					"updatedAt": "2024-01-17T21:49:23.000Z",
					"InvoiceId": 17,
					"ProductId": 3
				}
			}
		],
		"User": {
			"id": 2,
			"name": "carlos2",
			"email": "carlos2@test.com",
			"password": "$2a$15$bKncZM7.4u/S8lXA3sNPdOC9VdrVGHwL58HSRDjqwzbFi3/bZBUSS",
			"createdAt": "2024-01-17T21:14:25.000Z",
			"updatedAt": "2024-01-17T21:14:25.000Z",
			"UserRoleId": 2
		}
	},
	{
		"id": 19,
		"total": "2400.00",
		"subtotal": "2400.00",
		"taxes": "0.00",
		"invoice_date": null,
		"createdAt": "2024-01-18T12:52:59.000Z",
		"updatedAt": "2024-01-18T12:52:59.000Z",
		"UserId": 12,
		"Products": [
			{
				"id": 3,
				"batch_number": "1209310298",
				"name": "Jabón en polvo",
				"price": "1200.00",
				"stock": 0,
				"entry_date": "2024-01-17T20:24:05.000Z",
				"createdAt": "2024-01-17T20:24:05.000Z",
				"updatedAt": "2024-01-18T11:42:28.000Z",
				"Invoice_items": {
					"createdAt": "2024-01-18T12:52:59.000Z",
					"updatedAt": "2024-01-18T12:52:59.000Z",
					"InvoiceId": 19,
					"ProductId": 3
				}
			}
		],
		"User": {
			"id": 12,
			"name": "Cliente",
			"email": "cliente@cliente.com",
			"password": "$2a$15$tiZsTtfUQPvYyCbWIribMOR4bSps83mrASgSax122R1/9A5AAJ4N2",
			"createdAt": "2024-01-18T03:41:26.000Z",
			"updatedAt": "2024-01-18T03:41:26.000Z",
			"UserRoleId": 2
		}
	},
	{
		"id": 20,
		"total": "2400.00",
		"subtotal": "2400.00",
		"taxes": "0.00",
		"invoice_date": null,
		"createdAt": "2024-01-18T12:58:21.000Z",
		"updatedAt": "2024-01-18T12:58:21.000Z",
		"UserId": 1,
		"Products": [
			{
				"id": 3,
				"batch_number": "1209310298",
				"name": "Jabón en polvo",
				"price": "1200.00",
				"stock": 0,
				"entry_date": "2024-01-17T20:24:05.000Z",
				"createdAt": "2024-01-17T20:24:05.000Z",
				"updatedAt": "2024-01-18T11:42:28.000Z",
				"Invoice_items": {
					"createdAt": "2024-01-18T12:58:21.000Z",
					"updatedAt": "2024-01-18T12:58:21.000Z",
					"InvoiceId": 20,
					"ProductId": 3
				}
			}
		],
		"User": {
			"id": 1,
			"name": "carlos",
			"email": "carlos@test.com",
			"password": "$2a$15$VhoPxo6Z.hyFkWu3cCAh6ef79mX.YVP6P9bCeGnObobeW.DOqaG8.",
			"createdAt": "2024-01-17T21:13:50.000Z",
			"updatedAt": "2024-01-17T21:13:50.000Z",
			"UserRoleId": 2
		}
	}
]
 */
router.get("/", getInvoices);

// Registration route
/**
 * @api {post} /invoices Create an Invoice
 * @apiName CreateAnInvoice
 * @apiGroup Invoices
 * 
 * @apiBody {Number} UserId Identificator of the person who own the Invoice.
 * @apiBody {Number} total Invoice total to be inserted.
 * @apiBody {Number} subtotal Invoice subtotal to be inserted.
 * @apiBody {Number} taxes Invoice taxes to be inserted.
 * @apiBody {Object} invoice_items Array of the product ids with its quantity and partial price.
 * @apiExample {curl} Example curl usage: 
 * curl --request POST \
  --url http://localhost:3001/invoices \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"UserId": 2,
	"total": 1500,
	"subtotal": 1250,
	"taxes": 250,
	"invoice_items": [
		{
			"ProductId": 3,
			"quantity": 2,
			"unit_price": 5000,
			"total_price": 1000
		}
	]
}'
 * @apiSuccess {String} response of the operation.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     "Product Added successfully"
 */
router.post("/", createInvoice);

/**
 * @api {get} /invoices/:id Read one invoice
 * @apiName ReadOneInvoice
 * @apiGroup Invoices
 * 
 * @apiParam {Number} id Invoice id to be read.
 * 
 * @apiSuccess {Number} UserId Identificator of the person who own the Invoice.
 * @apiSuccess {Number} total Invoice total read.
 * @apiSuccess {Number} subtotal Invoice subtotal read.
 * @apiSuccess {Number} taxes Invoice taxes read.
 * @apiSuccess {Date} createdAt Invoice createdAt read.
 * @apiSuccess {Date} updatedAt Invoice updatedAt read.
 * 
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "id": 17,
		"total": "1500.00",
		"subtotal": "1250.00",
		"taxes": "250.00",
		"invoice_date": null,
		"createdAt": "2024-01-17T21:49:23.000Z",
		"updatedAt": "2024-01-17T21:49:23.000Z",
}
*/
router.get("/:id", readOneInvoice);

// // Signin route
// router.post('/sign-in', signInUser);

module.exports = router;

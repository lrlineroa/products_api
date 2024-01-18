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
 * @api {post} /users/sign-up Register an User
 * @apiName SignUp
 * @apiGroup Auth
 * 
 * @apiBody {String} name Person name to be registered.
 * @apiBody {String} email Person email to be registered.
 * @apiBody {String} password Person password to be registered.
 * @apiBody {Number} UserRoleId Person UserRoleId to be registered can be 1 or 2.
 * 
 * @apiSuccess {Number} id Person id just registered.
 * @apiSuccess {String} name Person name just registered.
 * @apiSuccess {String} email Person email just registered.
 * @apiSuccess {Number} UserRoleId Person UserRoleId just registered.
 * @apiSuccess {String} accessToken Person accessToken just registered for auth purposes.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "id": 990,
 *      "name": "admin",
 *      "UserRoleId":1,
 *      "email": "admin@test.com",
 *      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTcwNTUzOTY4MCwiZXhwIjoxNzA1NTM5NzE2fQ.ED2xu3THaVq9O2bq2O37xkZ5yBVH1q8"
 *      }
 */
// Registration route
router.post('/sign-up', registerUser);


/**
 * @api {post} /users/sign-in Login an User
 * @apiName SignIn
 * @apiGroup Auth
 * 
 * @apiBody {String} name Person name to be logged in.
 * @apiBody {String} email Person email to be logged in.
 * @apiBody {String} password Person password to be logged in.
 * @apiBody {Number} UserRoleId Person UserRoleId to be logged in can be 1 or 2.
 * 
 * @apiSuccess {Number} id Person id just logged in.
 * @apiSuccess {String} name Person name just logged in.
 * @apiSuccess {String} email Person email just logged in.
 * @apiSuccess {Number} UserRoleId Person UserRoleId just logged in.
 * @apiSuccess {String} accessToken Person accessToken just logged in for auth purposes.
 * 
 *  @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "id": 990,
 *      "name": "admin",
 *      "UserRoleId":1,
 *      "email": "admin@test.com",
 *      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTcwNTUzOTY4MCwiZXhwIjoxNzA1NTM5NzE2fQ.ED2xu3THaVq9O2bq2O37xkZ5yBVH1q8"
 *      }
 */
// Signin route
router.post('/sign-in', signInUser);

/**
 * @api {get} users/:user_id/invoices Get Invoices for an user
 * @apiName UserInvoices
 * @apiGroup Users
 * 
 * @apiParam {Number} user_id id of the person who own the invoices.
 * 
 * @apiSuccess {Object} invoices array of invoices of the user.
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
router.get('/:user_id/invoices',getInvoicesByUserId);

module.exports = router;

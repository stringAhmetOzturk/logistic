import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/cache.js"
import {getAllCustomers,getCustomer} from "../controllers/customers/get.customers.js"
import {createCustomer} from "../controllers/customers/create.customers.js"
import {updateCustomer} from "../controllers/customers/update.customers.js"
import {deleteCustomer} from "../controllers/customers/delete.customers.js"
import { verify } from "../config/jwt.js"

router.post("/",cacheDelete("customers"),createCustomer)
router.get("/", cacheGet("customers"),getAllCustomers);
router.get("/:id",getCustomer)
router.put("/:id",verify,cacheDelete("customers"),updateCustomer)
router.delete("/:id",verify,cacheDelete("customers"),deleteCustomer)

export default router

import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/cache.js"
import {getAllShippings,getShipping} from "../controllers/shippings/get.shippings.js"
import {createShipping} from "../controllers/shippings/create.shippings.js"
import {updateShipping} from "../controllers/shippings/update.shippings.js"
import {deleteShipping} from "../controllers/shippings/delete.shippings.js"
import { verify } from "../config/jwt.js"

router.post("/",cacheDelete("shippings"),createShipping)
router.get("/", cacheGet("shippings"),getAllShippings);
router.get("/:id",getShipping)
router.put("/:id",verify,cacheDelete("shippings"),updateShipping)
router.delete("/:id",verify,cacheDelete("shippings"),deleteShipping)

export default router

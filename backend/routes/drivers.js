import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/cache.js"
import {getAllDrivers,getDriver} from "../controllers/drivers/get.drivers.js"
import {createDriver} from "../controllers/drivers/create.drivers.js"
import {updateDriver} from "../controllers/drivers/update.drivers.js"
import {deleteDriver} from "../controllers/drivers/delete.drivers.js"
import { verify } from "../config/jwt.js"

router.post("/",cacheDelete("drivers"),createDriver)
router.get("/", cacheGet("drivers"),getAllDrivers);
router.get("/:id",getDriver)
router.put("/:id",verify,cacheDelete("drivers"),updateDriver)
router.delete("/:id",verify,cacheDelete("drivers"),deleteDriver)

export default router

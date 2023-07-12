import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/cache.js"
import {createVehicle} from "../controllers/vehicles/create.vehicles.js"
import {getAllVehicles,getVehicle} from "../controllers/vehicles/get.vehicles.js"
import {deleteVehicle} from "../controllers/vehicles/delete.vehicles.js"
import {updateVehicle} from "../controllers/vehicles/update.vehicles.js"
import { verify } from "../config/jwt.js"

router.post("/",cacheDelete("vehicles"),createVehicle)
router.get("/",cacheGet("vehicles"),getAllVehicles)
router.get("/:id",getVehicle)
router.put("/:id",verify,cacheDelete("vehicles"),updateVehicle)
router.delete("/:id",verify,cacheDelete("vehicles"),deleteVehicle)

export default router
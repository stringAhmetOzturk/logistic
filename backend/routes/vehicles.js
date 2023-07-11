import express from "express"
const router = express.Router()
import {createVehicle} from "../controllers/vehicles/create.vehicles.js"
import {getAllVehicles,getVehicle} from "../controllers/vehicles/get.vehicles.js"
import {deleteVehicle} from "../controllers/vehicles/delete.vehicles.js"
import {updateVehicle} from "../controllers/vehicles/update.vehicles.js"

router.post("/",createVehicle)
router.get("/",getAllVehicles)
router.get("/:id",getVehicle)
router.put("/:id",updateVehicle)
router.delete("/:id",deleteVehicle)

export default router
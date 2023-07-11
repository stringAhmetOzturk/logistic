import {db} from "../../config/connect.js"
import redisClient from "../../config/redis.js"
// get all vehicles
export const getAllVehicles = (req,res) =>{
    const q = "SELECT * FROM vehicles"
    db.query(q,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}

// get one vehicle
export const getVehicle = (req,res) =>{
    const vehicleId = req.params.id
    const q = "SELECT * FROM vehicles WHERE id = ?"
    db.query(q,vehicleId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
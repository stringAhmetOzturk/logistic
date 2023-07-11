import {db} from "../../config/connect.js"
// get all vehicles
export const deleteVehicle = (req,res) =>{
    const vehicleId = req.params.id
    const q = "DELETE FROM vehicles WHERE id = ?"
    db.query(q,vehicleId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
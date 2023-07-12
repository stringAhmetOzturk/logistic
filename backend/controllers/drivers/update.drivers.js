import {db} from "../../config/connect.js"
// get all vehicles
export const updateDriver = (req,res) =>{
    const driverId = req.params.id
    const q = "UPDATE drivers SET name = 'updated' WHERE id = ?"
    db.query(q,driverId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
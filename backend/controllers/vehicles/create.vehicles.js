import {db} from "../../config/connect.js"
// get all vehicles
export const createVehicle = (req,res) =>{
    const name = req.body.name
    const q = "INSERT INTO vehicles (`name`) VALUES (?)"
    db.query(q,name,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
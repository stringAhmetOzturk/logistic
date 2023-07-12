import {db} from "../../config/connect.js"
// get all vehicles
export const createCustomer = (req,res) =>{
    const name = req.body.name
    const q = "INSERT INTO customers (`name`) VALUES (?)"
    db.query(q,name,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
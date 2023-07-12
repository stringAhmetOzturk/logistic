import {db} from "../../config/connect.js"
// get all vehicles
export const updateCustomer = (req,res) =>{
    const customerId = req.params.id
    const q = "UPDATE customers SET name = 'updated' WHERE id = ?"
    db.query(q,customerId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
import {db} from "../../config/connect.js"
// get all vehicles
export const deleteShipping = (req,res) =>{
    const shippingId = req.params.id
    const q = "DELETE FROM shippings WHERE id = ?"
    db.query(q,shippingId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
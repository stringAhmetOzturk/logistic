import {db} from "../../config/connect.js"
// get all vehicles
export const deleteBranch = (req,res) =>{
    const branchId = req.params.id
    const q = "DELETE FROM branches WHERE id = ?"
    db.query(q,branchId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
import {db} from "../../config/connect.js"
// get all vehicles
export const updateBranch = (req,res) =>{
    const branchId = req.params.id
    const q = "UPDATE branches SET name = 'updated' WHERE id = ?"
    db.query(q,branchId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
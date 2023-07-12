import {db} from "../../config/connect.js"
// update a user
export const updateUser = (req,res) =>{
    const userId = req.params.id
    const q = "UPDATE users SET username = 'updated' WHERE id = ?"
    db.query(q,userId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
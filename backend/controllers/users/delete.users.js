import {db} from "../../config/connect.js"
//delete a user
export const deleteUser = (req,res) =>{
    const userId = req.params.id
    if (req.user.id == userId) {
        const q = "DELETE FROM users WHERE id = ?"
        db.query(q,userId,(error,data)=>{
            if (error) {
                return res.json(error)
            } else {
                return res.json(data)            
            }
        })
    }else{
        return res.json("You are not allowed to delete it.")
    }

 
}


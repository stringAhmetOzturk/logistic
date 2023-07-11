import {db} from "../../config/connect.js"
import redisClient from "../../config/redis.js";
//delete a user
export const deleteUser = (req,res) =>{
    const userId = req.params.id
    const q = "DELETE FROM users WHERE id = ?"
    db.query(q,userId,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}


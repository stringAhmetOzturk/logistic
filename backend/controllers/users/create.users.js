import {db} from "../../config/connect.js"
// create a user
export const createUser = (req,res) =>{
    const name = req.body.name
    const q = "INSERT INTO users (`name`) VALUES (?)"
    db.query(q,name,(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
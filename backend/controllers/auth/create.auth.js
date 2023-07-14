import { db } from "../../config/connect.js";
import bcrypt from "bcrypt"

// register
const saltRounds = 10
export const register = async(req,res) =>{
    const values = [
        req.body.username,
        req.body.branchId
    ]
    const usernameQuery = "SELECT * FROM users WHERE username = ?"
    db.query(usernameQuery,[values[0]],async (error,data)=>{
        if (error) {
            return res.json(error)
        } else {
           if(data.length > 0){
            return res.json("This username exist, choose new one.")
           }else{
               const password = req.body.password 
                if (password) {
                    const hashedPassword = await bcrypt.hash(password,saltRounds)
                    values.push(hashedPassword)
                }
                const q = "INSERT INTO users (username,branchId,password) VALUES (?)"
                db.query(q,[values],(error,data)=>{
                    if (error) {
                        return res.json(error)
                    } else {
                        return res.json(data)            
                    }
                })
           }
        }
    })
 
}
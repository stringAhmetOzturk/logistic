import { db } from "../../config/connect.js";
import bcrypt from "bcrypt"

// register
const saltRounds = 10
export const register = async(req,res) =>{
    const values = [
        req.body.username,
    ]
    const password = req.body.password
    if (password) {
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        values.push(hashedPassword)
    }
    const q = "INSERT INTO users (username,password) VALUES (?)"
    db.query(q,[values],(error,data)=>{
        if (error) {
            return res.json(error)
        } else {
            return res.json(data)            
        }
    })
}
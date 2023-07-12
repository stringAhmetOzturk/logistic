import { db } from "../../config/connect.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// login
export async function login(req,res){
    const username = req.body.username
    const password = req.body.password
  
    if (username && password) {
        const q = "SELECT * FROM users WHERE username = ?";
        db.query(q, username, async (error, data) => {
           
            if (error || data[0] == null) {
                res.status(401).json({ message: "Invalid username or password" });
            }else{
                bcrypt.compare(password, data[0].password, (err, result) => {
                if (err) {
                  res.status(500).json({ message: "An error occurred during login" });
                } else if (result) {
                  const accessToken = jwt.sign({id:data[0].id,username:data[0].username},"mySecretKey",{expiresIn:"10m"})
                  res.status(200).json({ message: "success" , data:{id:data[0].id,username:data[0].username,accessToken}});
                } else {
                  res.status(401).json({ message: "Invalid username or password" });
                }
              });
        }
    })}}

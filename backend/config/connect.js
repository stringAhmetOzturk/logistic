import mysql from "mysql"
import env from "dotenv"
env.config();
//mysql db configs
export const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_USER_PASSWORD,
    database:process.env.DB_NAME,
})
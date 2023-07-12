import { db } from "../../config/connect.js";
import redisClient from "../../config/redis.js";

//get all users
export async function getAllCustomers(req, res) {
  try {
    const q = "SELECT * FROM customers";
    
    const results = await new Promise((resolve, reject) => {
      db.query(q, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });

    console.log("Request sent to the API");
    
    if (results && results.length === 0) {
      throw "API returned an empty array";
    }
    
    await redisClient.set("customers", JSON.stringify(results), {
      EX: 3600,
      NX: true,
    });

    res.send({
      fromCache: false,
      data: results,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}
// get a user
export async function getCustomer(req,res){
try {
  const customerId = req.params.id
  const q = "SELECT * FROM customers WHERE id = ?"
  db.query(q,customerId,(error,data)=>{
    if (error) {
      return res.json(error)
    } else {
      return res.json(data)
    }
  })
} catch (error) {
  console.error(error);
  res.status(404).send("Data unavailable");
}
}
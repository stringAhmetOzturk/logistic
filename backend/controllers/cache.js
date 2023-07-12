import redisClient from "../config/redis.js";

//get cache
export function cacheGet(redisKey){
  return async(req, res, next)=>{
    try {
      const cacheResults = await redisClient.get(redisKey);
      if (cacheResults) {
        console.log("Request sent to the cache");
        const results = JSON.parse(cacheResults);
        res.send({
          fromCache: true,
          data: results,
        });
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.status(404).send("Data unavailable");
    }
  }}

// delete cache
export function cacheDelete(redisKey){
return async(req,res,next) =>{
  try {
      await redisClient.del(redisKey);
      next()
  } catch (error) {
      
  }
}}
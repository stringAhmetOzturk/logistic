import redisClient from "../../config/redis.js";

//get cache
export async function cacheGet(req, res, next) {
    try {
      const cacheResults = await redisClient.get("users");
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
  }

// delete cache
export async function cacheDelete(req,res,next){
    try {
        await redisClient.del("users");
        next()
    } catch (error) {
        
    }
}

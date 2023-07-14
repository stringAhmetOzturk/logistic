import jwt from "jsonwebtoken"
export const verify = (req, res, next) => {
    // const authHeader = req.headers.authorization;
    const token = req.cookies.token
      try {
        jwt.verify(token, "mySecretKey", (err, user) => {
          if (err) {
            return res.status(403).json("Token is not valid!");
          }
    
          req.user = user;
          next();
        });
      } catch (error) {
        res.clearCookie("token")
      }
  }
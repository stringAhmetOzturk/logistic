import express from "express"
const router = express.Router()
import {login} from "../controllers/auth/get.auth.js"
import {register} from "../controllers/auth/create.auth.js"
import {cacheDelete} from "../controllers/cache.js"
router.post("/login", login);
router.post("/register",cacheDelete("users"),register);
export default router
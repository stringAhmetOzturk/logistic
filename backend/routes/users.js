import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/cache.js"
import {getAllUsers,getUser} from "../controllers/users/get.users.js"
import {createUser} from "../controllers/users/create.users.js"
import {updateUser} from "../controllers/users/update.users.js"
import {deleteUser} from "../controllers/users/delete.users.js"
router.post("/",cacheDelete("users"),createUser)
router.get("/", cacheGet("users"),getAllUsers);
router.get("/:id",getUser)
router.put("/:id",cacheDelete("users"),updateUser)
router.delete("/:id",cacheDelete("users"),deleteUser)

export default router


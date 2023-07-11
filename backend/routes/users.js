import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/users/cache.js"
import {getAllUsers,getUser} from "../controllers/users/get.users.js"
import {createUser} from "../controllers/users/create.users.js"
import {updateUser} from "../controllers/users/update.users.js"
import {deleteUser} from "../controllers/users/delete.users.js"
router.post("/",cacheDelete,createUser)
router.get("/", cacheGet,getAllUsers);
router.get("/:id",getUser)
router.put("/:id",cacheDelete,updateUser)
router.delete("/:id",cacheDelete,deleteUser)

export default router


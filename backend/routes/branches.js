import express from "express"
const router = express.Router()
import { cacheGet,cacheDelete } from "../controllers/cache.js"
import {getAllBranches,getBranch} from "../controllers/branches/get.branches.js"
import {createBranch} from "../controllers/branches/create.branches.js"
import {updateBranch} from "../controllers/branches/update.branches.js"
import {deleteBranch} from "../controllers/branches/delete.branches.js"
import { verify } from "../config/jwt.js"

router.post("/",cacheDelete("branches"),createBranch)
router.get("/", cacheGet("branches"),getAllBranches);
router.get("/:id",getBranch)
router.put("/:id",verify,cacheDelete("branches"),updateBranch)
router.delete("/:id",verify,cacheDelete("branches"),deleteBranch)

export default router

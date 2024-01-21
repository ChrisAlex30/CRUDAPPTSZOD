import express from "express"
import Controller from "../controller/user"


const router=express.Router()

router.get("/api/readUsers",Controller.readUsers)
router.get("/api/readUserbyId/:id",Controller.readUserbyId)
router.post("/api/createUser",Controller.createUser)
router.put("/api/updateUser/:id",Controller.updateUser)
router.delete("/api/deleteUser/:id",Controller.deleteUser)

export default router
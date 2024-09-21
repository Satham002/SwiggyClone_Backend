import express from "express"
import { login_user, registeruser } from "../controllers/userController.js"

const UserRouter = express.Router()


UserRouter.post("/register", registeruser)
UserRouter.post("/login", login_user)

export default UserRouter;
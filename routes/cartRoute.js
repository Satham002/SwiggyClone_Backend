import express from 'express'
import { removeCart, addToCart, getCart } from "../controllers/cartController.js"
import authMiddleware from '../middleware/auth.js'
const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart)

cartRouter.post("/get", authMiddleware, getCart)

cartRouter.post("/remove", authMiddleware, removeCart)

export default cartRouter;
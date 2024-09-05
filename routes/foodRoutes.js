import express, { Router } from 'express';
import { addFood, listFood, RemoveFood } from '../controllers/foodContoller.js';
import multer, { diskStorage } from 'multer';

const foodRouter = express.Router();

//image Storage engine

const Storage = diskStorage({
    destination: "uplodes",
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
})
const uplode = multer({ storage: Storage })

foodRouter.post("/add", uplode.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", RemoveFood)

export default foodRouter
// 66d57d5a8e48b8e215d078e0
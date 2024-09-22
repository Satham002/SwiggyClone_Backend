import foodmodel from "../models/food_models.js";
import fs from 'fs';

//add food item
const addFood = async (req, res) => {
    try {
        let image_filename = `${req.file.filename}`;
        const food = new foodmodel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: image_filename,
            category: req.body.category
        })
        await food.save()
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log("error")
        res.json({ success: false, message: "Error", Error: error })
    }
}

//add Food List
const listFood = async (req, res) => {
    try {
        const foods = await foodmodel.find({});
        res.json({ success: true, data: foods })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, data: "Error" })
    }
}

//Remove Food
const RemoveFood = async (req, res) => {
    console.log(res.body)
    try {
        const food = await foodmodel.findById(req.body.id);
        try {
            fs.unlink(`uplodes/${food.image}`, () => { });
        } catch (error) {
            res.json({ succes: false, message: "error in 43th line" })
        }
        await foodmodel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Removed" });
    } catch (error) {
        console.log(error)
        res.json({ sucess: false, message: "Issue on remove session" })
    }
}

export { addFood, listFood, RemoveFood }
import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import UserRouter from './routes/userRoute.js';
import 'dotenv/config'


//app config
const app = express();
//middleware
app.use(express.json())
app.use(cors())
const port = 5000;
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies (for form submissions)


//db Connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uplodes'));
app.use("/api/user", UserRouter)


app.get("/", (req, res) => {
    res.send("hello im woking")
})

app.get("/abc", (req, res) => {
    res.send(`hello im woking abc ${req}`)
})

app.listen(port, () => {
    console.log(`Server started on https://localhost:${port}`)
})


// mongodb+srv://sadhsh12:Sathya_Satham@cluster0.pz1bt.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0

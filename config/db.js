import mongoose from 'mongoose'
ad
export const connectDB = async ()=>{
 
    await mongoose.connect('mongodb+srv://sadhsh12:Sathya_Satham@cluster0.pz1bt.mongodb.net/Food-delivery').then(()=>(console.log("database Connect")))
}
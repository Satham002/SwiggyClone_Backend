import mongoose from 'mongoose'

export const connectDB = async ()=>{
 
    await mongoose.connect(`${process.env.REACT_APP_API_URL}`).then(()=>(console.log("database Connect")))
}
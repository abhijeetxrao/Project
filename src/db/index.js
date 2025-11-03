import mongoose from 'mongoose'

const connection = async()=>{
  try {
   await mongoose.connect(process.env.DATABASE_URL)
   console.log("MongoDB connected!")
  } catch (error) {
    console.log("Error in connecting Database",error);
  }
}

export {connection}
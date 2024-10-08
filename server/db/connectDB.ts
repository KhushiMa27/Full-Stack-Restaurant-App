// password=xIEVCWghtagyD1vY

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// username = khushimakhija27
const connectDB  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('MongoDB Connected');
    }
    catch(error){
        console.log(error);
    }

}

export  default connectDB;


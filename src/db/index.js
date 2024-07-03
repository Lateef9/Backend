import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () =>{
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('\n mongoDB connected !! DB host : ${connectionInstance.connection.host}');



    } catch (error) {
        console.log("MongoDB connection Failed :  " + error)
    }
}

export default connectDB
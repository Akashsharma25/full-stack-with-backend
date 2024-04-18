import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try{
        const connectionInstence =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`/n MongoDB is Connected!! DB Host${connectionInstence.connection.host}`)
    }catch(error){
        console.log("MongoDb is not connected, Connection Failed Check DB credentials", error);
        process.exit(1);
    }
}

export default connectDB
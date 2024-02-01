import mongoose from "mongoose";
import config from "../../config/default"

export async function connectToMongo(){
    try{
        await mongoose.connect(config.dbUrl)
        console.log("connected to database")
    }catch(error){
console.error(error)
process.exit(1)
    }

}
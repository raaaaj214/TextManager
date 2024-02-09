import mongoose from "mongoose";

export async function connectDB(){
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI , {
            dbName : "ManageTasks"
        })
        if(connection.host) 
        {
            //do nothing
        }
        else
        {
            throw new Error("Database was not connected")    
        }
    } catch (error) {
        console.log(error)
    }
}
import { Task } from "@/models/task"
import { isAuthenticated } from "@/utils/authentication"
import { connectDB } from "@/utils/database"

export const getTasks = async () => {
    try {
        await connectDB()
        const res = await isAuthenticated()
        if(res.success === false)
        {
            return {
                success : false,
                message : res.message
            }
        }
        else{
            const tasks = await Task.find({
                user : res.user._id
            })
            return {
                success : true,
                message : "Tasks fetched",
                count : tasks.length,
                tasks
            }
        }
    } catch (error) {
        console.log("error",error)
        return {
            success : false,
            message : "Something went wrong"
        }
    }
   
}
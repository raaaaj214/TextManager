import User from "@/models/user";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { connectDB } from "./database";
import { redirect } from "next/navigation";

export async function isAuthenticated(){

    try {
        await connectDB()
        const cookeiStore = cookies()
        const token = cookeiStore.get('token')?.value   
        if(!token)
            return { success : false , message : 'Not authorized'}
        else{
            const id =  jwt.verify(token , process.env.SECRET_KEY)
            const user = await User.findById(id.toString()).select('-password')
            if(!user)
            {
                return {success : false , message : "Not authorized"}
            }
            else{
                return {success : true , message : "User found" , user}
            }
        } 
    } catch (error) {
        console.log("error",error)
        return {success : false , message : 'Something went wrong'}
    }
    
}

export async function isLoggedIn(){

        await connectDB()
        const cookeiStore = cookies()
        const token = cookeiStore.get('token')?.value   
        if(!token)
            return redirect("/auth/login")
        else{
            const id =  jwt.verify(token , process.env.SECRET_KEY)
            const user = await User.findById(id.toString()).select('-password')
            if(!user)
            {
                return redirect("/auth/login")
            }
        } 
    
}
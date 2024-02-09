"use server";
import mongoose, { mongo } from "mongoose";
import { connectDB } from "./database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/user";
import { Task } from "@/models/task";
import { revalidatePath } from "next/cache";


export const deleteTask = async (id) => {
  try {
   
      console.log(id)
      await Task.findByIdAndDelete(id)
      return{
        success : true,
        message : "Task deleted"
      }
    
  } catch (error) {
    console.log(error)
    return {
      success : false,
      message : "Something went wrong"
      }
  }
}



export const editTask = async (formData , id) => {
  try {
    await connectDB()

    const task = await Task.findById(id)
    if(!task)
    {
      return {
        success : false,
        message : "Task doesn't exist"
      }
    }
    else{
      const title = formData.get('title')
      const description = formData.get('description')
      const date = formData.get('date')
      const type = formData.get('type')

      const updatedTask = await Task.findByIdAndUpdate(id , {title, description, deadline : date, type})
      await updatedTask.save()

      return {
        success : true,
        message : "Task updated"
      }
    }
  } catch (error) {
    console.log(error)
    return {
      success : false,
      message : "Something went wrong"
    }
  }
}
export const postTask = async (formData) => {
  "use server";
  try {
        const title = formData.get("title");
        const description = formData.get("description");
        const date = formData.get("date");
        const type = formData.get("type");
        
         const user =  jwt.verify(cookies().get('token').value , process.env.SECRET_KEY)
        const task = await Task.create({title, description, deadline : date, type , user : user})
        await task.save()
        return {
                success : true,
                message : "Task Added"
        }   
  } catch (error) {
        console.log(error)
        return {
                success : false,
                message : "Soemthing went wrong "
        } 
  }
 
  
};


export async function LogoutUser() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    if (token) {
      cookies().delete("token");
      return {
        success: true,
        message: "Logged out",
      };
    } else {
      return {
        success: true,
        message: "Already logged out",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
export async function Login(formData) {
  try {
    await connectDB();
    const username = formData.get("username");
    const password = formData.get("password");

    const user = await User.findOne({
      username: username,
    });
    if (!user) return { success: false, message: "username doesn't exist" };

    const check = await bcrypt.compare(password, user.password);
    if (check === false)
      return { success: false, message: "Incorrect Password" };
    else {
      const token = jwt.sign(user._id.toString(), process.env.SECRET_KEY);
      cookies().set("token", token);
      return { success: true, message: "Welcome back" };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
}
export async function newUser(formData) {
  try {
    await connectDB();
    const username = formData.get("username");
    const password = formData.get("password");
    const conf_password = formData.get("conf_password");
    const user = await User.findOne({
      username: username,
    });
    if (user) return { success: false, message: "Username already taken" };

    const hashPassword = await bcrypt.hash(password, 10);

    const newAccount = await User.create({
      username: username,
      password: hashPassword,
    });
    await newAccount.save();
    if (newAccount)
      return { success: true, message: "Account has been created" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error" };
  }
}

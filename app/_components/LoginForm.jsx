'use client'
import { Login } from "@/utils/actions";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [disabled , setDisabled] = useState(false)


  const formAction = async (formData) => {
    setDisabled(true)
    const username = formData.get("username");
    const password = formData.get("password");
    if(/^\s+$/.test(username) == true)
    {
      toast.error("Username cannot be empty")
      return ;
    }
    else if (/^\s+$/.test(password) == true)
    {
      toast.error("Password cannot be empty")
      return;
    }

    const res = await Login(formData)
    if(res.success == false)
      toast.error(res.message)
    else
    {
      toast.success(res.message)
      setDisabled(false)
      redirect("/")
    }
    setDisabled(false)
  }


  return (
    <form action={formAction} className=" flex flex-col justify-center items-center gap-6 text-black">
      <input type="text" name="username" placeholder="Username" className="pl-2 py-1 pr-8 rounded-md focus:border-none focus:outline-none"/>
      <input type="password" name="password" placeholder="Password" className="pl-2 py-1 pr-8 rounded-md focus:border-none focus:outline-none"/>
      <button type="submit" className=" disabled:cursor-not-allowed bg-white text-black font-medium px-4 py-1 rounded-md hover:bg-white/80" disabled={disabled}>Login</button>
    </form>
  );
};

export default LoginForm;

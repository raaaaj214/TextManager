"use client";
import { newUser } from "@/utils/actions";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [disabled , setDisabled] = useState(false)

  const formAction = async (formData) => {
    setDisabled(true)
    console.log("started")
    const name = formData.get("username");
    const password = formData.get("password");
    const conf_password = formData.get("conf_password");
    if(/^\s+$/.test(name) == true)
    {
      toast.error("Username cannot be empty")
    }
    if (conf_password != password)
      {
        toast.error("Passwords do not match")
        return;
      }

    const res = await newUser(formData);
      if(res.success == true)
      {
        toast.success(res.message)
        setDisabled(false)
        redirect("/auth/login")
      }
      else
      {
        toast.error(res.message)
      }

    setDisabled(false)
  };
  return (
    <form
      action={formAction}
      className=" flex flex-col justify-center items-center gap-6 text-black"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="pl-2 py-1 pr-8 rounded-md focus:border-none focus:outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="pl-2 py-1 pr-8 rounded-md focus:border-none focus:outline-none"
      />
      <input
        type="password"
        name="conf_password"
        placeholder="Confirm password"
        className="pl-2 py-1 pr-8 rounded-md focus:border-none focus:outline-none"
      />
      <button
      disabled={disabled}
        type="submit"
        className="bg-white text-black font-medium px-4 py-1 rounded-md hover:bg-white/80  "
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

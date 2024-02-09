'use client'
import Image from 'next/image'
import React from 'react'
import logOut from "../_assets/icons8-logout-50.png"
import { LogoutUser } from '@/utils/actions'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'

const Logout = () => {
  const formAction = async () => {
      const res = await LogoutUser();
      console.log(res)
      if(res.success === true)
      {
        toast.success(res.message)
        redirect("/auth/login")
      }
      else{
        toast.error(res.message)
      }
    
   
  }
  return (
    <form action={formAction}>
        <button  className='flex gap-2 justify-center items-start font-medium'><Image src={logOut} width={20}/>Logout</button>
    </form>
  )
}

export default Logout

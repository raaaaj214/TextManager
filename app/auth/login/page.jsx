import LoginForm from '@/app/_components/LoginForm'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const page =  () => {
  const cookieStore =   cookies()
  const token = cookieStore.get('token')
  if(token){
    redirect("/")
  }

  return (
    <main className='w-full flex justify-center items-center h-[97vh] px-1 sm:px-0'>
        <div className='w-80  p-4 border border-white/30 flex flex-col justify-center items-center gap-20 shadow-lg sm:shadow-gray-500'>
              <h1 className='font-bold text-2xl'>TaskManager</h1>
            <LoginForm/>
            <p>Dont have an account ? <Link href={"/auth/register"} className='text-blue-500 hover:text-blue-400 cursor-pointer'>Register</Link></p>
        </div>
    </main>
  )
}

export default page

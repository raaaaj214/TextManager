'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import home from "../_assets/icons8-home-50 (1).png"
import tick from "../_assets/icons8-tick-50.png"
import bell from "../_assets/icons8-bell-24.png"
import excalamation from "../_assets/icons8-important-30 (1).png"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Popup from './Popup'
  import addIcon from "../_assets/icons8-plus-50 (1).png"
import Logout from './Logout'


const NavSmall = ({Navopen , setNavOpen}) => {
    const [open , setOpen] = useState(false)
  return (
    <>
    <nav className={`${Navopen ? 'flex' : 'hidden'} w-[100vw] bg-primary flex-col justify-start items-start sm:items-center px-8 py-4 gap-28 text-lg h-[100vh] fixed top-0 bottom-0 lg:hidden`}>
    <span className='text-white self-end text-2xl cursor-pointer' onClick={() => setNavOpen(false)}>x</span>
    <span className=' flex flex-col justify-start items-start sm:items-center pl-8 gap-8 w-full'>
    <Link href="/" className='flex flex-row justify-center items-center gap-4'><Image src={home} className='z-10' width={24}/>
    <span className='z-10' onClick={() => setNavOpen(false)}>All Tasks
    </span></Link>
    <Link href="/important" className='flex flex-row justify-center items-center gap-4' onClick={() => setNavOpen(false)}><Image src={excalamation}  className='z-10' width={24}/>
    <span className='z-10'>Important
    </span></Link>
    <Link href="/completed" className='flex flex-row justify-center items-center gap-3' onClick={() => setNavOpen(false)}><Image src={tick} className='z-10' width={24}/>
    <span className='z-10'>
      Completed
      </span>
      </Link>
    <Link href="/urgent" className='flex flex-row justify-center items-center gap-4' onClick={() => setNavOpen(false)}>
        <Image className="z-10" src={bell} width={24}/>
        <span className='z-10'>Do it now
        </span>
        </Link>
        <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
      <span className='flex flex-row justify-center items-center gap-4 cursor-pointer'>
      <Image src={addIcon} width={24} />Add
      </span>
      </DialogTrigger>
      <DialogContent  className="bg-primary text-white">
    <DialogHeader>
      <DialogTitle>Create a Task</DialogTitle>
      <DialogDescription>
      <Popup setOpen={setOpen} open={open} setNavOpen={setNavOpen}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
      {/* onClick={() => setOpen(true)} */}
    </Dialog>
    <span className='ml-1'>
    <Logout/>
    </span>
        </span>
    </nav>
    </>
  )
}

export default NavSmall

'use client'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from 'next/image'
import uploadIcon from "../_assets/icons8-plus-50.png"
import Popup from './Popup'

const UploadTile = () => {
  const [open , setOpen] = useState(false)
  const tileRef = React.useRef()
  const modalWrapperRef = React.useRef()

  // const backDropHandler = e => {
  //   if (!modalWrapperRef?.current?.contains(e.target)) {
  //     console.log(!modalWrapperRef?.current?.contains(e.target))
  //       setOpen(false)
  //   }
  // }
  // const scrollHault = () => {
    
  // }
  // const closePopupHandler  = e =>{
  //   if(!modalWrapperRef?.current?.contains(e.target))
  //   {
  //     setOpen(false)
  //   }
  // }
  // useEffect(() => {

  //   if(open === true)
  //   {
  //     document.querySelector('body').style.overflowY = 'hidden'
  //     document.querySelector('html').style.overflowY = 'hidden'
  //     setTimeout(() => {
  //       window.addEventListener('click' , closePopupHandler)
  //     });
  //   }
    
  //   return () => { document.querySelector('body').style.overflowY = 'auto'
  //   document.querySelector('html').style.overflowY = 'auto'
  //     window.removeEventListener('click' , closePopupHandler)
  //   }
  // } , [open])


  return (
    <>
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild  >
        <div className='max-w-full h-80 flex justify-center items-center outline-dashed outline-3 p-4 rounded-lg outline-neutral-600 cursor-pointer hover:outline-neutral-500' onClick={() => {setOpen(!open)}}>
      <Image src={uploadIcon} />
    </div>
      </DialogTrigger>
      <DialogContent  className="bg-primary text-white">
    <DialogHeader>
      <DialogTitle>Create a Task</DialogTitle>
      <DialogDescription>
      <Popup open={open} setOpen={setOpen} />
      </DialogDescription>
    </DialogHeader>
    
  </DialogContent>
      {/* onClick={() => setOpen(true)} */}
    </Dialog>
    </>
  )
}

export default UploadTile

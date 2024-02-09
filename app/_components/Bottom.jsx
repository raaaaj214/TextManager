'use client'
import React, {useState , useEffect} from 'react'
import addIcon from "../_assets/icons8-plus-50 (1).png"
import Image from 'next/image'
import Popup from './Popup'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Bottom = () => {
    const [open , setOpen] = useState(false)
  // const tileRef = React.useRef()
  // const modalWrapperRef = React.useRef()

    // const closePopupHandler  = e =>{
    //     if(!modalWrapperRef?.current?.contains(e.target))
    //     {
    //       setOpen(false)
    //     }
    //   }
    //   useEffect(() => {
    
    //     if(open === true)
    //     {
    //       document.querySelector('body').style.overflowY = 'hidden'
    //       document.querySelector('html').style.overflowY = 'hidden'
    //       setTimeout(() => {
    //         window.addEventListener('click' , closePopupHandler)
    //       });
    //     }
        
    //     return () => { document.querySelector('body').style.overflowY = 'auto'
    //     document.querySelector('html').style.overflowY = 'auto'
    //       window.removeEventListener('click' , closePopupHandler)
    //     }
    //   } , [open])
    
  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
      <span className='flex flex-row justify-center items-center gap-2 cursor-pointer'>
      <Image src={addIcon} width={30} />Add
      </span>
      </DialogTrigger>
      <DialogContent  className="bg-primary text-white">
    <DialogHeader>
      <DialogTitle>Create a Task</DialogTitle>
      <DialogDescription>
      <Popup open={open} setOpen={setOpen}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
      {/* onClick={() => setOpen(true)} */}
    </Dialog>
      </>
  )
}

export default Bottom

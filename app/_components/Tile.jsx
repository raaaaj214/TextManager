'use client'
import React, { useEffect, useState } from 'react'
import editLogo from "../_assets/icons8-edit-50.png"
import deleteLogo from "../_assets/icons8-delete-30.png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { deleteTask } from '@/utils/actions'
import toast from 'react-hot-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Tile = ({task}) => {

  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
    const date = new Date(task.deadline).toDateString()

    const deleteAction = async () => { 
      if(task.type == 'completed')
      {
        confirmAction()
        return;
      }
      else if(task.type != 'completed')
      {
        setOpen(true)
      }
  }
  
  const confirmAction = async () => { 
    const res = await deleteTask(task._id)
    if(res == false)
    {
      toast.error(res.message)
    }
    else{
      toast.success(res.message)
      router.refresh()
  }
  if(open === true)
      setOpen(false)
}

  return (
    <div className="max-w-full h-80 bg-primary rounded-lg p-6 flex flex-col justify-between  items-start">
        <p className='self-end'>{date}</p>
        <span className=''>
        <h1 className='text-2xl font-bold'>{task.title}</h1>
        <p>{task.description}</p>
        </span>
        <div className='flex w-full justify-between items-center  self-end  '>
            <div className={`${task.type === 'urgent' ? "bg-red-700" : (task.type === 'important' ? "bg-yellow-500" : "bg-green-500") } py-1 px-2 font-semibold rounded-lg`}>{task.type.toUpperCase()}</div>
            <span className='flex flex-row justify-center items-center gap-2'>
            <Image src={editLogo} width={25} className='cursor-pointer' alt='Edit' onClick={() => {
              const dateString = new Date(date)
                  let dd = dateString.getDate();
                  let mm = dateString.getMonth()+1; //January is 0!
                  let yyyy = dateString.getFullYear();
              
                  if(dd<10){
                      dd='0'+dd;
                  } 
                  if(mm<10){
                      mm='0'+mm;
                  } 
                  const finalDate = yyyy+'-'+mm+'-'+dd;
              router.push(`/task/edit/${task._id}?t=${task.title}&d=${task.description}&da=${finalDate}&ty=${task.type}`)
            }}/>
            <Image src={deleteLogo} className='cursor-pointer' width={30} alt='Delete' onClick={deleteAction}/>
            <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
      </DialogTrigger>
      <DialogContent  className="bg-primary text-white">
    <DialogHeader>
      <DialogTitle>Are you sure? You have not completed the task yet</DialogTitle>
      <DialogDescription>
        
        <div className='mt-6 w-full  flex gap-6 justify-center items-center text-white'>
          <button type='submit' onClick={() => confirmAction()}  className='focus:bg-blue-600 px-4 py-1 bg-tertiary rounded-md'>Confirm</button>
          <button onClick={() => setOpen(false)} className='focus:bg-red-600 px-4 py-1 bg-tertiary rounded-md'>Cancel</button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
      {/* onClick={() => setOpen(true)} */}
    </Dialog>
            </span>
        </div>
    </div>
  )
}

export default Tile

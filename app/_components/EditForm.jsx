'use client'
import { editTask } from '@/utils/actions'
import { redirect, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const EditForm = ({params}) => {
    // const [date , setDate] = useState(" ")
    const searchParams = useSearchParams()
    const title = searchParams.get('t')
    const description = searchParams.get('d')
    const date = searchParams.get('da')
    const type = searchParams.get('ty')

    const formAction = async (FormData) => {
        const res = await editTask(FormData , params.id)
        if(res.success === false)
        {
            toast.error(res.message)
        }
        else{
            toast.success(res.message)
            redirect("/")
        }
    }


  return (
   
      <form action={formAction}   className='w-80 z-10 flex flex-col justify-center items-start gap-4 bg-fourth p-4 rounded-lg bg-primary'>
        <label htmlFor="title" className='w-full '>Title<br/>
          <input type="text" name='title' id="title" defaultValue={title} className='mt-1 w-full bg-secondary py-2 px-2 focus:outline-none rounded-lg' required={true}/>
        </label>
        <label htmlFor="description" className='w-full'>Description<br/>
          <textarea name="description" id='description' defaultValue={description} cols="30" rows="5" className='mt-1 w-full bg-secondary py-1 px-2 focus:outline-none rounded-lg' required={true}></textarea>
        </label>
        <label htmlFor="date" className='w-full' >Date<br/>
        <input type="date" name='date' id='date' defaultValue={date} className='mt-1 w-full bg-secondary py-2 px-2 focus:outline-none rounded-lg' required={true}/>
        </label>
        <span className='flex flex-row justify-center items-center w-full gap-6 pt-4'>
          <label htmlFor="important"> 
          <input type="radio" id="important" name="type" defaultChecked={type === 'important' && true} value="important" required={true}/>&nbsp;Important
          </label>
          <label htmlFor="urgent"> 
          <input type="radio" id="urgent" name="type" value="urgent" defaultChecked={type === 'urgent' && true} required={true}/>&nbsp;Urgent
          </label>
          <label htmlFor="completed"> 
          <input type="radio" id="completed" name="type" value="completed" defaultChecked={type === 'completed' && true} required={true} />&nbsp;Completed
          </label>
        </span>
        <button type='submit' className='bg-blue-700 py-1 px-4 rounded-lg self-center mt-4'>Edit Task</button>
      </form>
  )
}

export default EditForm

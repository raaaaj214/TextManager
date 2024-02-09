'use client'
import { postTask } from '@/utils/actions'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
const Popup = ({open , setOpen, setNavOpen}) => {
  const formRef = React.useRef()
  const [loading , setLoading] = useState(false)
  const router = useRouter()
 
  const formAction = async (FormData) => {
    setLoading(true)
    const date = FormData.get('date')

    if(new Date().getTime() > new Date(date).getTime() || new Date(date).getTime() > new Date('2030-12-31').getTime())
    { 
      if(new Date().toDateString() === new Date(date).toDateString())
      {
        const res = await postTask(FormData)
        if(res.success === true)
        {
          
          toast.success(res.message)
          formRef?.current?.reset()
          router.refresh()
        }
        else
        {
          toast.error(res.message)
        }
        // setDialogOpen(!dialogOpen)
        setOpen(!open)
        setLoading(false)
      }else{
        toast.error("Not a valid date")
        setLoading(false)
      }
    }
    else{
      const res = await postTask(FormData)
    if(res.success === true)
    {
      
      toast.success(res.message)
      formRef?.current?.reset()
      router.refresh()
    }
    else
    {
      toast.error(res.message)
    }
    // setDialogOpen(!dialogOpen)
    setOpen(!open)
    setLoading(false)
    
    
    }
    
  }
  return (
    <>
       {/* <div ref={modalWrapperRef} className={`${open == false ? 'hidden' : 'flex'} flex-col justify-start gap-8 items-center bg-fourth p-4 outline outline-1 outline-neutral-500  w-full fixed m-auto left-0 right-0 top-0 sm:top-4 md:w-[25rem] md:h-[95vh] md:rounded-lg h-[100vh] `}> */}
      <span className='w-full self-end  flex flex-row justify-between items-center  pr-4'>
        {/* <h1 className='text-2xl'>Create a Task</h1> */}
        {/* <form action={() => {
          setOpen(false)
        }}>
        <button className='text-white text-2xl' >X</button>
        </form> */}
      </span>
      <form  ref={formRef} action={formAction} className='z-10 w-full flex flex-col justify-center items-start gap-4 text-white'>
        <label htmlFor="title" className='w-full '>Title<br/>
          <input type="text" name='title' id="title" className='mt-1 w-full bg-secondary py-2 px-2 focus:outline-none rounded-lg' required={true}/>
        </label>
        <label htmlFor="description" className='w-full'>Description<br/>
          <textarea name="description" id='description' cols="30" rows="5" className='mt-1 w-full bg-secondary py-1 px-2 focus:outline-none rounded-lg' required={true}></textarea>
        </label>
        <label htmlFor="date" className='w-full' >Date<br/>
          <input type="date" name='date' id='date' className='mt-1 w-full bg-secondary py-2 px-2 focus:outline-none rounded-lg' required={true}/>
        </label>
        <span className='flex flex-row justify-center items-center w-full gap-6 pt-4'>
          <label htmlFor="important"> 
          <input type="radio" id="important" name="type" value="important" required={true}/>&nbsp;Important
          </label>
          <label htmlFor="urgent"> 
          <input type="radio" id="urgent" name="type" value="urgent" required={true}/>&nbsp;Urgent
          </label>
          <label htmlFor="completed"> 
          <input type="radio" id="completed" name="type" value="completed" required={true}  />&nbsp;Completed
          </label>
        </span>
        <button type='submit' className='bg-blue-700 py-1 px-4 rounded-lg self-center mt-4'>{loading === true ? 'Creating' : 'Create Task'}</button>
      </form>
       {/* </div> */}
      </>
  )
}

export default Popup

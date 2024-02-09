'use client'
import EditForm from "../../../../_components/EditForm"
import React from 'react'

const page = ({params}) => {
    
  return (
    <div className="bg-secondary overflow-hidden w-full rounded-lg outline outline-1 outline-neutral-600 p-3 md:p-6 min-h-[84vh] lg:min-h-[95vh]  lg:w-[75%] xl:w-[80%] flex justify-center items-center">
     <EditForm params={params}/>
    </div>
  )
}

export default page

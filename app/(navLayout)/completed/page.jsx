import React, { Suspense } from 'react'
import CompletedPostWrapper from '../../_components/CompletedPostWrapper'
import { isLoggedIn } from '@/utils/authentication'

const page = async() => {
  await isLoggedIn()
  return (
    <main className="bg-secondary overflow-scroll overflow-x-hidden w-full rounded-lg outline outline-1 outline-neutral-600 p-3 md:p-6 min-h-[84vh] lg:min-h-[95vh] grid gap-6 lg:w-[75%] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 md:gap-6 xl:w-[80%]">
      <Suspense fallback={<h1>Loading</h1>}>
      <CompletedPostWrapper/>
      </Suspense>
      
     
    </main>
  )
}

export default page

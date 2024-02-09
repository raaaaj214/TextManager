
import React, { Suspense } from "react";
import PostWrapper from "../_components/PostWrapper";
import { isLoggedIn } from "@/utils/authentication";
import Loading from "../loader";

export  default async  function Home() {
 
  await isLoggedIn()
  
  return (
    <main className="bg-secondary overflow-x-hidden  w-full rounded-lg outline outline-1 outline-neutral-600 p-3 md:p-6 overflow-scroll  h-[84vh] lg:min-h-[95vh] grid gap-6 lg:w-[75%] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 md:gap-6 xl:w-[80%]">
      <Suspense fallback={<Loading/>} >
      <PostWrapper/>
      </Suspense>
      
     
    </main>
  );
}

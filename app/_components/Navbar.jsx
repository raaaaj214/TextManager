'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import home from "../_assets/icons8-home-50 (1).png"
import tick from "../_assets/icons8-tick-50.png"
import bell from "../_assets/icons8-bell-24.png"
import excalamation from "../_assets/icons8-important-30 (1).png"
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const path = usePathname()

    
  return (
    <nav className='w-full flex flex-col justify-center items-start text-sm '>
        <Link href="/" className={` hover:before:w-full hover:before:transition-width hover:before:ease-in before:z-0  before:transition-width before:ease-out before:duration-500 hover:before:duration-500 before:content-[''] before:bg-tertiary/10 before:w-0 before:left-0 before:top-0 before:h-14 before:absolute relative  w-full p-4  ${path === "/" ? 'bg-tertiary border-r-4 border-green-500' : ''} z-10 flex gap-3 justify-center items-center`}><Image src={home} className='z-10' width={18}/>
        <span className='z-10'>All Tasks
        </span></Link>
        <Link href="/important" className={` hover:before:w-full hover:before:transition-width hover:before:ease-in before:z-0  before:transition-width before:ease-out before:duration-500 hover:before:duration-500 before:content-[''] before:bg-tertiary/10 before:w-0 before:left-0 before:top-0 before:h-14 before:absolute relative  w-full p-4  ${path === "/important" ? 'bg-tertiary border-r-4 border-green-500' : ''} z-10 flex gap-3 justify-center items-center`}><Image src={excalamation}  className='z-10' width={18}/>
        <span className='z-10'>Important
        </span></Link>
        <Link href="/completed"className={` hover:before:w-full hover:before:transition-width hover:before:ease-in before:z-0  before:transition-width before:ease-out before:duration-500 hover:before:duration-500 before:content-[''] before:bg-tertiary/10 before:w-0 before:left-0 before:top-0 before:h-14 before:absolute relative  w-full p-4  ${path === "/completed" ? 'bg-tertiary border-r-4 border-green-500' : ''} z-10 flex gap-3 justify-center items-center`}><Image src={tick} className='z-10' width={18}/>
        <span className='z-10'>
          Completed
          </span>
          </Link>
        <Link href="/urgent" className={` hover:before:w-full hover:before:transition-width hover:before:ease-in before:z-0  before:transition-width before:ease-out before:duration-500 hover:before:duration-500 before:content-[''] before:bg-tertiary/10 before:w-0 before:left-0 before:top-0 before:h-14 before:absolute relative  w-full p-4  ${path === "/urgent" ? 'bg-tertiary border-r-4 border-green-500' : ''} z-10 flex gap-3 justify-center items-center`}>
            <Image className="z-10" src={bell} width={18}/>
            <span className='z-10'>Do it now
            </span>
            </Link>

    </nav>
  )
}

export default Navbar

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import menu from "../_assets/icons8-menu-50.png"
import NavSmall from './NavSmall'

const HeaderSmall = () => {
    const [Navopen , setNavOpen] = useState(false)
  return (
    <>
    <header className='flex flex-row justify-between items-end w-full lg:hidden '>
    <h1 className='font-semibold text-lg '>TaskManager</h1>
    <Image src={menu} className=' self-end mt-3 mr-3' width={30} onClick={() => setNavOpen(!Navopen)}/>
    </header>
    <NavSmall Navopen={Navopen} setNavOpen={setNavOpen}/>
    </>
  )
}

export default HeaderSmall


import React from 'react'
import Navbar from './Navbar'
import Logout from './Logout'
import Bottom from './Bottom'
import HeaderSmall from './HeaderSmall'


const Header = () => {
  return (
    <>
    <HeaderSmall/>
    <header className='py-4 hidden lg:flex flex-col w-[23%] h-[95vh] rounded-lg outline outline-1 outline-neutral-600 justify-between items-center bg-secondary fixed left-3 xl:w-[18%]'>
      <div>
        NAME
      </div>
      <Navbar/>
      <div className='flex flex-row justify-evenly items-center w-full'>
      <Logout/>
      <Bottom/>
      </div>
    </header>
    </>
  )
}

export default Header

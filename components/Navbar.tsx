'use client'
import { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu
} from 'react-icons/ai';
import {
  FaDiscord,
  FaTwitter
} from 'react-icons/fa'

import logo from '../assets/chadslogo.png'
import Image from 'next/image';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log('i was clicked');
  };

  const another_one = () => {
    console.log('what is happening with next JS')
  }

  //  menu items
  const navItems = ['Home', 'Company', 'About us']

  return (
    <div className='bg-purple-600'>
      <nav className="flex justify-between md:max-w-[1940px] min-w-[400px] mx-auto text-xl py-6 align-middle px-4">
        <h1 className='text-customPurple font-semibold text-3xl hover:text-white'>Nav brand.</h1>
        <ul className='flex justify-between'>
          {navItems.map((menuItem, index) => (
            <li key={index} className='hover:text-customPurple hover:rounded-sm hover:border hover:border-white py-2 px-6 border border-transparent'>{ menuItem }</li>
          ))}
        </ul>
        <div className='icon-class flex space-x-10 text-customPurple text-2xl py-2'>
          <FaDiscord />
          <FaTwitter />
        </div>

        {/* mobile view */}
        <button onClick={handleNav}>Click me</button>
        <div onClick={another_one} className='border cursor-pointer'>
          { !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>

        <div className='fixed left-0 top-0 w-screen border-r border-r-gray-600 h-screen hidden'>
          <div className="flex">
            <div className="bg-customPurple w-[60vw]">
              {/* NavBrand */}
              <div className="p-4">
                <Image src={logo} alt="footer logo" width={150} height={10}></Image>
              </div>

              <ul className='flex flex-col justify-center items-center h-screen mt-[-100px]'>
                {
                  navItems.map((navItem, index) => (
                    <li key={index} className='m-6 p-2 text-2xl hover:border-b-2 border-purple-700'>{ navItem }</li>
                  ))
                }
              </ul>
            </div>
            <div className='bg-customPurple w-[40vw] bg-opacity-50'></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
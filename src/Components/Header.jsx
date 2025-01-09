import React from 'react'
import Logo from '../assets/logo.png'
const Header = () => {
  return (
    <nav className='bg-[#f5f5e9] p-3 '  >

      <div className='flex gap-10'>
        <img src={Logo} alt='Logo' class='h-12'></img>


        <div className=' justify-center flex items-center ml-80  '>
          <li className=' transition duration-300 ease-in-out list-none hover:animate-pulse space-x-20  text-yellow-700'>
            <a href='#home' className='hover:text-yellow-800 '>Home</a>
            <a href='#about' className='hover:text-yellow-800'>About Me</a>
            <a href='#' className='hover:text-yellow-800'>Projects</a>
            <a href='#skills' className='hover:text-yellow-800'>Skills</a>
            <a href='#contact' className='hover:text-yellow-800'>Contact</a>
          </li>
        </div>

      </div>
    </nav>
  )
}

export default Header

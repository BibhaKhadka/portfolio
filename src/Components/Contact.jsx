import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='bg-[#FAFAF4] h-screen p-44'>
      <div className='flex flex-col md:flex-row items-center justify-center max-w-7xl p-12 md:p-24 bg-white rounded-lg shadow-lg space-y-10 md:space-y-0 md:space-x-20'>
      <h1 className='text-yellow-700 text-2xl font-semibold'>Contact:</h1>
        <div className='flex flex-col space-y-6 w-full md:w-1/2'>
          <div className='flex items-center space-x-4 rounded-lg shadow-md bg-yellow-700 p-4'>
            <a href='https://mail.google.com/mail/u/0/#inbox'>
              <CiMail size={30}  className='animate-pulse'/>
            </a>
            <p className='text-white text-lg'>khadkabibha@gmail.com</p>
          </div>

          <div className='flex items-center space-x-4 rounded-lg shadow-md bg-yellow-700 p-4'>
            <a href='https://www.instagram.com/bibha_khadka?utm_source=qr&igsh=MW0wNWE3bGMxMzF2dw==' >
              <FaInstagram size={30} className='animate-pulse' />
            </a>
            <p className='text-white text-lg'>@bibha_khadka</p>
          </div>
        </div>

       
        <div className='flex flex-col space-y-6 w-full md:w-1/2'>
          <div className='flex items-center space-x-4 rounded-lg shadow-md bg-yellow-700 p-4'>
            <a href='https://www.linkedin.com/in/bibha-khadka-4b4844300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <FaLinkedin size={30} className='animate-pulse' />
            </a>
            <p className='text-white text-lg'>Bibha Khadka</p>
          </div>

          <div className='flex items-center space-x-4 rounded-lg shadow-md bg-yellow-700 p-4'>
            <a href='https://www.facebook.com/bibha.kdk?mibextid=ZbWKwL'>
              <FaFacebook size={30} className='animate-pulse' />
            </a>
            <p className='text-white text-lg'>Bibha Khadka</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

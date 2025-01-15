import React, { useState } from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay: Display only when the sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="bg-[#f5f5e9] p-4 shadow-md lg:flex lg:items-center lg:justify-between relative z-20">
        <div className="flex items-center justify-between lg:justify-start">
          {/* Logo Section */}
          <img src={Logo} alt="Logo" className="h-12" />

          {/* Hamburger Menu (for small and medium screens) */}
          <button
            className="block lg:hidden text-yellow-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar for Small and Medium Devices */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-[#f5f5e9] shadow-md transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-20`}
        >
          <div className="p-4 flex flex-col space-y-4">
            {/* Close Button */}
            <button
              className="self-end text-yellow-700 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <ul className="text-yellow-700 text-lg space-y-4">
              <li className="list-none hover:animate-pulse">
                <a href="#home" className="hover:text-yellow-800">
                  Home
                </a>
              </li>
              <li className="list-none hover:animate-pulse">
                <a href="#about" className="hover:text-yellow-800">
                  About Me
                </a>
              </li>
              <li className="list-none hover:animate-pulse">
                <a href="#projects" className="hover:text-yellow-800">
                  Projects
                </a>
              </li>
              <li className="list-none hover:animate-pulse">
                <a href="#skills" className="hover:text-yellow-800">
                  Skills
                </a>
              </li>
              <li className="list-none hover:animate-pulse">
                <a href="#contact" className="hover:text-yellow-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Links for Large Devices */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-8 text-yellow-700 text-lg">
          <li className="list-none hover:animate-pulse">
            <a href="#home" className="hover:text-yellow-800">
              Home
            </a>
          </li>
          <li className="list-none hover:animate-pulse">
            <a href="#about" className="hover:text-yellow-800">
              About Me
            </a>
          </li>
          <li className="list-none hover:animate-pulse">
            <a href="#projects" className="hover:text-yellow-800">
              Projects
            </a>
          </li>
          <li className="list-none hover:animate-pulse">
            <a href="#skills" className="hover:text-yellow-800">
              Skills
            </a>
          </li>
          <li className="list-none hover:animate-pulse">
            <a href="#contact" className="hover:text-yellow-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

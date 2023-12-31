'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const navBarItems = [
  {
    label: 'Home',
    href:'/'
  },
  {
    label: 'About Me',
    href: "/#about"
  },
  {
    label: "Projects",
    href: "/#projects"
  },
  {
    label: "Contact",
    href: "/contact-me"
  }
];

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center space-x-3">
       
        <div className="w-full md:hidden" id="hambruger buttoon">
          <button className="text-gray-900 dark:text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
  
      

        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alex Ayala</span>
        </a>
    </div>
        <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden md:block'}`} id="navbar-default">

          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navBarItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
             
                    {item.label}
               
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
import React from 'react';
import Link from 'next/link';
import '../app/globals.css'
function Header(){
    return (
        <header className = "h-screen flex items-center justify-center ">
            <div className= 'grid grid-flow-row auto-rows-max'>
                <div>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-600 md:text-5xl lg:text-6xl dark:text-white">Welcome to my <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">portfolio.</span></h1>
                <p className = "mb-4 tracking-tight">Web Developer / CS Graduate</p>
                </div>
                <div>
                <Link href="#about" >
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">About Me</button>
                </Link>
               
                <Link href="#projects">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Projects</button>
                </Link>
                <Link href = "/contact-me">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Contact</button>
                </Link>

                </div>
            </div>
        </header>
    );
}

export default Header;
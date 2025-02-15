import React from "react"
import '../app/globals.css'

function Footer() {
    return (
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Alex Ayala © 2024 . All Rights Reserved.</span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/#about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/contact-me" className="hover:underline me-4 md:me-6">Contact</a>
        </li>
       
        <li>
            <a href="/#projects" className="hover:underline">Projects</a>
        </li>
    </ul>
    </div>
</footer>
   );
}

export default Footer;
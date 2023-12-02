import React from "react";
import '../app/globals.css'
import Image from 'next/image';


function About() {
    return (
      <div id="about" className="grid grid-cols-4 gap-4 scroll-mt-12">
       <div className="container space-y-8">
        <Image
          src="/IMG_6742.jpg"
          alt="Profile"
          width={500}
          height={500}
        />
         </div>

        <div className="flex items-center">
            <div className="grid grid-row-2 gap-4">
                <div>
                <h1 className="text-5xl font-extrabold dark:text-white">Alex Ayala</h1>
                </div>
                <div>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400  mb-8">
                    Hello! I am a senior at Chico State, pursuing a B.A. in Computer Science. 
                    My interest consist of Web Development and UI/UX.
                    I have experience in Web Development with Python/Django & React.
                    </p>
                </div>
                <div className="flex flex-wrap items-center  space-x-4">
                    <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Python
                    </span>
                    <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Django
                    </span>
                    <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        React
                    </span>
                    <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        HTML/CSS
                    </span>
                    <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Git
                    </span>
                    <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                        C++
                    </span>

             </div>
            </div>

        </div>
      <div></div>
       <div className="grid grid-row-2 ">
        <h1 className="flex items-center text-5xl font-extrabold dark:text-white">Education</h1>
        <div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2019 - May 2021</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">California State University, Chico</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Computer Science Undergraduate</p>
                
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2021- May 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Palomar Community College</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Continued Education</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022- May 2024</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">California State University, Chico</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">B.A. Computer Science</p>
            </li>
        </ol>

        </div>
       
       
       
       </div>

        

      </div>
      
    
    );
  }

export default About;
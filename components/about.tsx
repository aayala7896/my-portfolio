import React from "react";
import '../app/globals.css'
import Image from 'next/image';


function About() {
    return (
      <div id="about" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 scroll-mt-12">
       <div className="container flex items-center justify-center space-y-8">
        <Image
          src="/grad_photo.JPG"
          alt="Profile Photo"
          width={300}
          height={300}
          className="max-w-full h-auto mx-auto"
        />
         </div>

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
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">B.S. Computer Science</p>
            </li>
        </ol>

        </div>
       
       
       
       </div>


        <div className="col-span-2 flex flex-col items-center justify-center ">
            
                <div className="mt-2">
                    <Image
                        src="/collage.png"
                        alt="Collage"
                        width={400}
                        height={400}
                        className="max-w-full h-auto mx-auto"
                    />
                </div>
                        <p className="text-lg sm:text-3xl  font-normal text-gray-500 lg:text-xl dark:text-gray-400  mb-8">
                        Chico State Alumni, with a B.S. in Computer Science. My interest consists of Web Development and UI/UX. Other interests of mine include surfing, rock climbing, and camping! Feel free to message me on my contact page.
                        </p>
        </div>
     

      </div>
      
    
    );
  }

export default About;
import React from 'react';
import "../app/globals.css"


function Skills(){

    return (
        <skills>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Skills</span></h1>
            
            <div className="flex justify-between"> 
              
              <ul class="list-disc w-1/2 pl-4 text-xl">
                <li className="mb-2"> 
                    <span className="font-semibold">C++ (4 yrs experience)</span>
                </li>
                <li className="mb-2">
                    <span className="font-semibold">C (2 yrs experience)</span>
                </li>
                <li className="mb-2"> 
                <span className="font-semibold">Python(2 yrs experience)</span>
                </li>
               
              </ul>

              <ul class="list-disc w-1/2 pl-4 text-xl">
                <li className="mb-2"> 
                    <span className="font-semibold">Django Framework (1 yrs experience)</span>
                </li>
                <li className="mb-2">
                    <span className="font-semibold">HTML/CSS (2 yrs experience)</span>
                </li>
                <li className="mb-2"> 
                <span className="font-semibold">Bootstrap (1 yr experience)</span>
                </li>
               
              </ul>
              
            </div>
        </skills>
    );
}

export default Skills;
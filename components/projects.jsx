import React from 'react';



function Projects(){

    return (
        <projects id="projects">
            <h1 class="text-5xl font-extrabold dark:text-white text-center pt-6">Project Showcase</h1>
            <div className="container mx-auto flex flex-col items-center space-y-16 pt-6">
        
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16 pt-6">
         
          <div className="w-full lg:w-1/2">
            <img
              src="/bluesurf.png"
              alt="Project One"
              className="object-cover w-full h-64 rounded-md mb-4 lg:mb-0"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold dark:text-white">Blue Surf.</h2>
            <p className="text-gray-600 dark:text-gray-300">
            Developed an e-commerce website using Python, Django, Google cloud platform, and Django REST API
            </p>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
            Mocked-up surf company selling surfboards, allowing users to browse, add items to their cart, and complete purchases
            </li>
            <li>
            Integrated Stripe API for payment processing
            </li>
           
        </ul>
          </div>
        </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <h2 className="text-4xl font-extrabold dark:text-white">Multi-Thread Analysis.</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                    Designed and implemented a multi-threaded DNS resolver, optimizing domain name resolution
                    </p>
                    
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                    Improve performance resolution of domain names
                    </li>
                   
                
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <img
                    src="/ThreadAnalysis.png"
                    alt="Project Two"
                    className="object-cover w-full h-64 rounded-md mb-4 lg:mb-0"
                    />
                </div>
        </div>
</div>
      
           
        </projects>
    );
}

export default Projects;
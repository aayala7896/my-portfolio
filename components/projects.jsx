import React from 'react';

function Projects() {
  return (
    <section id="projects" className="scroll-mt-12">
      <h1 className="text-5xl font-extrabold dark:text-white text-center pt-6 lg:py-8">
        Project Showcase
      </h1>
      <div className="container mx-auto px-8 py-8 flex flex-col space-y-16">
        {/* Project 0 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 order-1">
          <a target="_blank" rel="noopener noreferrer" href="https://abmginc.com/">
            <img
              src="/ABMG_INC.png"
              alt="ABMG INC"
              className="object-contain w-full h-64 rounded-md"
            />
            </a>
          </div>
          <div className="w-full lg:w-1/2 order-2 lg:px-8">
            <h2 className="text-4xl font-extrabold dark:text-white mb-4">ABMG INC</h2>
            <div className="flex flex-wrap items-center py-2 space-x-4 mb-4">
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Wordpress
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Figma
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Redesigned a consulting firm's website using WordPress and the Divi theme. Delivered a fully responsive design optimized for all devices, featuring user-friendly navigation and integrated contact forms to enhance client engagement.
            </p>

          </div>
        </div>
        
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 lg:px-8">
            <h2 className="text-4xl font-extrabold dark:text-white mb-4">Linked by Drea</h2>
            <div className="flex flex-wrap items-center py-2 space-x-2 mb-4">
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Wordpress
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Responsive Wordpress website for a jewelry business focused on permanent accessories. The site promotes events for the business and jewelry care FAQ.
            </p>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-4">
              <li>SEO Optimization</li>
              <li>Contact Form and Event functionality</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start">
            <a target="_blank" rel="noopener noreferrer" href="https://linkedbydrea.com/">
            <img
              src="/Linkedbydrea.png"
              alt="Project One"
              className="object-contain w-full h-64 rounded-md"
            />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 order-1">
            <img
              src="/bluesurf.png"
              alt="Blue Surf"
              className="object-contain w-full h-64 rounded-md"
            />
          </div>
          <div className="w-full lg:w-1/2 order-2 lg:px-8">
            <h2 className="text-4xl font-extrabold dark:text-white mb-4">Blue Surf</h2>
            <div className="flex flex-wrap items-center py-2 space-x-4 mb-4">
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Django
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Docker
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Developed an e-commerce website using Python, Django, Google Cloud Platform, and Django REST API.
            </p>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Mocked-up surf company selling surfboards.</li>
              <li>Integrated Stripe API for payment processing.</li>
            </ul>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 lg:px-8">
            <h2 className="text-4xl font-extrabold dark:text-white mb-4">Multi-Thread Analysis</h2>
            <div className="flex flex-wrap items-center py-2 space-x-4 mb-4">
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                C
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Go
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Python
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Designed and implemented a multi-threaded DNS resolver, optimizing domain name resolution.
            </p>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Improved performance resolution of domain names.</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-start">
            <img
              src="/ThreadAnalysis.png"
              alt="Multi-Thread Analysis"
              className="object-contain w-full h-64 rounded-md"
            />
          </div>
        </div>

        {/* Project 4 */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 order-1">
            <img
              src="/DebtSupervisor.png"
              alt="Debt Supervisor"
              className="object-contain w-full h-64 rounded-md"
            />
          </div>
          <div className="w-full lg:w-1/2 order-2 lg:px-8">
            <h2 className="text-4xl font-extrabold dark:text-white mb-4">Debt Supervisor</h2>
            <div className="flex flex-wrap items-center py-2 space-x-4 mb-4">
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Python
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Django
              </span>
              <span className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
                Git
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enabled users to input and track their debts, providing personalized repayment strategies.
            </p>
            <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Gained experience in Agile programming & software engineering fundamentals.</li>
              <li>Scrum Master, facilitated sprints direction.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

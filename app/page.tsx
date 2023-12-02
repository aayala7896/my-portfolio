import React, { Children } from 'react'
import { Metadata } from 'next';
import Image from 'next/image'
import Header from '../components/header'
import Nav from '../components/navbar'
import Skills from '../components/skills'
import Projects from '../components/projects'
import About from '@/components/about'
import Footer from '@/components/footer'
import './globals.css'


export default function Home() {
  return (
    <main >
      <Nav/>
      
        <div className="grid grid-flow-row auto-rows-max flex ">
          <div>
            <Header/> 
          </div>
         
          <hr className="w-full border-t-2 border-gray-500 dark:border-gray-300 mx-auto" />
         
          <div>
            <About/>
          </div>
          <hr className="w-full border-t-2 border-gray-500 dark:border-gray-300 mx-auto" />
          
    

      
        
       
        <div>
        <Projects/>
        </div>

        </div>

        <Footer/>
    </main>
  )
}

'use client'
import React, { Children } from 'react'
import { Metadata } from 'next';
import Image from 'next/image'
import Nav from '@/components/navbar'
import About from '@/components/about'
import Footer from '@/components/footer'
import '@/app/globals.css'
import * as Form from '@radix-ui/react-form';
import '@radix-ui/themes/styles.css';
import {Input} from "@nextui-org/react"
import Contactform from '@/components/contactform';

interface Formdata{
    name: string;
    email: string;
    message:string;
}


export default function Page() {
    
    return (
        <div className="grid grid-flow-row auto-rows-max flex mt-12 ">
        
        <div >
            <h1 className="mb-4 mt-12 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contact Me!</h1>
        </div>
        <div className = "container mx-auto px-4">
        <Contactform/>
        </div>
        </div>
    )
}

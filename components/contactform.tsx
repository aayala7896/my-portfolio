import React from "react"
import { FormEvent,useState} from "react";

function Contactform(){
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const contactMessage = {
            email,message
        }
        const formData = contactMessage
        const response = await fetch('/api/submit',{
            method: 'POST',
            body: JSON.stringify(formData),
            
        })
        if (response.ok) {
            const data = await response.json();
            console.log('API Response:', data);
          } else {
            console.error('Error submitting the form');
          }
    }
    return(
    <div>
        <form onSubmit={onSubmit}>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value ={email} id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@gmail.com"/>
                
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <div className="flex mb-8">
                <input type="text" onChange = {(e)=>setMessage(e.target.value)} value={message} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message"/>
            </div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" disabled={isLoading}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Send Message
                </span>
            </button>
            </form>
    </div>
    )
}
export default Contactform;
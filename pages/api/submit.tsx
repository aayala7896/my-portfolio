import React from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'
 import nodemailer from 'nodemailer'
 
 type FormData = {
    email: string;
    message: string;
  };
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

   
        const formData = req.body;
        console.log('Received form data:', formData)
        if(req.method === 'POST'){
            await sendEmail(formData);
            console.log("We cando soemthoing")
        }
    
  res.status(200).json({ message: 'Hello from Next.js' })
}

async function sendEmail(formData: string) {
    const transporter = nodemailer.createTransport({
      // Provide your email configuration here (e.g., SMTP settings)
      service: 'gmail',
      auth: {
        user: 'aayala7896@gmail.com',
        pass: 'ebzd tyfy lvks bstr',
      },
    });
    const parsedFormData = JSON.parse(formData);

    const { email, message } = parsedFormData;
    const mailOptions = {
      from: 'aayala7896@gmail.com',
      to: 'aayala7896@gmail.com',
      subject: 'New Form Submission',
      text: `New form submission:\n\nEmail: ${email}\nMessage: ${message}`,
    };
  
    await transporter.sendMail(mailOptions);
  }
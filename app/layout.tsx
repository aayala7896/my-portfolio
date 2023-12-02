import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Alex Ayala Portfolio',
  },
  description: 'Hi, Welcome To My Portfolio! Developed with React & Next.js',
  metadataBase: new URL('https://www.alex-ayala.com/'),
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

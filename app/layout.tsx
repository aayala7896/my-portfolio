import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  openGraph: {
    title: "Home | Portfolio",
    url: "https://www.alex-ayala.com/",
    description: 'Hi, Welcome To My Portfolio! Developed with React & Next.js',
    type: "website",
    images: [
      {
        url: "https://www.alex-ayala.com/homepage.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
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

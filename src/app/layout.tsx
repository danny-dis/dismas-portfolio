import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dismas Muriuki — Designer + Coder',
    template: '%s | Dismas Muriuki',
  },
  description: 'Dismas Muriuki is a designer and coder combining UI/UX, visual thinking, and frontend engineering to build digital products.',
  keywords: ['Dismas Muriuki', 'Designer', 'Coder', 'UI/UX', 'Frontend Developer', 'Creative Technologist', 'TypeScript', 'React', 'Kenya'],
  authors: [{ name: 'Dismas Muriuki', url: 'https://dismas.dev' }],
  creator: 'Dismas Muriuki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dismas.dev',
    title: 'Dismas Muriuki — Designer + Coder',
    description: 'Designing digital experiences and building them too — UI/UX, frontend engineering, and creative technology.',
    siteName: 'Dismas Muriuki Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dismas Muriuki — Designer + Coder',
    description: 'UI/UX, frontend engineering, and creative technology.',
  },
  robots: {
    index: process.env.NODE_ENV === 'production',
    follow: process.env.NODE_ENV === 'production',
    googleBot: {
      index: process.env.NODE_ENV === 'production',
      follow: process.env.NODE_ENV === 'production',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-900 text-dark-50 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

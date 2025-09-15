import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dismas Muriuki - Backend Developer & DB Junkie',
    template: '%s | Dismas Muriuki',
  },
  description: 'Backend dev & DB junkie — a strong believer in peer-to-peer technology and blockchain tech. I build dependable systems and mentor junior devs.',
  keywords: ['Backend Developer', 'Database', 'Blockchain', 'P2P', 'Node.js', 'React', 'Kenya'],
  authors: [{ name: 'Dismas Muriuki', url: 'https://dismas.dev' }],
  creator: 'Dismas Muriuki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dismas.dev',
    title: 'Dismas Muriuki - Backend Developer & DB Junkie',
    description: 'Backend dev & DB junkie — a strong believer in peer-to-peer technology and blockchain tech.',
    siteName: 'Dismas Muriuki Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dismas Muriuki - Backend Developer & DB Junkie',
    description: 'Backend dev & DB junkie — a strong believer in peer-to-peer technology and blockchain tech.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-900 text-dark-50 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

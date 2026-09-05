import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dismas Muriuki — Software Engineer | AI Systems | Blockchain',
    template: '%s | Dismas Muriuki',
  },
  description: 'Software engineer specializing in AI agent architectures, multi-provider LLM routing, blockchain voting platforms, and security tools. 16+ production-grade systems built independently.',
  keywords: ['Software Engineer', 'AI Systems', 'Blockchain', 'Full-Stack', 'TypeScript', 'Python', 'Rust', 'Solidity', 'Kenya', 'Remote'],
  authors: [{ name: 'Dismas Muriuki', url: 'https://dismas.dev' }],
  creator: 'Dismas Muriuki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dismas.dev',
    title: 'Dismas Muriuki — Software Engineer | AI Systems | Blockchain',
    description: 'Software engineer specializing in AI agent architectures, multi-provider LLM routing, blockchain voting platforms, and security tools.',
    siteName: 'Dismas Muriuki Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dismas Muriuki — Software Engineer | AI Systems | Blockchain',
    description: 'Software engineer specializing in AI agent architectures, multi-provider LLM routing, blockchain voting platforms, and security tools.',
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

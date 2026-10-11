import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dismas-portfolio.vercel.app'),
  title: {
    default: 'Dismas Muriuki | AI tools and interfaces',
    template: '%s | Dismas Muriuki',
  },
  description:
    'Dismas Muriuki Mutabari is a software builder in Kenya working on AI tools and their interfaces. Read about DMR-X, MOTE, Chimera and Drift.',
  keywords: [
    'Dismas Muriuki',
    'Designer',
    'Coder',
    'UI/UX',
    'Frontend Developer',
    'Creative Technologist',
    'TypeScript',
    'React',
    'Kenya',
  ],
  authors: [
    { name: 'Dismas Muriuki', url: 'https://dismas-portfolio.vercel.app' },
  ],
  creator: 'Dismas Muriuki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dismas-portfolio.vercel.app',
    title: 'Dismas Muriuki | AI tools and interfaces',
    description:
      'Software builder in Kenya. Model gateways, coding-agent workspaces and the interfaces around them.',
    siteName: 'Dismas Muriuki Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dismas Muriuki: AI tools and the interfaces around them',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dismas Muriuki | AI tools and interfaces',
    description:
      'AI infrastructure, developer tools and responsive interfaces.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: '#0c1518',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

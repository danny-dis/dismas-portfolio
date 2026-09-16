'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-dark-100 hover:text-primary-400 transition-colors">
            Dismas<span className="text-primary-400">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-dark-200 hover:text-primary-400 transition-colors duration-200 font-medium">
                {item.name}
              </Link>
            ))}
            <a href="https://github.com/danny-dis" target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-primary-400 transition-colors" aria-label="GitHub">
              GitHub
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md text-dark-200 hover:text-primary-400 hover:bg-dark-800 transition-colors" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="block px-3 py-2 text-dark-200 hover:text-primary-400 hover:bg-dark-800 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <a href="https://github.com/danny-dis" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-dark-200 hover:text-primary-400 hover:bg-dark-800 rounded-md transition-colors">
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

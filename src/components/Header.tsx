'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Notes', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggle.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-width">
          <nav aria-label="Main navigation" className="header-inner">
            <Link
              href="/"
              className="wordmark"
              aria-label="Dismas Muriuki, home"
            >
              dismas<span>.</span>
            </Link>
            <div className="desktop-nav">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    pathname?.startsWith(item.href) ? 'page' : undefined
                  }
                >
                  {item.name}
                </Link>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                CV ↗
              </a>
            </div>
            <button
              ref={toggle}
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </nav>
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav md:hidden"
            hidden={!isOpen}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={
                  pathname?.startsWith(item.href) ? 'page' : undefined
                }
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Read my CV ↗
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

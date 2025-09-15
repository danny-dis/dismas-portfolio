'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const typewriterTexts = [
  'Backend Developer',
  'Database Enthusiast',
  'P2P Technology Advocate',
  'Blockchain Believer',
  'System Builder',
  'FOSS Advocate'
]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typewriterTexts[currentTextIndex]
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-preview')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in visible">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-dark-100">Hi, I'm </span>
            <span className="text-primary-400">Dismas</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-dark-300">
              I'm a{' '}
              <span className="text-primary-400 font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-dark-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Backend dev & DB junkie — a strong believer in peer-to-peer technology and blockchain tech. 
            I build dependable systems and mentor junior devs. I love coffee and old cars.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-300 hover:text-primary-400 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 underline decoration-primary-400/40 hover:decoration-primary-400"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dark-400 hover:text-primary-400 transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

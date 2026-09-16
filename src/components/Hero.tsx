'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, ArrowRight, Code2, Palette } from 'lucide-react'

const typewriterTexts = [
  'Designer + Coder',
  'UI/UX Designer',
  'Creative Technologist',
  'Frontend Developer',
]

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = typewriterTexts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) setTimeout(() => setIsDeleting(true), 1800)
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        }
      }
    }, isDeleting ? 45 : 85)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex])

  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.12),transparent_45%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="fade-in visible">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-dark-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Designer + Coder · Kenya
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">I design </span>
            <span className="text-primary-400">digital experiences</span>
            <span className="text-dark-100"> and build them too.</span>
          </h1>

          <div className="min-h-10 mb-7">
            <p className="text-xl md:text-2xl text-dark-300">
              <span className="text-primary-400 font-semibold">{currentText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-dark-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Computer science graduate-in-progress with a builder's mindset. I combine interface design,
            visual thinking, and frontend engineering to turn ideas into usable digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#work" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors hover-lift">
              See My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-dark-600 hover:border-primary-500 text-dark-200 hover:text-primary-400 px-7 py-3.5 rounded-lg font-semibold transition-colors hover-lift">
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10 text-sm text-dark-400">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-800/60"><Palette size={16} /> UI / UX</span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-800/60"><Code2 size={16} /> Frontend</span>
            <span className="px-3 py-2 rounded-lg bg-dark-800/60">React · Next.js · TypeScript</span>
          </div>
        </div>
      </div>

      <button onClick={scrollToWork} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500 hover:text-primary-400 transition-colors animate-bounce" aria-label="Scroll to work">
        <ArrowDown size={26} />
      </button>
    </section>
  )
}

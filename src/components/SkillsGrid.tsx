'use client'

import { useEffect, useState } from 'react'

const groups = [
  {
    title: 'Design',
    intro: 'Turning ideas into clear, usable visual experiences.',
    items: ['UI / UX', 'Wireframing', 'Prototyping', 'Visual hierarchy', 'Typography fundamentals', 'Layout & colour fundamentals', 'Design systems', 'Figma', 'Canva (learning)'],
  },
  {
    title: 'Frontend',
    intro: 'Designing and implementing responsive interfaces.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Responsive design', 'Component architecture', 'Tailwind CSS'],
  },
  {
    title: 'Engineering',
    intro: 'Building the systems behind the experience.',
    items: ['Python', 'Node.js', 'Rust', 'PostgreSQL', 'SQLite', 'REST / GraphQL', 'Git / GitHub', 'Docker', 'Linux'],
  },
  {
    title: 'AI & Product',
    intro: 'Working across modern AI and product infrastructure.',
    items: ['AI agents', 'LLM routing', 'MCP', 'Blockchain', 'Smart contracts', 'Security research', 'Product thinking'],
  },
]

export default function SkillsGrid() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary-400 font-semibold mb-3">THE TOOLKIT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">Design meets engineering.</h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            I am strongest where visual decisions and technical implementation meet. I am building my graphic-design practice while bringing an established software-engineering foundation.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${visible ? 'fade-in visible' : 'fade-in'}`}>
          {groups.map((group) => (
            <article key={group.title} className="glass rounded-2xl p-7 hover-lift transition-all duration-300">
              <h3 className="text-xl font-semibold text-dark-100 mb-2">{group.title}</h3>
              <p className="text-sm text-dark-400 mb-5">{group.intro}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-dark-800 text-dark-200 text-sm border border-dark-700">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { Skill } from '@/types'

const skills: Skill[] = [
  { name: 'MySQL', level: 'Advanced', category: 'Backend' },
  { name: 'Linux / Systems', level: 'Highly knowledgeable', category: 'Systems' },
  { name: 'Shell scripting', level: 'Comfortable', category: 'Systems' },
  { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
  { name: 'React', level: 'Intermediate', category: 'Frontend' },
  { name: 'Python', level: 'Intermediate', category: 'Languages' },
  { name: 'Rust', level: 'Beginner', category: 'Languages' },
  { name: 'AI / Machine Learning', level: 'Beginner', category: 'AI/ML' },
]

const levelColors = {
  'Beginner': 'bg-yellow-600',
  'Intermediate': 'bg-blue-600',
  'Advanced': 'bg-green-600',
  'Highly knowledgeable': 'bg-purple-600',
  'Comfortable': 'bg-teal-600',
}

const categoryColors = {
  'Backend': 'border-primary-500',
  'Frontend': 'border-blue-500',
  'Systems': 'border-purple-500',
  'Languages': 'border-green-500',
  'AI/ML': 'border-yellow-500',
}

export default function SkillsGrid() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skills.map(() => true))
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            My expertise spans across backend development, systems administration, 
            and emerging technologies like blockchain and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass rounded-lg p-6 border-l-4 ${categoryColors[skill.category]} 
                hover-lift transition-all duration-300 ${
                  visibleSkills[index] ? 'fade-in visible' : 'fade-in'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-dark-100">{skill.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                    levelColors[skill.level]
                  }`}
                >
                  {skill.level}
                </span>
              </div>
              <p className="text-sm text-dark-400 mb-3">{skill.category}</p>
              
              {/* Progress bar visualization */}
              <div className="w-full bg-dark-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    levelColors[skill.level]
                  }`}
                  style={{
                    width: visibleSkills[index] ? getSkillWidth(skill.level) : '0%',
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-400 italic">
            "I hate coding the traditional way but with AI we can now build whatever we want — call it vibe coding."
          </p>
        </div>
      </div>
    </section>
  )
}

function getSkillWidth(level: Skill['level']): string {
  switch (level) {
    case 'Beginner': return '25%'
    case 'Intermediate': return '60%'
    case 'Advanced': return '85%'
    case 'Highly knowledgeable': return '95%'
    case 'Comfortable': return '70%'
    default: return '50%'
  }
}

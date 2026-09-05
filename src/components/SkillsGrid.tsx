'use client'

import { useEffect, useState } from 'react'
import { Skill } from '@/types'

const skills: Skill[] = [
  { name: 'TypeScript', level: 'Advanced', category: 'Languages' },
  { name: 'Python', level: 'Advanced', category: 'Languages' },
  { name: 'Rust', level: 'Intermediate', category: 'Languages' },
  { name: 'Solidity', level: 'Intermediate', category: 'Languages' },
  { name: 'Node.js', level: 'Advanced', category: 'Backend' },
  { name: 'React', level: 'Advanced', category: 'Frontend' },
  { name: 'Next.js', level: 'Advanced', category: 'Frontend' },
  { name: 'FastAPI', level: 'Intermediate', category: 'Backend' },
  { name: 'PostgreSQL', level: 'Advanced', category: 'Backend' },
  { name: 'SQLite', level: 'Advanced', category: 'Backend' },
  { name: 'MongoDB', level: 'Intermediate', category: 'Backend' },
  { name: 'Neo4j', level: 'Intermediate', category: 'Backend' },
  { name: 'AI Agents', level: 'Advanced', category: 'AI/ML' },
  { name: 'LLM Routing', level: 'Advanced', category: 'AI/ML' },
  { name: 'MCP Protocol', level: 'Advanced', category: 'AI/ML' },
  { name: 'Smart Contracts', level: 'Intermediate', category: 'Blockchain' },
  { name: 'Foundry', level: 'Intermediate', category: 'Blockchain' },
  { name: 'Docker', level: 'Intermediate', category: 'DevOps' },
  { name: 'CI/CD', level: 'Intermediate', category: 'DevOps' },
  { name: 'Git', level: 'Advanced', category: 'DevOps' },
  { name: 'Linux / Systems', level: 'Advanced', category: 'Systems' },
  { name: 'Shell scripting', level: 'Advanced', category: 'Systems' },
  { name: 'WebSockets', level: 'Advanced', category: 'Backend' },
  { name: 'REST/GraphQL', level: 'Advanced', category: 'Backend' },
]

const levelColors: Record<string, string> = {
  'Beginner': 'bg-yellow-600',
  'Intermediate': 'bg-blue-600',
  'Advanced': 'bg-green-600',
  'Highly knowledgeable': 'bg-purple-600',
  'Comfortable': 'bg-teal-600',
}

const categoryColors: Record<string, string> = {
  'Backend': 'border-primary-500',
  'Frontend': 'border-blue-500',
  'Systems': 'border-purple-500',
  'Languages': 'border-green-500',
  'AI/ML': 'border-yellow-500',
  'Blockchain': 'border-orange-500',
  'DevOps': 'border-cyan-500',
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
            My expertise spans AI systems, blockchain, full-stack development, and security — built through 16+ production-grade projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass rounded-lg p-6 border-l-4 ${categoryColors[skill.category] || 'border-gray-500'} 
                hover-lift transition-all duration-300 ${
                  visibleSkills[index] ? 'fade-in visible' : 'fade-in'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-dark-100">{skill.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                    levelColors[skill.level] || 'bg-gray-600'
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
                    levelColors[skill.level] || 'bg-gray-600'
                  }`}
                  style={{
                    width: visibleSkills[index] ? getSkillWidth(skill.level) : '0%',
                    transitionDelay: `${index * 50 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-400 italic">
            "I don't just write code — I build systems."
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

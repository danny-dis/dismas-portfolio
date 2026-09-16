'use client'

import Link from 'next/link'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`group glass rounded-2xl overflow-hidden hover-lift ${featured ? 'border-primary-500/25' : ''}`}>
      <div className="h-1 bg-gradient-to-r from-primary-500/70 via-primary-400/20 to-transparent" />
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-dark-500 mb-2">{featured ? 'Selected project' : 'Project'}</p>
            <h3 className="text-xl md:text-2xl font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">{project.title}</h3>
          </div>
          <ArrowUpRight className="text-dark-600 group-hover:text-primary-400 transition-colors shrink-0" size={22} />
        </div>

        <p className="text-dark-300 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.technologies.slice(0, 4).map((tech) => <span key={tech} className="bg-dark-800 border border-dark-700 text-dark-300 px-3 py-1 rounded-full text-xs">{tech}</span>)}
          {project.technologies.length > 4 && <span className="text-dark-500 text-xs px-2 py-1">+{project.technologies.length - 4} more</span>}
        </div>

        <div className="flex items-center justify-between gap-4 pt-5 border-t border-dark-800">
          <div className="flex items-center gap-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors" aria-label={`View ${project.title} on GitHub`}><Github size={17} /><span className="text-sm">Code</span></a>
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors" aria-label={`View ${project.title} live demo`}><ExternalLink size={17} /><span className="text-sm">Live</span></a>}
          </div>
          <Link href={`/projects/${project.id}`} className="text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors">Case study →</Link>
        </div>
      </div>
    </article>
  )
}

'use client'

import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div className={`glass rounded-lg overflow-hidden hover-lift transition-all duration-300 ${
      featured ? 'border border-primary-500/30' : ''
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          {featured && (
            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-dark-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-dark-700 text-dark-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-dark-400 text-sm px-3 py-1">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-dark-400 hover:text-primary-400 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-dark-400 hover:text-primary-400 transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  )
}

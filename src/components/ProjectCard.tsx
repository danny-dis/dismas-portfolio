import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/types'
import ProjectDiagram from './ProjectDiagram'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card ${featured ? 'project-card-featured' : ''}`}
    >
      <div>
        <p className="eyebrow">{project.title.split(' — ')[1]}</p>
        <h3>
          <Link href={`/projects/${project.id}`}>
            {project.title.split(' — ')[0]}
          </Link>
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <Link href={`/projects/${project.id}`}>
            Inside the project <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Source code <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Project website <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="project-origin">{project.provenance}</p>
      </div>
      {featured && <ProjectDiagram id={project.id} />}
    </article>
  )
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/lib/projects'
import ProjectDiagram from '@/components/ProjectDiagram'

interface ProjectPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  return project
    ? { title: project.title, description: project.description }
    : { title: 'Project not found' }
}
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  return (
    <div className="site-width inner-page">
      <header className="page-header">
        <Link href="/projects" className="text-link mb-6">
          ← All work
        </Link>
        <p className="eyebrow">{project.provenance}</p>
        <h1>{project.title.split(' — ')[0]}</h1>
        <p className="copy">{project.description}</p>
        <div className="link-row mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Source code ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Project website ↗
            </a>
          )}
        </div>
      </header>
      <div className="narrative-grid">
        <div>
          {project.story ? (
            <>
              <section className="story-section">
                <h2>The problem</h2>
                <p>{project.story.problem}</p>
              </section>
              <section className="story-section">
                <h2>The decision</h2>
                <p>{project.story.decision}</p>
              </section>
            </>
          ) : null}
          <section className="story-section">
            <h2>How it works</h2>
            <p>{project.longDescription}</p>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section className="story-section">
            <h2>Scope and limits</h2>
            <p>{project.story?.scope || project.provenance}</p>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-4"
            >
              Read the implementation ↗
            </a>
          </section>
        </div>
        <aside
          className="project-aside"
          aria-label="Project architecture and technologies"
        >
          <ProjectDiagram id={project.id} />
          <section className="story-section">
            <h2>Built with</h2>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>
          <section className="story-section">
            <h2>Keep exploring</h2>
            {projects
              .filter((other) => other.id !== project.id)
              .slice(0, 2)
              .map((other) => (
                <div key={other.id} className="mb-5">
                  <Link href={`/projects/${other.id}`} className="text-link">
                    {other.title.split(' — ')[0]} ↗
                  </Link>
                  <p className="copy text-sm">{other.description}</p>
                </div>
              ))}
          </section>
        </aside>
      </div>
    </div>
  )
}

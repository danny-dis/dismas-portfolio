import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'AI gateways, agent execution and developer workspaces by Dismas Muriuki. Explore the code, architecture and scope of each project.',
}

export default function ProjectsPage() {
  return (
    <div className="site-width inner-page">
      <header className="page-header">
        <p className="eyebrow">WORK / PUBLIC REPOSITORIES</p>
        <h1>
          From the gateway
          <br />
          to the workspace.
        </h1>
        <p className="copy">
          These are the systems I spend time building. Each project has a
          different job, with its own interface, constraints and code you can
          read.
        </p>
      </header>
      <section aria-labelledby="independent-work">
        <h2 id="independent-work" className="eyebrow">
          INDEPENDENT PROJECTS
        </h2>
        <div className="project-list">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
        </div>
      </section>
      <section className="section mt-16" aria-labelledby="other-work">
        <div className="section-top">
          <div>
            <h2 id="other-work" className="section-heading">
              Other work
            </h2>
            <p className="copy">
              Architecture notes, maintained derivatives and educational
              adaptations. The original projects are credited where the work
              builds on someone else’s code.
            </p>
          </div>
        </div>
        <div className="secondary-grid">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>
      <a
        href="https://github.com/danny-dis"
        target="_blank"
        rel="noopener noreferrer"
        className="text-link"
      >
        Browse my GitHub repositories ↗
      </a>
    </div>
  )
}

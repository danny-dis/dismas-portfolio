import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import { Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Dismas Muriuki\'s projects including decentralized voting systems, P2P networks, and blockchain applications.',
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
            Building modular, self-hosted apps and blockchain peer-to-peer systems. 
            Each project is designed with freedom, decentralization, and modularity in mind.
          </p>
          <a
            href="https://github.com/danny-dis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <Github size={20} />
            <span>View all repositories on GitHub</span>
          </a>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-dark-100 mb-8 flex items-center">
            <span className="bg-primary-600 text-white text-sm px-3 py-1 rounded-full mr-3">
              Featured
            </span>
            Main Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-dark-100 mb-8">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Philosophy */}
        <section className="mt-20">
          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-dark-100 mb-6">
              Project Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">
                  Modular Design
                </h3>
                <p className="text-dark-300">
                  I build my apps with so much modularity that the modules can be mix-matched 
                  however we feel like. This approach allows for maximum reusability and flexibility.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">
                  Decentralized Architecture
                </h3>
                <p className="text-dark-300">
                  Each device installing the app contributes to the system. The bigger the user base 
                  grows, the stronger and more resilient the system runs.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">
                  No Central Server
                </h3>
                <p className="text-dark-300">
                  Some of my apps are designed with the idea of no central server. Every device 
                  acts as both server and client in a blockchain-type network.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">
                  Open Source First
                </h3>
                <p className="text-dark-300">
                  FOSS is one of my biggest philosophies — free as in freedom. All projects 
                  are open source and available for community contribution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

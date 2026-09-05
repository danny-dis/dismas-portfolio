import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Code } from 'lucide-react'
import { getProjectBySlug, projects } from '@/lib/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-4">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-primary-600 text-white text-sm px-3 py-2 rounded-full">
                  Featured Project
                </span>
              )}
            </div>
          </div>

          <p className="text-xl text-dark-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
            >
              <Github size={20} />
              <span>View Source</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </header>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="glass rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-dark-100 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-dark-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Features based on project type */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-dark-100 mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {getProjectFeatures(project.id).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-dark-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark-100 mb-4 flex items-center">
                <Code size={20} className="mr-2" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-dark-700 text-dark-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark-100 mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Philosophy */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark-100 mb-4">
                Philosophy
              </h3>
              <p className="text-dark-300 text-sm">
                Built with modularity, decentralization, and FOSS principles in mind. 
                Designed to be self-hosted and contribute to a peer-to-peer future.
              </p>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-dark-100 mb-8">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="glass rounded-lg p-6 hover-lift transition-all duration-300 block"
                >
                  <h3 className="text-lg font-semibold text-dark-100 mb-2">
                    {relatedProject.title}
                  </h3>
                  <p className="text-dark-300 text-sm mb-4 line-clamp-2">
                    {relatedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-dark-700 text-dark-200 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function getProjectFeatures(projectId: string): string[] {
  const features: Record<string, string[]> = {
    'argus': [
      '244+ Python files across 28 specialist agent folders',
      'Committed exploitation loop: fingerprint → match CVE/PoC → develop → run → verify',
      'Parallel fuzzing-to-exploit workshop across 6 engines',
      'Operational severity model grading by demonstrated impact',
      '8-phase MasterAgent lifecycle + AgentBus dispatch'
    ],
    'chimera': [
      'Draft → Verify → Challenge → Synthesize pipeline',
      'Cost-aware routing with configurable caps (per-task, per-session, per-day)',
      'Agent Relay Racing: monitors context fill, triggers graceful handoff',
      'Worktree isolation for parallel agent execution',
      'DAG-based declarative workflow engine, VS Code chat panel, LSP intelligence'
    ],
    'dmr-x': [
      'Single gateway for OpenAI, Anthropic, and Gemini wire formats',
      'Routes to 57+ provider adapters with dynamic scoring',
      'Thompson Sampling bandit for dynamic routing with fallback chains',
      'Agent-as-a-Service runtime: durable sessions with resume/retry',
      'MCP server with stdio/SSE/HTTP transports'
    ],
    'noesis': [
      'Two-tier memory: agent-local + shared temporal knowledge graph',
      'Content-addressed object store for immutable raw evidence',
      'Trust-scoring and deduplication across raw agent transcripts',
      'Python insight workers for chunking, embedding, extraction, graphification',
      'MCP adapter serving scoped, cited Context Slices to agents'
    ],
    'votechain': [
      'VotingFactory + Voting contracts (Solidity 0.8.24, OpenZeppelin v5, Foundry)',
      'Multi-tenant: each organization gets isolated smart-contract elections',
      'Privy embedded wallet + MetaMask support for voter authentication',
      'Results indexing into Postgres with live SSE streaming to React frontend',
      'Base L2 deployment for low gas costs'
    ],
    'ghost-factory': [
      'Modular toolchain abstraction for multi-language, multi-platform builds',
      'Targets C, C++, Rust, Go, Java, Python, Web',
      'Supports Windows/Linux/macOS/Docker/ISO/firmware',
      '"Ghost-ify" pipeline for automated repository transformation'
    ],
    'escrowbot': [
      'Platform-agnostic core with adapters for Telegram, Slack, Discord',
      '2-of-3 multisig + HTLC dispute resolution',
      'Deterministic escrow — never controlled by the operator',
      'Smart contract-enforced deposits, release, and refunds'
    ]
  }

  return features[projectId] || [
    'Open source and freely available',
    'Built with modern technologies',
    'Designed for scalability and performance',
    'Community-driven development',
    'Comprehensive documentation'
  ]
}

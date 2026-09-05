import Hero from '@/components/Hero'
import SkillsGrid from '@/components/SkillsGrid'
import ProjectCard from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'
import { getLatestBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import { ArrowRight, Coffee, Car } from 'lucide-react'

export default async function HomePage() {
  const featuredProjects = getFeaturedProjects()
  const latestPosts = await getLatestBlogPosts(2)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <section id="about-preview" className="py-20 bg-dark-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-8">
            About Me
          </h2>
          <p className="text-lg text-dark-300 mb-8 leading-relaxed">
            Self-directed software engineer who has independently built and shipped <span className="text-primary-400 font-semibold">16+ production-grade systems</span> spanning AI agent architectures, multi-provider LLM routing, blockchain voting platforms, and security tools. BSc Computer Science candidate (expected 2026). Seeking remote roles with European, American, or Asian teams.
          </p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-dark-400">
              <Coffee size={20} />
              <span>Coffee Lover</span>
            </div>
            <div className="flex items-center space-x-2 text-dark-400">
              <Car size={20} />
              <span>Old Cars Enthusiast</span>
            </div>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <span>Read my full story</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsGrid />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Production-grade systems built independently — from AI agents to blockchain voting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Goals Preview */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-12 text-center">
            My Goals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-400 mb-4">Short-term</h3>
              <ul className="space-y-3 text-dark-300">
                <li>• Land a remote role with a European or American tech company</li>
                <li>• Contribute to major open-source AI/agent projects</li>
                <li>• Build out A.R.G.U.S into a full security platform</li>
                <li>• Ship production-ready MCP tooling for DMR-X</li>
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-400 mb-4">Long-term</h3>
              <ul className="space-y-3 text-dark-300">
                <li>• Create a fully self-hosted, peer-to-peer network layer</li>
                <li>• Become recognised for modular, self-hosted apps and blockchain systems</li>
                <li>• Grow a portfolio of open-source tools that communities actually deploy</li>
                <li>• Build a decentralized AI infrastructure platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
                Latest Blog Posts
              </h2>
              <p className="text-lg text-dark-400">
                Thoughts on technology, development, and building the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {latestPosts.map((post) => (
                <article key={post.slug} className="glass rounded-lg p-6 hover-lift transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <time className="text-sm text-dark-400">{new Date(post.date).toLocaleDateString()}</time>
                    <span className="text-sm text-primary-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-100 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-dark-300 mb-4 line-clamp-3">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Read more</span>
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
              >
                <span>View All Posts</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900/20 to-primary-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-dark-300 mb-8 max-w-2xl mx-auto">
            Whether you're interested in AI systems, blockchain technology, 
            or just want to chat about building the future of decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
            >
              Get In Touch
            </Link>
            <a
              href="mailto:muriukidismas9@gmail.com"
              className="border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 hover-lift"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="work" className="section">
        <div className="site-width">
          <div className="section-top">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 className="section-heading">
                A closer look
                <br />
                at the work.
              </h2>
              <p className="copy">
                How do you give people more control over the AI tools they use?
                These projects explore different parts of that question.
              </p>
            </div>
            <Link href="/projects" className="text-link">
              All projects <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="project-list">
            {getFeaturedProjects().map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-width about-grid">
          <div>
            <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
            <h2 className="section-heading">
              It started
              <br />
              with a phone.
            </h2>
            <Link href="/about" className="text-link mt-6">
              More about me <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="about-copy">
            <p>
              I started running Linux through Termux on an Android phone. That
              habit of figuring things out with what I have still shapes how I
              work.
            </p>
            <p>
              Today I’m studying computer science at Murang’a University of
              Technology, with expected graduation 2027. Alongside that, I build
              my own tools and work on the design of their interfaces.
            </p>
            <div className="toolkit">
              <div>
                <h3>Interfaces</h3>
                <p>
                  React, Next.js and TypeScript. Responsive layouts and
                  component design.
                </p>
              </div>
              <div>
                <h3>Under the hood</h3>
                <p>
                  Python, Rust and Node.js. Model gateways, execution loops and
                  local storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-width contact-strip">
          <div>
            <p className="eyebrow">03 / GET IN TOUCH</p>
            <h2 className="section-heading">
              What are you
              <br />
              working on?
            </h2>
            <p className="copy">
              I’m open to remote software and frontend work, and to
              collaborating on developer tools. Send me the problem, the repo,
              or a rough idea.
            </p>
          </div>
          <div className="link-row">
            <Link href="/contact" className="button button-primary">
              Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="https://github.com/danny-dis"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

import Hero from '@/components/Hero'
import SkillsGrid from '@/components/SkillsGrid'
import ProjectCard from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'
import Link from 'next/link'
import { ArrowRight, Check, Code2, Palette, Sparkles } from 'lucide-react'

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 6)

  return (
    <div className="pt-20">
      <Hero />

      {/* Positioning */}
      <section className="py-20 border-y border-dark-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-400 font-semibold mb-3">WHAT I DO</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-6">
                I sit between design and code.
              </h2>
              <p className="text-lg text-dark-400 leading-relaxed">
                My computer-science background gives me a strong engineering foundation. I am now deliberately growing the design side: learning visual design, building UI/UX work, and developing a practical graphic-design portfolio.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6">
                <Palette className="text-primary-400 mb-4" size={28} />
                <h3 className="font-semibold text-dark-100 mb-2">Design</h3>
                <p className="text-sm text-dark-400">Interfaces, layouts, wireframes, prototypes, visual hierarchy and design systems.</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <Code2 className="text-primary-400 mb-4" size={28} />
                <h3 className="font-semibold text-dark-100 mb-2">Engineering</h3>
                <p className="text-sm text-dark-400">React, Next.js, TypeScript and the software systems that turn designs into working products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <div>
              <p className="text-primary-400 font-semibold mb-3">SELECTED WORK</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-3">Design thinking, shipped as software.</h2>
              <p className="text-lg text-dark-400 max-w-2xl">Real projects where product thinking, interface decisions and engineering meet.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold">
              View all work <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Design practice */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-primary-400 font-semibold mb-3">DESIGN PRACTICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-5">Building the visual-design side honestly.</h2>
            <p className="text-lg text-dark-400 leading-relaxed">
              I do not pretend that personal practice is client experience. I am building a focused set of branding, social, print and marketing exercises alongside my existing UI/UX and software work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['Brand identity', 'Logo exploration, colour palette, typography and simple brand collateral.'],
              ['Marketing graphics', 'Social posts and promotional layouts designed for clear communication.'],
              ['Print design', 'Poster, flyer, business-card and brochure exercises with print-aware layouts.'],
            ].map(([title, description]) => (
              <article key={title} className="glass rounded-2xl p-6">
                <Sparkles className="text-primary-400 mb-4" size={22} />
                <h3 className="font-semibold text-dark-100 mb-2">{title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{description}</p>
                <span className="inline-block mt-5 text-xs text-dark-500 uppercase tracking-wider">Personal practice</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SkillsGrid />

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-400 font-semibold mb-3">MY APPROACH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-100">From idea to interface to implementation.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {['Understand the problem', 'Explore structure & visual direction', 'Design the experience', 'Build, test & refine'].map((step, index) => (
              <div key={step} className="glass rounded-2xl p-6">
                <div className="w-9 h-9 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center font-bold mb-5">{index + 1}</div>
                <p className="text-dark-200 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / education */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-semibold mb-3">A LITTLE ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-6">A coder learning to think visually — without leaving code behind.</h2>
          <p className="text-lg text-dark-400 leading-relaxed mb-8">
            I completed my BSc Computer Science coursework at Murang’a University of Technology and expect to graduate in 2027. I have spent most of my time building software, especially AI and developer tools, and I am expanding into design because I enjoy shaping how products look, feel and communicate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['UI / UX', 'Frontend', 'TypeScript', 'React', 'Python', 'AI systems', 'Visual design', 'Fast learner'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900 border border-dark-700 text-dark-300 text-sm">
                <Check size={15} className="text-primary-400" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-semibold mb-3">LET'S TALK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-5">Have a design problem to solve?</h2>
          <p className="text-lg text-dark-400 mb-8">I would love to bring both sides of my skill set to a creative team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors hover-lift">Get In Touch</Link>
            <a href="mailto:muriukidismas9@gmail.com" className="border border-dark-600 hover:border-primary-500 text-dark-200 hover:text-primary-400 px-8 py-3.5 rounded-lg font-semibold transition-colors hover-lift">Email Me</a>
          </div>
        </div>
      </section>
    </div>
  )
}

import Hero from '@/components/Hero'
import SkillsGrid from '@/components/SkillsGrid'
import ProjectCard from '@/components/ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'
import Link from 'next/link'
import { ArrowRight, Check, Code2, Palette, Sparkles } from 'lucide-react'

const practiceAreas = [
  ['Brand identity', 'Logo exploration, colour, typography and simple brand collateral.'],
  ['Marketing graphics', 'Social and promotional layouts built around clear communication.'],
  ['Print design', 'Poster, flyer, business-card and brochure exercises with print-aware layouts.'],
]

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4)

  return (
    <div className="pt-20 overflow-hidden">
      <Hero />

      <section className="py-20 border-y border-dark-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">DESIGN × ENGINEERING</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-6">I sit between design and code.</h2>
              <p className="text-lg text-dark-400 leading-relaxed">
                My computer-science background gives me a strong engineering foundation. I am deliberately growing the design side through UI/UX work and focused visual-design practice.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 hover-lift">
                <Palette className="text-primary-400 mb-4" size={28} />
                <h3 className="font-semibold text-dark-100 mb-2">Design</h3>
                <p className="text-sm text-dark-400">Interfaces, layouts, wireframes, prototypes, hierarchy and design systems.</p>
              </div>
              <div className="glass rounded-2xl p-6 hover-lift">
                <Code2 className="text-primary-400 mb-4" size={28} />
                <h3 className="font-semibold text-dark-100 mb-2">Engineering</h3>
                <p className="text-sm text-dark-400">React, Next.js, TypeScript and the systems that turn product ideas into working software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <div>
              <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">SELECTED WORK</p>
              <h2 className="text-3xl md:text-5xl font-bold text-dark-100 mb-3">Design thinking, shipped as software.</h2>
              <p className="text-lg text-dark-400 max-w-2xl">A selection of real projects where product thinking, interface decisions and engineering meet.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold shrink-0">View all work <ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} featured />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-800/35 border-y border-dark-800/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">DESIGN PRACTICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-5">Building the visual-design side honestly.</h2>
            <p className="text-lg text-dark-400 leading-relaxed">These are personal practice pieces, not claimed client work. I am using them to build a stronger foundation in branding, marketing and print design alongside my software work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {practiceAreas.map(([title, description]) => (
              <article key={title} className="glass rounded-2xl p-6 hover-lift">
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

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">MY APPROACH</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-100">From idea to interface to implementation.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {['Understand the problem', 'Explore structure & visual direction', 'Design the experience', 'Build, test & refine'].map((step, index) => (
              <div key={step} className="glass rounded-2xl p-6 hover-lift">
                <div className="w-9 h-9 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center font-bold mb-5">{index + 1}</div>
                <p className="text-dark-200 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-800/35 border-y border-dark-800/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-100 mb-6">A coder learning to think visually — without leaving code behind.</h2>
          <p className="text-lg text-dark-400 leading-relaxed mb-8">I completed my BSc Computer Science coursework at Murang’a University of Technology and expect to graduate in 2027. Most of my work has been software, especially AI and developer tools; I am expanding into design because I enjoy shaping how products look, feel and communicate.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['UI / UX', 'Frontend', 'TypeScript', 'React', 'Python', 'AI systems', 'Visual design', 'Fast learner'].map((item) => <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900 border border-dark-700 text-dark-300 text-sm"><Check size={15} className="text-primary-400" /> {item}</span>)}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">LET'S TALK</p>
          <h2 className="text-4xl md:text-6xl font-bold text-dark-100 mb-5">Have a design problem to solve?</h2>
          <p className="text-lg text-dark-400 mb-8">Bring me the problem. I can help think through the interface and build the product.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors hover-lift">Get In Touch</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-dark-600 hover:border-primary-500 text-dark-200 hover:text-primary-400 px-8 py-3.5 rounded-lg font-semibold transition-colors hover-lift">View CV</a>
          </div>
        </div>
      </section>
    </div>
  )
}

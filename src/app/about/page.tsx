import { Metadata } from 'next'
import { MapPin, Code2, Heart, Layers3, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Dismas Muriuki — a designer and coder combining UI/UX, frontend engineering and creative technology.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16">
          <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">ABOUT ME</p>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-100 mb-6">Designer + coder, still very much a builder.</h1>
          <p className="text-xl text-dark-400 leading-relaxed">I started with code, discovered how much interface and visual decisions affect a product, and am deliberately building both sides together.</p>
        </header>

        <div className="space-y-8">
          <section className="glass rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6"><MapPin className="text-primary-400" size={24} /><h2 className="text-2xl font-semibold text-dark-100">Where I come from</h2></div>
            <div className="prose prose-lg max-w-none">
              <p>I grew up in Meru County, Kenya. My route into technology was practical and self-directed: I first ran Linux through Termux on an Android phone, then moved to a laptop and kept learning by building.</p>
              <p>I completed my BSc Computer Science coursework at Murang’a University of Technology and expect to graduate in 2027.</p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-8"><Code2 className="text-primary-400 mb-5" size={26} /><h2 className="text-xl font-semibold text-dark-100 mb-3">Engineering foundation</h2><p className="text-dark-400 leading-relaxed">Most of my work has been software: AI systems, developer tools, frontend applications, distributed ideas and infrastructure. I enjoy understanding how the pieces work underneath.</p></div>
            <div className="glass rounded-2xl p-8"><Palette className="text-primary-400 mb-5" size={26} /><h2 className="text-xl font-semibold text-dark-100 mb-3">Growing the design side</h2><p className="text-dark-400 leading-relaxed">I am building practical UI/UX and visual-design experience through interface work and personal exercises in branding, marketing graphics and print design.</p></div>
          </section>

          <section className="glass rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8"><Layers3 className="text-primary-400" size={24} /><h2 className="text-2xl font-semibold text-dark-100">How I think about products</h2></div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                ['Clarity', 'A product should make its purpose and next action understandable.'],
                ['Modularity', 'Reusable components make systems easier to evolve and recombine.'],
                ['Ownership', 'I am interested in open, self-hostable technology and user control.'],
                ['Learning by building', 'I learn fastest by studying real systems, experimenting and shipping working pieces.'],
              ].map(([title, body]) => <div key={title}><h3 className="text-lg font-semibold text-primary-400 mb-2">{title}</h3><p className="text-dark-400 leading-relaxed">{body}</p></div>)}
            </div>
          </section>

          <section className="glass rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6"><Heart className="text-primary-400" size={24} /><h2 className="text-2xl font-semibold text-dark-100">Beyond the work</h2></div>
            <div className="grid md:grid-cols-2 gap-6 text-dark-400">
              <p>☕ Coffee, especially during long building sessions.</p><p>🚗 Old cars and the craftsmanship behind them.</p><p>🎓 Sharing what I learn with other developers.</p><p>🔒 Privacy, security and technology that gives people more control.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import { Mail, Github, ExternalLink } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Dismas Muriuki about design, frontend engineering, creative technology and software projects.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-14">
          <p className="text-primary-400 font-semibold tracking-widest text-sm mb-3">CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-100 mb-6">Let’s build something useful.</h1>
          <p className="text-xl text-dark-400 leading-relaxed">For design work, frontend projects, creative technology or interesting software problems, send me a message.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4"><Mail className="text-primary-400" size={23} /><h2 className="text-lg font-semibold text-dark-100">Email</h2></div>
              <a href="mailto:muriukidismas9@gmail.com" className="text-dark-200 hover:text-primary-400 transition-colors break-all">muriukidismas9@gmail.com</a>
              <p className="text-sm text-dark-500 mt-2">Best for project details and longer conversations.</p>
            </div>
            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-4"><Github className="text-primary-400" size={23} /><h2 className="text-lg font-semibold text-dark-100">GitHub</h2></div>
              <a href="https://github.com/danny-dis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-dark-200 hover:text-primary-400 transition-colors"><span>github.com/danny-dis</span><ExternalLink size={15} /></a>
              <p className="text-sm text-dark-500 mt-2">See what I am building and learning in public.</p>
            </div>
            <div className="glass rounded-2xl p-7">
              <h2 className="text-lg font-semibold text-dark-100 mb-4">Good conversations include</h2>
              <ul className="space-y-3 text-dark-400 text-sm"><li>• UI/UX and frontend work</li><li>• Design-to-code implementation</li><li>• AI and developer tools</li><li>• Open-source collaboration</li><li>• Creative technology experiments</li></ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-dark-100 mb-2">Send a message</h2>
            <p className="text-dark-500 mb-7">Tell me what you are trying to make, improve or figure out.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

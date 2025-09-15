import { Metadata } from 'next'
import { MapPin, Code, Heart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Dismas Muriuki - his journey from Meru County, Kenya to becoming a backend developer and blockchain enthusiast.',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
            About Me
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            From a small town in Kenya to building decentralized systems — 
            here's my journey in technology and philosophy.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-16">
          <div className="glass rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-primary-400" size={24} />
              <h2 className="text-2xl font-semibold text-dark-100">My Origins</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-dark-300 leading-relaxed mb-4">
                I grew up in Meru County, Kenya in a small town called Mikinduri. I went into a local primary school 
                and a secondary school within our county.
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                I ran my first instance of Linux in Termux on my Android phone (a Ulefone). Then I got a laptop and 
                installed Linux within the first 3 months.
              </p>
              <p className="text-dark-300 leading-relaxed">
                I joined campus without much knowledge to study BSc Computer Science though I thought myself better 
                than most of my classmates on the practical side.
              </p>
            </div>
          </div>
        </section>

        {/* First Code */}
        <section className="mb-16">
          <div className="glass rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="text-primary-400" size={24} />
              <h2 className="text-2xl font-semibold text-dark-100">First Code</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-dark-300 leading-relaxed mb-4">
                I wrote my first code (hello world) in HTML still on my phone and I was happy as f*ck.
              </p>
              <div className="bg-dark-800 border border-dark-600 rounded-lg p-4 my-6">
                <code className="text-primary-400 font-mono">
                  &lt;html&gt;<br />
                  &nbsp;&nbsp;&lt;body&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World!&lt;/h1&gt;<br />
                  &nbsp;&nbsp;&lt;/body&gt;<br />
                  &lt;/html&gt;
                </code>
              </div>
              <p className="text-dark-300 leading-relaxed">
                That moment of seeing "Hello World!" render on my phone screen was pure magic. 
                It was the beginning of everything.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <div className="glass rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="text-primary-400" size={24} />
              <h2 className="text-2xl font-semibold text-dark-100">Philosophy & Beliefs</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-dark-300 leading-relaxed mb-4">
                I hate coding the traditional way but with AI we can now build whatever we want — call it vibe coding. 
                All I need now is resources to self-host the best models and build apps without restrictions.
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                <strong className="text-primary-400">FOSS is one of my biggest philosophies — free as in freedom.</strong>
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                Recently I learned from David Meisler (Unsupervised Learning) that you can build solutions modular 
                to be reused in different projects. I want to build my apps with so much modularity that the modules 
                can be mix-matched however we feel like.
              </p>
              <p className="text-dark-300 leading-relaxed">
                I also believe in a world where every device is a server and client device in a blockchain-type network. 
                Some of my apps are designed with the idea of no central server; each device installing the app contributes 
                to the system and the bigger the user base grows the stronger and more resilient the system runs.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <div className="glass rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="text-primary-400" size={24} />
              <h2 className="text-2xl font-semibold text-dark-100">My Vision</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-dark-300 leading-relaxed mb-6">
                I envision a future where technology serves freedom, not control. Where every individual has 
                the power to participate in truly decentralized networks without depending on centralized authorities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-800/50 rounded-lg p-6 border-l-4 border-primary-500">
                  <h3 className="text-lg font-semibold text-dark-100 mb-3">Decentralization</h3>
                  <p className="text-dark-300 text-sm">
                    Building systems where power is distributed, not concentrated. 
                    Every device becomes part of the network.
                  </p>
                </div>
                
                <div className="bg-dark-800/50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-dark-100 mb-3">Modularity</h3>
                  <p className="text-dark-300 text-sm">
                    Creating reusable components that can be mixed and matched 
                    to build exactly what's needed.
                  </p>
                </div>
                
                <div className="bg-dark-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-dark-100 mb-3">Self-Hosting</h3>
                  <p className="text-dark-300 text-sm">
                    Empowering individuals and communities to run their own 
                    infrastructure and control their data.
                  </p>
                </div>
                
                <div className="bg-dark-800/50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-dark-100 mb-3">Open Source</h3>
                  <p className="text-dark-300 text-sm">
                    Everything should be transparent, auditable, and 
                    freely available for others to learn and improve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-dark-100 mb-6">Beyond Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">☕ Coffee Enthusiast</h3>
                <p className="text-dark-300">
                  I love coffee and believe the best code is written with a good cup nearby. 
                  There's something about the ritual of brewing that helps clear the mind for complex problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">🚗 Old Cars</h3>
                <p className="text-dark-300">
                  I have a passion for old cars — there's beauty in mechanical simplicity and the craftsmanship 
                  of an era when things were built to last and be repaired.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">🎓 Mentoring</h3>
                <p className="text-dark-300">
                  I enjoy mentoring junior developers and sharing knowledge. The best way to solidify your 
                  understanding is to teach others.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-3">🔒 Privacy & Security</h3>
                <p className="text-dark-300">
                  Developing skills in penetration testing and cyber-security. Privacy and security 
                  should be fundamental rights, not luxuries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

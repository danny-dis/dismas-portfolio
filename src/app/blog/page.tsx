import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read Dismas Muriuki\'s thoughts on technology, decentralized systems, blockchain, and building the future of peer-to-peer networks.',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
            Blog
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Thoughts on technology, decentralized systems, and building the future 
            of peer-to-peer networks. Exploring the intersection of code and philosophy.
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="glass rounded-lg p-8 hover-lift transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4 text-sm text-dark-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-dark-100 mb-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-dark-300 mb-6 leading-relaxed">
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  <span>Read full post</span>
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="glass rounded-lg p-12">
              <h2 className="text-2xl font-semibold text-dark-100 mb-4">
                Coming Soon
              </h2>
              <p className="text-dark-300 mb-8">
                I'm working on some exciting blog posts about decentralized systems, 
                blockchain technology, and the future of peer-to-peer networks. 
                Check back soon for updates!
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="/projects"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Topics */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-dark-100 mb-8 text-center">
            Topics I Write About
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Decentralized Systems',
              'Blockchain Technology',
              'P2P Networks',
              'Privacy & Security',
              'Open Source',
              'Self-Hosting',
              'AI & Machine Learning',
              'System Architecture'
            ].map((topic) => (
              <div
                key={topic}
                className="glass rounded-lg p-4 text-center hover-lift transition-all duration-300"
              >
                <span className="text-dark-200 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

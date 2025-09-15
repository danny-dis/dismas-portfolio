import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `https://dismas.dev/blog/${post.slug}`

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6 text-sm text-dark-400">
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

          <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-dark-300 leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Share Button */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  text: post.description,
                  url: shareUrl,
                })
              } else {
                navigator.clipboard.writeText(shareUrl)
              }
            }}
            className="inline-flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors"
          >
            <Share2 size={18} />
            <span>Share this post</span>
          </button>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          <MDXRemote source={post.content} />
        </article>

        {/* Author Bio */}
        <div className="glass rounded-lg p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              DM
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark-100 mb-2">
                Dismas Muriuki
              </h3>
              <p className="text-dark-300 mb-4">
                Backend dev & DB junkie — a strong believer in peer-to-peer technology and blockchain tech. 
                I build dependable systems and mentor junior devs. I love coffee and old cars.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/about"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Learn more about me
                </Link>
                <Link
                  href="/contact"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-semibold text-dark-100 mb-8">
            More Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog"
              className="glass rounded-lg p-6 hover-lift transition-all duration-300 block text-center"
            >
              <h3 className="text-lg font-semibold text-dark-100 mb-2">
                View All Posts
              </h3>
              <p className="text-dark-300 text-sm">
                Explore more thoughts on technology, decentralized systems, and building the future.
              </p>
            </Link>
            
            <Link
              href="/projects"
              className="glass rounded-lg p-6 hover-lift transition-all duration-300 block text-center"
            >
              <h3 className="text-lg font-semibold text-dark-100 mb-2">
                Check Out My Projects
              </h3>
              <p className="text-dark-300 text-sm">
                See the practical applications of these ideas in my open source projects.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'Notes by Dismas Muriuki on AI tools, system architecture and the decisions behind his projects.',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  return (
    <div className="site-width inner-page">
      <header className="page-header">
        <p className="eyebrow">NOTES / FROM THE WORKBENCH</p>
        <h1>
          Things I’m
          <br />
          working through.
        </h1>
        <p className="copy">
          Notes on the systems I build and the choices behind them. Mostly AI
          tools, open source and where one part of a system should end.
        </p>
      </header>
      <div className="max-w-3xl">
        {posts.length ? (
          posts.map((post) => (
            <article className="note-row" key={post.slug}>
              <p className="note-meta">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC',
                  })}
                </time>{' '}
                · {post.readTime}
              </p>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="copy">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-link mt-4">
                Read the note ↗
              </Link>
            </article>
          ))
        ) : (
          <section className="note-row">
            <h2>No notes published yet.</h2>
            <p className="copy">
              You can find the current work in my project repositories.
            </p>
            <Link href="/projects" className="text-link">
              Browse the work ↗
            </Link>
          </section>
        )}
      </div>
    </div>
  )
}

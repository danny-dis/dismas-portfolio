import { BlogPost } from '@/types'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          readTime: data.readTime || '5 min read',
          content,
        }
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || '5 min read',
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export async function getLatestBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts()
  return allPosts.slice(0, limit)
}

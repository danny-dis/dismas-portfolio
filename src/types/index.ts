export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  content: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface Skill {
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Highly knowledgeable' | 'Comfortable'
  category: 'Backend' | 'Frontend' | 'Systems' | 'Languages' | 'AI/ML'
}

# Complete SEO Guide for Developer/Designer Portfolios (Next.js 14+)

## Table of Contents
1. [Technical SEO](#technical-seo)
2. [Content Strategy](#content-strategy)
3. [Performance SEO](#performance-seo)
4. [Social Media Optimization](#social-media-optimization)
5. [Local SEO](#local-seo)
6. [Portfolio-Specific SEO](#portfolio-specific-seo)

---

## 1. Technical SEO

### Next.js 14 Metadata API

**Root Layout Configuration (`app/layout.tsx`):**

```tsx
import type { Metadata } from 'next'

// Set the base URL for all metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: {
    default: 'John Doe | Full Stack Developer & Designer',
    template: '%s | John Doe',
  },
  description: 'Experienced full-stack developer and UI/UX designer specializing in React, Next.js, and TypeScript. View my portfolio of 50+ successful projects.',
  keywords: [
    'web developer',
    'full stack developer',
    'React developer',
    'Next.js developer',
    'UI/UX designer',
    'frontend developer',
    'TypeScript developer',
    'portfolio'
  ],
  authors: [{ name: 'John Doe', url: 'https://yourportfolio.com' }],
  creator: 'John Doe',
  publisher: 'John Doe',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-ES': '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'John Doe Portfolio',
    title: 'John Doe | Full Stack Developer & Designer',
    description: 'Experienced full-stack developer and UI/UX designer specializing in React, Next.js, and TypeScript.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - Full Stack Developer & Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@johndoe',
    creator: '@johndoe',
    title: 'John Doe | Full Stack Developer & Designer',
    description: 'Experienced full-stack developer and UI/UX designer. View my latest projects and case studies.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}
```

**Dynamic Metadata for Project Pages (`app/projects/[slug]/page.tsx`):**

```tsx
import type { Metadata, ResolvingMetadata } from 'next'

interface ProjectPageProps {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${project.title} | Project Case Study`,
    description: project.summary,
    keywords: [
      ...project.technologies,
      'case study',
      'web development',
      'portfolio project',
    ],
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `https://yourportfolio.com/projects/${params.slug}`,
      images: [
        {
          url: project.ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
        ...previousImages,
      ],
      type: 'article',
      publishedTime: project.date,
      authors: ['John Doe'],
      tags: project.technologies,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.ogImage],
    },
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
  }
}
```

### Structured Data (JSON-LD) - Person Schema

**Create a structured data utility (`lib/structured-data.ts`):**

```typescript
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://yourportfolio.com/#person',
  name: 'John Doe',
  alternateName: 'John D.',
  url: 'https://yourportfolio.com',
  image: {
    '@type': 'ImageObject',
    url: 'https://yourportfolio.com/images/profile.jpg',
    width: 800,
    height: 800,
    caption: 'John Doe - Full Stack Developer',
  },
  jobTitle: 'Full Stack Developer & UI/UX Designer',
  description: 'Experienced developer with 5+ years building scalable web applications and beautiful user interfaces.',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance / Independent',
    url: 'https://yourportfolio.com',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'UI/UX Design',
    'Web Development',
    'Full Stack Development',
    'JavaScript',
    'PostgreSQL',
    'MongoDB',
  ],
  sameAs: [
    'https://linkedin.com/in/johndoe',
    'https://github.com/johndoe',
    'https://twitter.com/johndoe',
    'https://dribbble.com/johndoe',
    'https://behance.net/johndoe',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'University Name',
      url: 'https://university.edu',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Certification',
      name: 'AWS Certified Developer',
    },
  ],
}

// For project pages
export const projectSchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  url: `https://yourportfolio.com/projects/${project.slug}`,
  image: {
    '@type': 'ImageObject',
    url: project.coverImage,
    width: 1200,
    height: 630,
  },
  description: project.description,
  author: {
    '@type': 'Person',
    name: 'John Doe',
    url: 'https://yourportfolio.com',
  },
  datePublished: project.date,
  dateModified: project.updatedAt || project.date,
  keywords: project.technologies.join(', '),
  genre: 'Web Development',
  programmingLanguage: project.technologies,
  codeRepository: project.githubUrl,
  isPartOf: {
    '@type': 'WebSite',
    name: 'John Doe Portfolio',
    url: 'https://yourportfolio.com',
  },
})

// For blog posts
export const blogPostSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: {
    '@type': 'ImageObject',
    url: post.coverImage,
    width: 1200,
    height: 630,
  },
  url: `https://yourportfolio.com/blog/${post.slug}`,
  datePublished: post.date,
  dateModified: post.updatedAt || post.date,
  author: {
    '@type': 'Person',
    name: 'John Doe',
    url: 'https://yourportfolio.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'John Doe',
    logo: {
      '@type': 'ImageObject',
      url: 'https://yourportfolio.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://yourportfolio.com/blog/${post.slug}`,
  },
  keywords: post.tags.join(', '),
  articleSection: post.category,
})
```

**Implement structured data in pages:**

```tsx
// app/page.tsx
import Script from 'next/script'
import { personSchema } from '@/lib/structured-data'

export default function HomePage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      {/* Your page content */}
    </>
  )
}
```

### Open Graph Tags Optimization

**Recommended OG Image Sizes:**
- **Facebook:** 1200x630px (1.91:1 ratio)
- **LinkedIn:** 1200x627px
- **Twitter Card:** 1200x600px (summary large image)
- **Twitter Summary:** 1200x600px

**Create dynamic OG images (`app/api/og/route.tsx`):**

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'John Doe'
  const description = searchParams.get('description') || 'Full Stack Developer'
  
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 20 }}>👋 Hey, I'm</div>
        <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>
          {title}
        </div>
        <div style={{ fontSize: 36, textAlign: 'center' }}>{description}</div>
        <div style={{ 
          position: 'absolute', 
          bottom: 40, 
          fontSize: 24,
          opacity: 0.8 
        }}>
          yourportfolio.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
```

### Twitter Cards Configuration

**Use in metadata:**
```tsx
export const metadata: Metadata = {
  twitter: {
    card: 'summary_large_image', // or 'summary' for small image
    site: '@johndoe',
    creator: '@johndoe',
    title: 'Page Title',
    description: 'Page description for Twitter',
    images: ['/twitter-image.jpg'],
  },
}
```

### Canonical URLs

**Automatic canonical generation:**
```tsx
// app/layout.tsx (root)
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

// app/about/page.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
}

// Dynamic pages
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
  }
}
```

### Sitemap Generation

**Dynamic sitemap (`app/sitemap.ts`):**

```typescript
import { MetadataRoute } from 'next'
import { getAllProjects, getAllPosts } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourportfolio.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/blog',
    '/contact',
    '/skills',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Dynamic project pages
  const projects = await getAllProjects()
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt || project.date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Dynamic blog posts
  const posts = await getAllPosts()
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.date,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...projectPages, ...blogPages]
}
```

### robots.txt Configuration

**Dynamic robots.txt (`app/robots.ts`):**

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
          '/*.xml$',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/projects/'],
      },
    ],
    sitemap: 'https://yourportfolio.com/sitemap.xml',
    host: 'https://yourportfolio.com',
  }
}
```

---

## 2. Content Strategy

### Keyword Optimization for Developer Portfolios

**Primary Keywords (High Intent):**
```
- [your name] developer
- [your name] designer
- [your name] portfolio
- full stack developer [location]
- React developer portfolio
- Next.js developer
- TypeScript expert
- UI/UX designer
```

**Secondary Keywords (Project Discovery):**
```
- React portfolio example
- Next.js project showcase
- web development case studies
- frontend developer projects
- modern web design examples
- e-commerce website development
- SaaS product design
- mobile app development
```

**Long-tail Keywords (Specific Services):**
```
- custom React component library
- Next.js performance optimization
- TypeScript migration services
- responsive web design expert
- React animation specialist
- headless CMS integration
- API development services
```

### Project Descriptions That Rank

**SEO-Optimized Project Description Template:**

```markdown
# Project Name

**Meta Title:** [Project Name] - [Technology] Case Study | [Your Name]
**Meta Description:** How I built [Project Name] using [Tech Stack]. 
[Key achievement: e.g., "Improved load time by 40%"]. See the full case study.

## Introduction
Start with a hook that includes your target keyword naturally.
"In this case study, I'll walk you through how I developed [Project Name] 
using Next.js and TypeScript to solve [specific problem]."

## The Challenge
- What problem were you solving?
- Who was the client/audience?
- What constraints did you face?

## Technologies Used
List technologies with brief explanations:
- **Next.js 14** - Server-side rendering and static generation
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first styling
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe database ORM

## Implementation Details
Include code snippets, architecture decisions, and technical challenges.
This content helps you rank for technology-specific keywords.

## Results & Impact
- Quantify achievements ("Reduced bundle size by 35%")
- Include performance metrics
- Show before/after comparisons

## Lessons Learned
Personal insights that demonstrate expertise.
```

**Example Implementation:**

```tsx
// app/projects/[slug]/page.tsx
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>
      
      <section aria-labelledby="challenge">
        <h2 id="challenge">The Challenge</h2>
        <p>{project.challenge}</p>
      </section>
      
      <section aria-labelledby="solution">
        <h2 id="solution">Solution & Implementation</h2>
        <p>{project.solution}</p>
        {/* Include code snippets, architecture diagrams */}
      </section>
      
      <section aria-labelledby="results">
        <h2 id="results">Results</h2>
        <ul>
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
```

### Blog Content for SEO

**Blog Post Ideas for Developer Portfolios:**

1. **How-To Tutorials:**
   - "How to Optimize Next.js 14 for Core Web Vitals"
   - "Building Accessible Components with React and Tailwind"
   - "TypeScript Best Practices for Large Applications"

2. **Case Studies:**
   - "How I Reduced Bundle Size by 50% in a React App"
   - "Migrating from CRA to Next.js: A Complete Guide"
   - "Building a Real-time Chat App with WebSockets"

3. **Comparison Posts:**
   - "Next.js vs Gatsby: Which Should You Choose?"
   - "React Server Components Explained"
   - "CSS-in-JS vs Tailwind: Pros and Cons"

4. **Listicles:**
   - "10 React Performance Optimization Techniques"
   - "5 Essential Developer Tools for 2025"
   - "Top TypeScript Features You Should Know"

**Blog Post Structure for SEO:**

```markdown
# How to [Achieve Result] with [Technology] in [Year]

**Target Keyword:** how to [do something] with [technology]
**Word Count:** 1500-2500 words

## Introduction (150-200 words)
- Hook the reader with a problem
- Include target keyword in first 100 words
- Promise a solution

## Table of Contents
- Link to H2 headings
- Improves UX and SEO

## What is [Technology]? (200 words)
- Brief explanation
- Why it matters
- Include related keywords

## Prerequisites (100 words)
- What readers need to know
- Links to related resources

## Step-by-Step Guide (1000+ words)
### Step 1: [Action]
Include code examples and explanations.
```
### Step 2: [Action]
Add screenshots or diagrams.
```

## Common Mistakes to Avoid (300 words)
- Mistake 1 and solution
- Mistake 2 and solution

## Advanced Tips (300 words)
- Pro tip 1
- Pro tip 2

## Conclusion (150 words)
- Summarize key points
- Include CTA ("Try this in your next project")
- Ask for comments/shares

## FAQ (300 words)
**Q: Common question 1?**
A: Detailed answer with keywords.

**Q: Common question 2?**
A: Detailed answer with keywords.
```

### Image Optimization (Alt Text, Lazy Loading)

**Next.js Image Component Best Practices:**

```tsx
import Image from 'next/image'

// Hero image - priority loading
<Image
  src="/hero-image.jpg"
  alt="John Doe - Full Stack Developer working on laptop in modern office"
  width={1200}
  height={600}
  priority
  quality={90}
  className="object-cover"
/>

// Project screenshot - lazy loaded
<Image
  src="/projects/ecommerce-app.jpg"
  alt="E-commerce application dashboard showing product inventory management interface built with Next.js and React"
  width={800}
  height={600}
  loading="lazy"
  quality={85}
  className="rounded-lg shadow-lg"
/>

// Portfolio gallery - with placeholder
<Image
  src="/portfolio/design-system.jpg"
  alt="Modern design system components including buttons, cards, and form elements with dark theme"
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
  className="rounded-md"
/>

// Responsive image
<Image
  src="/team-photo.jpg"
  alt="Development team collaborating on a project in open office space"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

**Alt Text Best Practices:**

✅ **Good Examples:**
- "React component architecture diagram showing parent-child component relationships"
- "Mobile-responsive e-commerce checkout page with payment form and order summary"
- "Before and after comparison of website performance metrics showing 40% improvement"

❌ **Bad Examples:**
- "Image1.jpg"
- "Screenshot of the app"
- "Picture of code"

**Image SEO Checklist:**
- [ ] Use descriptive filenames: `nextjs-portfolio-hero.jpg` not `IMG_1234.jpg`
- [ ] Add alt text to all images
- [ ] Use WebP format when possible
- [ ] Implement lazy loading for below-fold images
- [ ] Set width and height to prevent CLS
- [ ] Use appropriate image sizes (don't serve 2000px images for 300px containers)
- [ ] Include captions when relevant
- [ ] Create image sitemap for portfolio pieces

---

## 3. Performance SEO

### Core Web Vitals Targets

**2025 Targets:**
| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | 2.5s - 4s | > 4s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms - 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |
| **TTFB** (Time to First Byte) | ≤ 800ms | 800ms - 1800ms | > 1800ms |
| **FCP** (First Contentful Paint) | ≤ 1.8s | 1.8s - 3s | > 3s |

### LCP Optimization for Hero Images

**1. Preload Hero Images:**
```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preload" 
          href="/hero-image.jpg" 
          as="image"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**2. Use Priority Loading:**
```tsx
// Hero image - loads immediately
<Image
  src="/hero-image.jpg"
  alt="Hero description"
  priority
  fetchPriority="high"
  width={1200}
  height={600}
/>
```

**3. Optimize Image Format:**
```tsx
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}
```

**4. Use Next.js Font Optimization:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Prevents invisible text during load
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

**5. Eliminate Render-Blocking Resources:**
```tsx
// Use async/defer for non-critical scripts
<Script
  src="https://analytics.com/script.js"
  strategy="lazyOnload" // or "afterInteractive", "beforeInteractive"
/>
```

### CLS Prevention with Animation

**1. Reserve Space for Dynamic Content:**
```tsx
// Reserve space for images to prevent layout shift
<div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
  <Image
    src="/dynamic-image.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

**2. Use CSS for Layout Stability:**
```css
/* Avoid layout shifts during font loading */
@font-face {
  font-family: 'CustomFont';
  src: url('/font.woff2') format('woff2');
  font-display: swap;
  size-adjust: 100%;
}

/* Reserve space for dynamic content */
.content-container {
  min-height: 400px;
}

/* Smooth animations without layout shift */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

**3. Handle Loading States:**
```tsx
// Skeleton loader maintains layout stability
<div className="animate-pulse">
  <div className="h-48 bg-gray-200 rounded mb-4"></div>
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

**4. Animation Performance Best Practices:**
```css
/* Use transform instead of layout properties */
.card {
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Avoid animating these properties */
/* ❌ Bad: width, height, top, left, margin, padding */
/* ✅ Good: transform, opacity */

/* Use will-change sparingly */
.animated-element {
  will-change: transform, opacity;
}
```

### FID/INP Optimization

**1. Break Up Long Tasks:**
```typescript
// ❌ Bad: Blocks main thread
function processLargeDataset(data: Data[]) {
  const results = []
  for (let i = 0; i < data.length; i++) {
    results.push(heavyComputation(data[i]))
  }
  return results
}

// ✅ Good: Yield to main thread
async function processLargeDataset(data: Data[]) {
  const results = []
  const chunkSize = 100
  
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize)
    results.push(...chunk.map(heavyComputation))
    
    // Yield every 8-16ms
    if (i % 500 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0))
    }
  }
  return results
}
```

**2. Debounce Input Handlers:**
```typescript
// hooks/useDebounce.ts
import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Usage
function SearchComponent() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  
  useEffect(() => {
    // Expensive search operation
    performSearch(debouncedQuery)
  }, [debouncedQuery])
  
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search projects..."
    />
  )
}
```

**3. Optimize Event Listeners:**
```typescript
// ✅ Use passive listeners for scroll/touch
window.addEventListener('scroll', handleScroll, { passive: true })

// ✅ Remove unused listeners
useEffect(() => {
  const handleClick = () => {}
  document.addEventListener('click', handleClick)
  
  return () => {
    document.removeEventListener('click', handleClick)
  }
}, [])
```

**4. Use Web Workers for Heavy Tasks:**
```typescript
// workers/heavyComputation.worker.ts
self.addEventListener('message', (e) => {
  const { data } = e.data
  const result = performHeavyComputation(data)
  self.postMessage(result)
})

// Usage in component
const worker = new Worker(
  new URL('../workers/heavyComputation.worker.ts', import.meta.url)
)

worker.postMessage({ data: largeDataset })
worker.onmessage = (e) => {
  setResults(e.data)
}
```

### Additional Performance Optimizations

**1. Route Pre-fetching:**
```tsx
// next.config.js
module.exports = {
  experimental: {
    // Prefetch links on hover
    scrollRestoration: true,
  },
}

// Manual pre-fetch for critical links
import Link from 'next/link'

<Link href="/projects" prefetch={true}>
  View Projects
</Link>
```

**2. Dynamic Imports:**
```tsx
// Load heavy components only when needed
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false, // Disable SSR for client-only components
})
```

**3. Optimize Third-Party Scripts:**
```tsx
import Script from 'next/script'

// Analytics - load after page becomes interactive
<Script
  src="https://analytics.com/script.js"
  strategy="lazyOnload"
/>

// Critical script - load before hydration
<Script
  src="https://critical-cdn.com/script.js"
  strategy="beforeInteractive"
/>
```

**4. Enable Compression:**
```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
}
```

---

## 4. Social Media Optimization

### Link Preview Optimization

**Universal Meta Tags:**
```html
<!-- Primary Meta Tags -->
<title>John Doe | Full Stack Developer & Designer</title>
<meta name="title" content="John Doe | Full Stack Developer & Designer">
<meta name="description" content="Experienced full-stack developer and UI/UX designer specializing in React, Next.js, and TypeScript. View my portfolio of 50+ successful projects.">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourportfolio.com/">
<meta property="og:title" content="John Doe | Full Stack Developer & Designer">
<meta property="og:description" content="Experienced full-stack developer and UI/UX designer specializing in React, Next.js, and TypeScript.">
<meta property="og:image" content="https://yourportfolio.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="John Doe Portfolio">
<meta property="og:locale" content="en_US">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourportfolio.com/">
<meta property="twitter:title" content="John Doe | Full Stack Developer & Designer">
<meta property="twitter:description" content="Experienced full-stack developer and UI/UX designer. View my latest projects and case studies.">
<meta property="twitter:image" content="https://yourportfolio.com/twitter-image.jpg">
<meta property="twitter:creator" content="@johndoe">
<meta property="twitter:site" content="@johndoe">

<!-- LinkedIn -->
<meta property="linkedin:owner" content="your-linkedin-id">
<meta name="author" content="John Doe">
```

### Shareable Project Pages

**Social Sharing Buttons Component:**

```tsx
// components/SocialShare.tsx
'use client'

interface SocialShareProps {
  url: string
  title: string
  description: string
}

export function SocialShare({ url, title, description }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: TwitterIcon,
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedInIcon,
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
    {
      name: 'Reddit',
      url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: RedditIcon,
    },
    {
      name: 'Email',
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      icon: EmailIcon,
    },
  ]

  return (
    <div className="flex gap-3">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
      
      {/* Copy Link Button */}
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Copy link"
      >
        <CopyIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
```

### Featured Image Dimensions

**Recommended Dimensions by Platform:**

```
📱 Social Platforms:
├─ Facebook: 1200x630px (1.91:1)
├─ Twitter/X: 1200x675px (16:9) or 1200x600px (2:1)
├─ LinkedIn: 1200x627px (1.91:1)
├─ Pinterest: 1000x1500px (2:3)
└─ Instagram: 1080x1080px (1:1) or 1080x1350px (4:5)

🎯 Portfolio/Website:
├─ OG Image: 1200x630px
├─ Hero Image: 1920x1080px (16:9)
├─ Thumbnails: 800x600px (4:3)
└─ Blog Featured: 1200x600px (2:1)
```

**OG Image Design Tips:**
- Include your name/logo
- Use bold, readable typography (min 48px)
- Keep text under 20% of image
- Use contrasting colors
- Include a compelling visual element
- Test with Facebook/Twitter debuggers

### Description Meta Tags

**Writing Effective Meta Descriptions:**

```tsx
// Template for different page types

// Homepage (150-160 characters)
"Full-stack developer & UI/UX designer with 5+ years experience. 
Specializing in React, Next.js, TypeScript. View my portfolio of 50+ projects."
// Character count: ~145 ✓

// Project Page (150-160 characters)
"Case study: How I built [Project Name] using Next.js & TypeScript. 
[Key result]. See architecture, code samples & live demo."
// Character count: ~130 ✓

// Blog Post (150-160 characters)
"Learn how to [topic] with [technology]. Step-by-step guide with code 
examples. Optimize your [result] today."
// Character count: ~120 ✓

// About Page (150-160 characters)
"Meet John Doe, full-stack developer passionate about creating fast, 
accessible web applications. View skills, experience & testimonials."
// Character count: ~140 ✓

// Contact Page (150-160 characters)
"Ready to start your project? Contact John Doe for web development, 
UI/UX design & consulting. Let's build something amazing together."
// Character count: ~145 ✓
```

**Meta Description Best Practices:**
- ✓ Keep between 150-160 characters
- ✓ Include primary keyword near the beginning
- ✓ Add a clear call-to-action
- ✓ Make it unique for each page
- ✓ Include numbers/benefits when possible
- ✓ Match the page content accurately
- ✗ Don't duplicate across pages
- ✗ Don't stuff with keywords
- ✗ Don't use quotation marks (may truncate)

---

## 5. Local SEO

### Location-Based Keywords

**For Location-Targeted Developers:**

```
Primary Keywords:
- web developer [city]
- freelance developer [city]
- software engineer [city]
- web designer [city]
- app developer [city]

Long-tail Keywords:
- hire react developer in [city]
- freelance web developer [city] [state]
- custom website development [city]
- local web development services [city]
- e-commerce developer near me

Combination Keywords:
- [city] web development agency
- [state] full stack developer
- remote developer serving [region]
- [city] tech consultant
```

**Implementation Example:**

```tsx
// app/layout.tsx - for location-based business
export const metadata: Metadata = {
  title: 'John Doe | Web Developer in Austin, TX',
  description: 'Full-stack web developer based in Austin, Texas. Specializing in React, Next.js & Node.js for local businesses and startups.',
  keywords: [
    'web developer austin',
    'freelance developer austin tx',
    'react developer texas',
    'austin web design',
    'local web developer',
  ],
  // ... rest of metadata
}
```

### Google Business Profile (If Applicable)

**Setup Checklist:**

```markdown
1. Create/Claim Your Profile
   - Go to business.google.com
   - Search for existing profile or create new
   - Verify ownership (postcard, phone, email, or instant)

2. Complete Business Information
   ✓ Business name: "John Doe Web Development"
   ✓ Category: "Web Developer" or "Software Company"
   ✓ Address: Your location or service area
   ✓ Phone: Professional business number
   ✓ Website: https://yourportfolio.com
   ✓ Hours: Your working hours
   ✓ Description: 750 characters max, include keywords

3. Add Visual Content
   ✓ Logo (720x720px minimum)
   ✓ Cover photo (1080x608px)
   ✓ Profile photos (professional headshots)
   ✓ Project photos (screenshots of your work)
   ✓ Team photos (if applicable)
   ✓ Virtual tour (optional)

4. Optimize Posts & Updates
   - Share new projects weekly
   - Add offers for services
   - Post blog content
   - Include local keywords
   - Add photos to every post

5. Collect Reviews
   - Ask satisfied clients for reviews
   - Respond to all reviews (positive and negative)
   - Use review link generator: 
     `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`

6. Add Services
   - Web Development
   - UI/UX Design
   - E-commerce Development
   - Mobile App Development
   - API Integration
   - Website Maintenance
```

### Local Structured Data

**LocalBusiness Schema (if you serve local area):**

```typescript
// lib/structured-data.ts

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService', // or 'LocalBusiness'
  '@id': 'https://yourportfolio.com/#business',
  name: 'John Doe Web Development',
  image: 'https://yourportfolio.com/logo.jpg',
  url: 'https://yourportfolio.com',
  telephone: '+1-512-555-0123',
  priceRange: '$$',
  description: 'Full-stack web development services specializing in React, Next.js, and modern web technologies for businesses in Austin, TX.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Street',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78701',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin',
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  },
  serviceType: [
    'Web Development',
    'UI/UX Design',
    'E-commerce Development',
    'API Development',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Development',
          description: 'Full-stack web development using React, Next.js, and Node.js',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'User interface and experience design for web applications',
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://linkedin.com/in/johndoe',
    'https://github.com/johndoe',
    'https://twitter.com/johndoe',
  ],
}

// Service Area Schema (if you serve multiple areas)
export const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  areaServed: [
    {
      '@type': 'City',
      name: 'Austin',
      '@id': 'https://en.wikipedia.org/wiki/Austin,_Texas',
    },
    {
      '@type': 'City',
      name: 'Round Rock',
    },
    {
      '@type': 'City',
      name: 'Cedar Park',
    },
    {
      '@type': 'State',
      name: 'Texas',
    },
  ],
  provider: {
    '@type': 'Person',
    name: 'John Doe',
    url: 'https://yourportfolio.com',
  },
}
```

**Implementation:**

```tsx
// app/page.tsx
import Script from 'next/script'
import { localBusinessSchema } from '@/lib/structured-data'

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* Page content */}
    </>
  )
}
```

### Local Content Strategy

**Location-Based Content Ideas:**

1. **Local Case Studies:**
   ```markdown
   # How I Helped [Local Business] Increase Online Sales by 150%
   
   Overview of project for Austin-based client...
   
   ## The Challenge
   [Local Business] in Austin, TX was struggling with...
   
   ## Solutions for Austin Market
   - Local SEO optimization
   - Google Business Profile integration
   - Mobile-first design for on-the-go Austin customers
   ```

2. **Local Landing Pages:**
   ```tsx
   // app/services/web-development-austin/page.tsx
   export const metadata = {
     title: 'Web Development Services in Austin, TX | John Doe',
     description: 'Professional web development services for Austin businesses. 
                  Custom React & Next.js development serving Austin, Round Rock, 
                  and Cedar Park.',
   }
   
   export default function AustinServicesPage() {
     return (
       <div>
         <h1>Web Development Services in Austin, TX</h1>
         <p>Serving Austin, Round Rock, Cedar Park, and surrounding areas...</p>
         
         <section>
           <h2>Why Choose a Local Austin Developer?</h2>
           <ul>
             <li>In-person meetings available</li>
             <li>Understanding of local market</li>
             <li>Quick response times</li>
             <li>Supporting local business</li>
           </ul>
         </section>
         
         <section>
           <h2>Austin Web Development Services</h2>
           {/* Service listings */}
         </section>
       </div>
     )
   }
   ```

3. **Local Schema for Multiple Locations:**
   ```typescript
   // If you serve multiple cities
   export const multiLocationSchema = {
     '@context': 'https://schema.org',
     '@graph': [
       {
         '@type': 'ProfessionalService',
         name: 'John Doe Web Development - Austin',
         address: {
           '@type': 'PostalAddress',
           addressLocality: 'Austin',
           addressRegion: 'TX',
         },
       },
       {
         '@type': 'ProfessionalService',
         name: 'John Doe Web Development - Remote',
         areaServed: {
           '@type': 'Country',
           name: 'United States',
         },
       },
     ],
   }
   ```

---

## 6. Portfolio-Specific SEO

### Optimizing for "[Name] Developer Portfolio"

**Personal Brand SEO Strategy:**

```markdown
## Primary Target Keywords
1. [firstname] [lastname] developer
2. [firstname] [lastname] portfolio
3. [firstname] [lastname] designer
4. [github username] portfolio
5. [firstname] dev portfolio

## Implementation Strategy

### 1. Domain Name
✅ Good: johndoe.dev, johndoe.dev, johndoe.me
✅ Good: johndoe-portfolio.com
❌ Avoid: johndoe123.github.io

### 2. Homepage H1
"Hi, I'm John Doe - Full Stack Developer & Designer"

### 3. Title Tag Pattern
"John Doe | Full Stack Developer & Designer Portfolio"

### 4. Meta Description
"John Doe is a full-stack developer and UI/UX designer with 5+ years 
of experience. View portfolio projects, case studies, and skills."

### 5. Content Optimization
- Include full name in first 100 words
- Use name in H2 headings naturally
- Add name to image alt text
- Create "About [Name]" section
```

**Example Implementation:**

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>
          Hi, I'm <span className="text-blue-600">John Doe</span><br />
          Full Stack Developer & Designer
        </h1>
        <p>
          I'm John Doe, a passionate developer with 5+ years of experience 
          building scalable web applications. Specializing in React, Next.js, 
          and TypeScript, I create fast, accessible, and beautiful digital experiences.
        </p>
      </section>

      <section className="about">
        <h2>About John Doe</h2>
        <p>
          John Doe is a full-stack developer based in Austin, Texas...
        </p>
      </section>

      <section className="projects">
        <h2>John Doe's Portfolio Projects</h2>
        {/* Projects */}
      </section>
    </main>
  )
}
```

### Project Case Study SEO

**Case Study Page Template:**

```tsx
// app/projects/[slug]/page.tsx
interface Project {
  title: string
  slug: string
  summary: string
  description: string
  technologies: string[]
  client: string
  industry: string
  duration: string
  team: string[]
  challenge: string
  solution: string
  results: string[]
  liveUrl?: string
  githubUrl?: string
  images: string[]
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const project = await getProject(params.slug)
  
  return {
    title: `${project.title} - ${project.industry} Case Study | John Doe`,
    description: `How I built ${project.title} using ${project.technologies.join(', ')}. 
                  ${project.summary} See the full case study with code samples.`,
    keywords: [
      ...project.technologies,
      `${project.industry} development`,
      'case study',
      'web development',
      'portfolio project',
      project.client,
    ],
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      publishedTime: project.date,
      authors: ['John Doe'],
      tags: project.technologies,
    },
  }
}

export default async function CaseStudyPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const project = await getProject(params.slug)
  
  return (
    <article className="max-w-4xl mx-auto py-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex gap-2 text-sm text-gray-600">
          <li><a href="/">Home</a></li>
          <li>/</li>
          <li><a href="/projects">Projects</a></li>
          <li>/</li>
          <li className="text-gray-900">{project.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{project.summary}</p>
        
        {/* Meta info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500">
          <span>Client: {project.client}</span>
          <span>Industry: {project.industry}</span>
          <span>Duration: {project.duration}</span>
        </div>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Challenge */}
      <section className="mb-12" id="challenge">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
      </section>

      {/* Solution */}
      <section className="mb-12" id="solution">
        <h2 className="text-2xl font-bold mb-4">Solution & Implementation</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{project.solution}</p>
        
        {/* Architecture diagram */}
        <figure className="mb-6">
          <Image
            src={project.architectureImage}
            alt={`${project.title} system architecture diagram showing ${project.technologies.join(', ')} components`}
            width={1200}
            height={600}
            className="rounded-lg"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            System architecture for {project.title}
          </figcaption>
        </figure>
        
        {/* Code snippet */}
        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm">
            <code>{project.codeSnippet}</code>
          </pre>
        </div>
      </section>

      {/* Results */}
      <section className="mb-12" id="results">
        <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
        <ul className="space-y-3">
          {project.results.map((result, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{result}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Want similar results?</h3>
        <p className="text-gray-600 mb-6">
          Let's discuss how I can help with your next project.
        </p>
        <a 
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start a Project
        </a>
      </section>
    </article>
  )
}
```

### Skills and Technologies Markup

**Skills Section with Structured Data:**

```tsx
// components/SkillsSection.tsx
import Script from 'next/script'

const skillsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'DefinedTerm',
        name: 'React',
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'Web Development Technologies',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'DefinedTerm',
        name: 'Next.js',
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'Web Development Technologies',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'DefinedTerm',
        name: 'TypeScript',
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'Web Development Technologies',
        },
      },
    },
  ],
}

export default function SkillsSection() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'GraphQL', level: 78 },
        { name: 'AWS', level: 75 },
      ],
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <Script
        id="skills-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
      />
      
      <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Technology badges for SEO */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {skillCategories.flatMap(c => c.skills).map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
            itemScope
            itemType="https://schema.org/DefinedTerm"
          >
            <span itemProp="name">{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
```

### Testimonials/Reviews Schema

**Testimonials with Structured Data:**

```tsx
// components/TestimonialsSection.tsx
import Script from 'next/script'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  image: string
  rating: number
  project: string
}

export default function TestimonialsSection({ 
  testimonials 
}: { 
  testimonials: Testimonial[] 
}) {
  // Aggregate rating schema
  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Person',
      name: 'John Doe',
      url: 'https://yourportfolio.com',
    },
    ratingValue: (
      testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
    ).toFixed(1),
    bestRating: 5,
    worstRating: 1,
    reviewCount: testimonials.length,
  }

  // Individual reviews schema
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@graph': testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      '@id': `https://yourportfolio.com/#review-${index}`,
      author: {
        '@type': 'Person',
        name: testimonial.name,
        jobTitle: testimonial.role,
        worksFor: {
          '@type': 'Organization',
          name: testimonial.company,
        },
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: 5,
      },
      reviewBody: testimonial.content,
      itemReviewed: {
        '@type': 'CreativeWork',
        name: testimonial.project,
        author: {
          '@type': 'Person',
          name: 'John Doe',
        },
      },
      datePublished: new Date().toISOString(),
    })),
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema),
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600">
            Rated{' '}
            <span className="font-bold text-blue-600">
              {aggregateRatingSchema.ratingValue}/5
            </span>{' '}
            based on {testimonials.length} reviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <meta itemProp="reviewRating" content={String(testimonial.rating)} />
              </div>
              
              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-gray-700 italic" itemProp="reviewBody">
                  "{testimonial.content}"
                </p>
              </blockquote>
              
              {/* Author */}
              <footer className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                  itemProp="image"
                />
                <div>
                  <div className="font-semibold" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{testimonial.name}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                  <meta itemProp="itemReviewed" content={testimonial.project} />
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Complete Implementation Checklist

### Pre-Launch Checklist

**Technical SEO:**
- [ ] Set up `metadataBase` in root layout
- [ ] Configure title template pattern
- [ ] Add meta descriptions to all pages
- [ ] Implement canonical URLs
- [ ] Add Open Graph tags (1200x630px images)
- [ ] Configure Twitter Cards
- [ ] Create sitemap.ts
- [ ] Create robots.ts
- [ ] Add favicon and app icons
- [ ] Implement JSON-LD structured data (Person schema)
- [ ] Add project and blog post schemas
- [ ] Set up Google Search Console
- [ ] Verify domain ownership
- [ ] Submit sitemap

**Content:**
- [ ] Write keyword-optimized homepage content
- [ ] Create unique descriptions for each project
- [ ] Add alt text to all images
- [ ] Write at least 3-5 blog posts
- [ ] Include location keywords (if applicable)
- [ ] Add social proof (testimonials, case studies)

**Performance:**
- [ ] Optimize LCP (hero image, fonts)
- [ ] Fix CLS issues (reserve space for dynamic content)
- [ ] Optimize INP (debounce inputs, break long tasks)
- [ ] Enable image optimization (WebP/AVIF)
- [ ] Lazy load below-fold images
- [ ] Use Next.js Image component everywhere
- [ ] Minimize third-party scripts
- [ ] Test Core Web Vitals (target: LCP < 2.5s, CLS < 0.1, INP < 200ms)

**Social Media:**
- [ ] Create OG images (1200x630px)
- [ ] Create Twitter card images (1200x600px)
- [ ] Add social share buttons to projects
- [ ] Test all social previews
- [ ] Set up Google Business Profile (if local)

**Monitoring:**
- [ ] Install Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Configure Core Web Vitals monitoring
- [ ] Add error tracking (Sentry, etc.)
- [ ] Set up uptime monitoring

### Post-Launch Optimization

**Monthly Tasks:**
- [ ] Review Google Search Console for issues
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Update content with fresh keywords
- [ ] Add new projects to sitemap
- [ ] Monitor keyword rankings
- [ ] Collect and respond to reviews

**Quarterly Tasks:**
- [ ] Audit for broken links
- [ ] Review and update old blog posts
- [ ] Analyze competitor keywords
- [ ] Refresh OG images
- [ ] Update structured data if needed
- [ ] Review and optimize low-performing pages

---

## Quick Reference: Essential Meta Tags

```html
<!-- Required -->
<title>John Doe | Full Stack Developer & Designer</title>
<meta name="description" content="...">
<link rel="canonical" href="https://yourportfolio.com/page">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://yourportfolio.com/og.jpg">
<meta property="og:url" content="https://yourportfolio.com/page">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@johndoe">
<meta name="twitter:creator" content="@johndoe">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://yourportfolio.com/twitter.jpg">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "John Doe",
  "url": "https://yourportfolio.com",
  "image": "...",
  "jobTitle": "Full Stack Developer",
  "sameAs": [...]
}
</script>
```

---

## Tools for SEO Optimization

**Essential Tools:**
- [Google Search Console](https://search.google.com/search-console) - Monitor indexing, keywords, and issues
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Test Core Web Vitals
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Validate structured data
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Check mobile usability
- [Schema Markup Validator](https://validator.schema.org/) - Validate JSON-LD

**Additional Tools:**
- [Ahrefs](https://ahrefs.com/) or [SEMrush](https://www.semrush.com/) - Keyword research
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - Technical SEO audit
- [GTmetrix](https://gtmetrix.com/) - Performance testing
- [Lighthouse](https://developer.chrome.com/docs/lighthouse) - Built into Chrome DevTools
- [Social Share Preview](https://socialsharepreview.com/) - Test social previews
- [Open Graph Checker](https://www.opengraph.xyz/) - Validate OG tags

---

This comprehensive guide covers everything you need for a search-engine-optimized developer or designer portfolio. Focus on creating high-quality, keyword-rich content while maintaining excellent technical performance. Remember that SEO is a long-term strategy—consistency and quality content will yield the best results over time.
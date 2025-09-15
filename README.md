# Dismas Muriuki - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme with teal accents, showcasing projects, blog posts, and contact information for Dismas Muriuki - Backend Developer & Database Enthusiast.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Theme**: Elegant dark theme with teal/emerald accent colors
- **Blog System**: MDX support for writing technical blog posts
- **Project Showcase**: Dynamic project pages with detailed information
- **Contact Form**: Functional contact form with email integration
- **Accessibility**: Semantic HTML, keyboard navigation, reduced motion support
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📁 Project Structure

```
dismas-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── projects/       # Projects listing and detail pages
│   │   ├── blog/           # Blog listing and post pages
│   │   ├── contact/        # Contact page with form
│   │   └── api/contact/    # Contact form API endpoint
│   ├── components/         # Reusable React components
│   ├── lib/               # Utility functions and data
│   └── types/             # TypeScript type definitions
├── content/blog/          # MDX blog posts
├── public/               # Static assets
└── package.json
```

## 🛠 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- SMTP credentials for contact form

### Local Development

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd dismas-portfolio
npm install
```

2. **Set up environment variables:**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Contact Form Configuration
CONTACT_EMAIL=muriukidismas9@gmail.com

# SMTP Configuration (required for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Development Settings
NODE_ENV=development
```

3. **Replace placeholder files:**
   - Replace `/public/resume.pdf` with your actual resume
   - Add a proper favicon to `/public/favicon.ico`

4. **Start development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to view the site.

## 🚀 Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/dismas-portfolio)

### Manual Deployment

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy to Vercel:**
```bash
vercel --prod
```

3. **Configure Environment Variables in Vercel:**

Go to your Vercel dashboard → Project Settings → Environment Variables and add:

| Variable | Value | Description |
|----------|-------|-------------|
| `CONTACT_EMAIL` | `muriukidismas9@gmail.com` | Email to receive contact form submissions |
| `SMTP_HOST` | `smtp.gmail.com` | SMTP server hostname |
| `SMTP_PORT` | `587` | SMTP server port |
| `SMTP_USER` | `your-email@gmail.com` | SMTP authentication username |
| `SMTP_PASS` | `your-app-password` | SMTP authentication password |
| `NODE_ENV` | `production` | Environment setting |

4. **Configure Custom Domain:**
   - Go to Vercel Dashboard → Project → Settings → Domains
   - Add `dismas.dev` as custom domain
   - Update DNS records as instructed by Vercel

### SMTP Setup Options

#### Option 1: Gmail (Recommended for development)
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: Google Account → Security → App passwords
3. Use the app password as `SMTP_PASS`

#### Option 2: SendGrid (Recommended for production)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Update the contact API to use SendGrid (code included but commented)

## 📧 Contact Form Configuration

The contact form uses nodemailer with SMTP. For production, consider:

- **Rate limiting**: Basic in-memory rate limiting is included
- **Validation**: Server-side validation for all form fields  
- **Security**: CSRF protection and input sanitization
- **Monitoring**: Add logging for form submissions

### Alternative: SendGrid Integration

To use SendGrid instead of SMTP, uncomment the SendGrid code in `/src/app/api/contact/route.ts` and add:

```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: {
    // Teal/emerald color palette
    500: '#14b8a6',
    600: '#0d9488',
    // ... other shades
  }
}
```

### Content Updates
- **Projects**: Edit `/src/lib/projects.ts`
- **Skills**: Update `/src/components/SkillsGrid.tsx`
- **Personal Info**: Update throughout components and pages
- **Blog Posts**: Add MDX files to `/content/blog/`

### Adding Blog Posts
Create new `.mdx` files in `/content/blog/`:
```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-15"
readTime: "5 min read"
---

# Your content here...
```

## 📱 Performance & SEO

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for performance
- **SEO**: Meta tags, Open Graph, structured data
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: Responsive design with touch-friendly interactions

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 📋 Deployment Checklist

Before deploying to production:

- [ ] Replace `/public/resume.pdf` with actual resume
- [ ] Configure SMTP credentials in Vercel environment variables
- [ ] Set up custom domain `dismas.dev` in Vercel
- [ ] Test contact form functionality
- [ ] Update meta tags and Open Graph images
- [ ] Add Google Analytics (optional)
- [ ] Set up monitoring and error tracking
- [ ] Configure proper favicon and app icons

## 🔒 Security Considerations

- Environment variables are properly configured
- Contact form includes rate limiting and validation
- No sensitive data exposed in client-side code
- HTTPS enforced in production
- Input sanitization for user-generated content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Support

For support or questions about this portfolio:
- Email: muriukidismas9@gmail.com
- GitHub: [@danny-dis](https://github.com/danny-dis)

---

Built with ❤️ by Dismas Muriuki using Next.js, TypeScript, and Tailwind CSS.

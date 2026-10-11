# Dismas Muriuki — Portfolio

Personal portfolio for Dismas Muriuki Mutabari: software, frontend and design-to-code work from Kenya.

- Website: https://dismas-portfolio.vercel.app
- GitHub: https://github.com/danny-dis
- Contact: muriukidismas9@gmail.com

## Stack and setup

Next.js 14 App Router, React, TypeScript and Tailwind CSS. Use Node.js 22 and the committed npm lockfile.

```sh
npm ci
npm run resume
npm test
npm run typecheck
npm run lint
npm run build
npm run dev
```

Development runs at http://localhost:3000. `npm run start` serves a completed production build.

## Maintain the content

- `src/lib/projects.ts`: project descriptions, technologies, source links, provenance and features. Featured projects are DMR-X, MOTE, Chimera and Drift.
- `content/resume.json`: canonical CV content, kept in this repository rather than an unrelated parent directory.
- `scripts/generate-resume.js`: generates the one-page, text-readable `public/resume.pdf` using PDFKit. It fails if the content spills onto a second page.
- `docs/CV.md`: editable Markdown export of the current CV.
- `content/blog/*.mdx`: source-controlled blog posts. **Only posts with `published: true` are listed or served.** Unverified legacy model-news posts are retained as drafts for review; do not publish them without checking their sources.
- `docs/PORTFOLIO-EVIDENCE.md`: source-review notes and content boundaries.

Education is stated as **BSc Computer Science candidate, Murang'a University of Technology, expected graduation 2027**. Do not silently change it to a completed degree.

The portfolio distinguishes independent engineering projects, maintained derivatives, fork-based adaptations and architecture specifications. Repository existence alone does not establish production readiness, users, revenue or measured performance.

## Contact form

The form has a Next.js API route. Configure the environment variables in `.env.local.example` through your deployment environment. Never commit provider or SMTP credentials.

SMTP delivery requires separately verified configuration and an end-to-end test. A page returning HTTP 200 does not prove email delivery. Visitors can also use the direct email link.

## Deployment

This checkout is linked locally to the existing Vercel project. GitHub integration can create preview and production deployments. Check the exact commit's Vercel status and deployed content before calling an update live; a successful Git push is not a successful deployment.

Public metadata, robots and sitemap use the confirmed `dismas-portfolio.vercel.app` origin, not an assumed custom domain.

## Checks

The Node test suite covers current project selection, factual positioning, education, CV source, draft publication boundaries, shared project feature data, metadata origin and manifest/lock agreement. Type checking and production builds are separate checks. Browser/mobile and PDF text/layout checks are also required before publishing significant content changes.

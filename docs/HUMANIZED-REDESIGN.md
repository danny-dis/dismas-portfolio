# Humanized portfolio redesign

## What changed

The homepage leads with Dismas's actual AI tools and interfaces. A project index sits beside the introduction, followed by four featured projects with architecture sketches. The illustrations describe the code's responsibilities; they are not fabricated product screenshots or live telemetry.

Project details explain the problem, the architectural decision and the implementation boundary. Repository URLs, attribution, educational status and the distinction between independent builds, derivatives and specifications are preserved. No customer stories, benchmarks or work history were invented.

The About, Contact and Notes pages, shared footer and published architecture note were rewritten with `blader-humanizer`. The rewrite removes vague design slogans, inflated network claims, drafting commentary and repeated closers. The note's redundant body title was removed so the rendered article has one h1.

The static introduction replaces the client-side role ticker. The homepage no longer displays self-rated skill meters. The header includes active-route indication, a skip link, explicit mobile-menu state and Escape-to-close focus restoration. Contact delivery code is unchanged; status/error announcements and a warning against sending sensitive information were added.

## Verification

- Five new regression tests failed against the previous implementation. After the redesign, all thirteen tests passed, including server-rendered hero, project-card/detail and navigation checks.
- Local TypeScript checking and lint completed successfully. A post-format regression run also passed.
- Real Chrome rendering checked the homepage at 320, 768, 1024 and 1440px. About, Work, MOTE detail, Notes, the architecture article and Contact were each checked at 320 and 1440px: sixteen responsive route cases, no horizontal overflow and one h1 per page.
- axe-core WCAG 2 A/AA and WCAG 2.1 AA checks passed in those sixteen cases. Initial failures exposed project-link distinction and contact-button contrast; permanent underlines and the shared high-contrast button style corrected them.
- The mobile menu opens through real mouse input. Escape closes it and restores focus. Keyboard activation of the skip link focuses main content. Reduced-motion media disables smooth scrolling. No browser console errors were recorded.
- Desktop/mobile screenshots and the social card were visually reviewed. The new Open Graph image is a real 1200x630 PNG.
- The browser checks use the existing local Next 14.0.4 development installation. They establish visual/runtime behavior, not validation of the patched dependency graph. The exact-lock Node 22 / Next 14.2.35 production build is verified separately through GitHub Actions.
- The exact-lock GitHub Actions build of the main redesign revision passed dependency install, thirteen tests, CV generation, typecheck, lint and production build.
- Vercel still reported failure for that revision. No valid Vercel CLI credential was present to inspect private build logs. Independently, the legacy pnpm lockfile was found to disagree with the manifest on Next.js, @next/mdx and eslint-config-next; an isolated offline frozen-lockfile install reproduced `ERR_PNPM_OUTDATED_LOCKFILE`. `vercel.json` explicitly selects `npm ci` and `npm run build`, matching the successful CI dependency graph. A regression test guards that choice. The pnpm lockfile is preserved; npm is the supported deployment path.
- Final code revision `2a0678a` passed all fourteen local regression tests, and its clean GitHub Actions install/test/CV/typecheck/lint/build steps passed. Vercel reported **Deployment has completed** after the explicit npm deployment configuration landed. These are independently checked statuses, not an assumption based on a successful push.
- GitNexus upstream impact checks were attempted. No usable portfolio index was registered; change detection likewise failed. A manual source-reference and Git diff review covered the edited public routes and shared components. Graph analysis is a limitation, not a passed check.

No contact message was sent during testing. Passing automated accessibility rules is not a claim of a complete manual assistive-technology audit. The CV and unpublished legacy articles are preserved. GitHub CI and Vercel deployment are separate acceptance checks; a source update is not evidence that production changed.

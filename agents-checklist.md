# Agent checklist

## Ishtar: humanized portfolio redesign

- [x] Checked in on existing clean `feat/portfolio-cv-refresh`; preserving the first refresh and CV.
- [x] Run upstream impact checks and record limitations before component edits: timed out; later GitNexus reported no registered portfolio index. Manual source-reference and diff review completed; graph risk is unknown, not a passed check.
- [x] Replace generic copy with direct first-person writing using blader-humanizer, including the published architecture note. Existing factual claims, project links, attribution and education retained.
- [x] Build an editorial dark/teal layout, project architecture illustrations and specific project narratives. Static hero replaces the client-side ticker; skill meters and repeated slogan sections removed.
- [x] Thirteen regression tests pass; local typecheck and lint pass. New tests failed before the redesign, then passed. Post-format regression run also passed.
- [x] Initial browser pass found under-distinguished links on desktop project details; fixed permanent link underlines. Final responsive/axe verification in progress.
- [ ] Verify regression tests, keyboard/mobile behavior, accessibility, lint, typecheck and exact-lock production build.
- [ ] Update existing PR and read back exact source revision; distinguish CI from Vercel deployment.

Design contract: introduce Dismas and his actual work immediately; make selected projects the main content; keep source/CV/contact one click away. Dark ink, teal accents, restrained borders, asymmetric type and diagrams derived from project architecture. No fabricated dashboards, numbers, client outcomes, automatic role ticker, skill meters or repeated slogan sections. Responsive at 320/768/1024/1440px, semantic headings, visible focus, reduced-motion support, accessible mobile navigation. Contact API and existing unpublished blog drafts remain untouched.

## Ishtar — portfolio and CV refresh

- [x] Checked in on `feat/portfolio-cv-refresh` from current `origin/main`; original working tree clean.
- [x] Recovered user education correction: expected graduation 2027.
- [x] Verified public project descriptions and source links; evidence in `docs/PORTFOLIO-EVIDENCE.md`.
- [x] Updated portfolio copy/project data without invented employment, benchmarks or customer claims.
- [x] Rebuilt one-page, text-readable PDF and editable Markdown CV from `content/resume.json`.
- [x] Corrected dependency lock and updated Next.js to 14.2.35 with Node 22 configured.
- [x] Eight regression tests, CV generation, typecheck, lint and production build passed in GitHub Actions run 38146391612; all 19 static pages emitted.
- [x] Locally rendered desktop/mobile homepage and featured cards; no horizontal overflow at 390px; mobile menu works.
- [x] PDF rasterized/layout checked; seven clickable links; exact remote PDF hash matches delivered file.
- [x] Ran GitNexus change analysis: failed because no usable portfolio index. Complete file/symbol diff reviewed manually; contact API unchanged. This is a limitation, not a passed graph analysis.
- [x] Published and read back source/PDF in PR https://github.com/danny-dis/dismas-portfolio/pull/1.
- [ ] Resolve Vercel preview failure using private build logs, then merge/deploy and read back production site/PDF.
- [x] Checked out pending user authorization. Existing live site left unchanged.

## Execution limitations and publication blocker

- Local clean `npm ci` failed with registry EIDLETIMEOUT and Windows cleanup EPERM; Linux exact-lock CI install succeeded.
- Old installed Next 14.0.4 local production build timed out in page-data workers. It is not used to establish patched production build success; the locked Next 14.2.35 CI build is verified separately.
- Local old-dependency dev rendering is only a visual check, not a security/build validation.
- Vercel preview failed independently of green GitHub CI. No valid Vercel CLI credential was present; official CLI device login requested from user to access private deployment logs. Do not merge blindly or claim the website is updated live.

Scope: this repository and CV delivery only. No unrelated repository edits, contact submissions, secret publication or destructive cleanup.

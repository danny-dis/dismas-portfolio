# Agent checklist

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

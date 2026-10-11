# Agent checklist

## Ishtar — portfolio and CV refresh

- [x] Checked in; working on `feat/portfolio-cv-refresh` from current `origin/main`.
- [x] Confirmed original working tree was clean and fast-forwarded only.
- [x] Recovered education correction: expected graduation 2027.
- [ ] Verify public project descriptions and links against source.
- [ ] Update portfolio copy and project data without inventing client experience.
- [ ] Rebuild a readable, reproducible PDF CV from repository-owned source.
- [ ] Fix the dependency installation mismatch and verify clean installation/build.
- [ ] Run regression, browser/mobile, and PDF checks.
- [ ] Run change-impact review before committing.
- [ ] Publish and read back exact remote targets; distinguish source publication from live deployment.

Scope: this repository and its public resume only. No unrelated repository edits or secret publication.

## Verification so far

- Eight content regression checks passed.
- Standalone TypeScript check passed under Node 22.
- One-page PDF generated and text/layout checked, with seven clickable links.
- Correct npm lock generated; exact-lock clean install still in progress.
- GitNexus `detect_changes` failed: portfolio is not indexed after worker-startup failures. Full file/symbol diff reviewed; no contact API changes.
- Old-dependency local build compiled, but static worker timed out; clean locked build and remote CI still required.
- Production deployment is not yet verified.

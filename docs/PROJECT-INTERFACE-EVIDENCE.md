# Project interface evidence

## Drift

The portfolio shows a genuine screenshot of Drift's research screen with an empty question composer. It is a local interface preview, not evidence of a successful research session or model call. Setup reads “AI not checked”; saved findings are collapsed. The crop excludes saved session records and contains no visible credentials, personal notes or identities.

- Asset: `public/projects/drift-research-empty-composer.png`
- Dimensions: 1440 × 837
- SHA256: `93fa3e92fb8ca8261b3ac1a18e0b74435fcd995bac21ec207fae9b7371079db8`
- Captured: 2026-10-21, from an already-running local Drift service, in an isolated browser.
- Reference source: https://github.com/danny-dis/Drift, `frontend/src/DriftApp.tsx`.
- Reference checkout: `87a98e6b5dcc45c7847d4b285408c80baf029314`. The runtime's exact build revision was not established; this is not a verified screenshot-build identity.

The image was reviewed before publication. No research session was started, provider configured, private disclosure opened or model called for this capture.

## Visuals not published

DMR-X's available historical captures showed loading screens rather than usable interfaces. Chimera had no verified interface capture available. The voting application's legacy screenshot contained an authorization-bearing address bar and represented an older implementation, so it was excluded. Architecture diagrams remain available on project detail pages. These projects have no newly claimed live demonstration or benchmark.

## Rendering reference

The preview uses the existing Next.js14 Image component with explicit intrinsic dimensions, alt text and a responsive size hint: https://nextjs.org/docs/14/app/building-your-application/optimizing/images.

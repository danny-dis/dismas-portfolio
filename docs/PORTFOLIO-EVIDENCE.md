# Portfolio evidence and content boundaries

Reviewed for the October 2026 portfolio/CV refresh. Descriptions are based on public repository documentation and selected implementation files; this is not an execution audit of every project.

## Featured independent work

- **DMR-X:** https://github.com/danny-dis/dmr-X
  - Provider interface: `apps/ui/src/pages/Providers.tsx`.
  - Gateway, routing, adapter and runtime boundaries are documented in the repository README and canonical architecture documents.
  - No adapter-count, benchmark, revenue, customer or production-readiness claims are made in the refreshed CV.
- **MOTE:** https://github.com/danny-dis/MOTE (default branch `production-ready`).
  - Capability code: `src/capability.rs`; bridge CLI: `src/bin/mote-bridge.rs`.
  - The README distinguishes execution from application-owned approvals, scheduling and storage. Capability grants are not an OS sandbox.
- **Chimera:** https://github.com/danny-dis/chimera
  - Coordinators: `packages/chimera-core/src/coordinator/solo-executor.ts`, `duo-executor.ts`, `trio-executor.ts`.
  - The package tree includes context, session, isolation, terminal, VS Code and workflow packages.
  - Feature descriptions do not imply a marketplace release or a hosted service.
- **Drift:** https://github.com/danny-dis/Drift
  - `drift/ui_api.py` defines idea/project/task interfaces; `drift/organism.py` manages local idea/project state and notes.
  - The README distinguishes retained research/citation checks from independent factual verification and implementation of proposed code changes.

## Other public work and attribution

- **G.L.U.E.:** https://github.com/danny-dis/G.L.U.E — its README explicitly identifies an architecture/specification project. Federation design is not presented as a running production platform.
- **Letty:** https://github.com/danny-dis/letty — maintained derivative of Mario Zechner's Pi agent, with upstream attribution. Not presented as original authorship of the whole system.
- **Decentralized Voting:** https://github.com/danny-dis/Decentralized-Voting-System — fork of Krish-Depani's project; user confirms a solo extension.
  - Public source uses Solidity, HTML/JavaScript, FastAPI, MySQL and Truffle, plus browser-local demonstrations.
  - October 12 local review: `Documents/projects/Decentralized-Voting-System` contains a subsequent July 2026 Next.js/Hono/PostgreSQL/Foundry rebuild with seven commits ahead of the original-upstream tracking ref, plus uncommitted OTP/session work. Local origin points to Krish-Depani's original repo, not the user's fork; GitHub does not expose this later source.
  - Implementation evidence: `contracts-foundry/src/Voting.sol` (Merkle proofs/nullifiers/roles/certification), `app/packages/server/src/indexer/index.ts`, `app/packages/server/src/sse/index.ts`, `app/packages/server/src/auth/rbac.ts`, and contract/server test suites.
  - No full runtime/deployment verification performed for the rebuild. Ballot proof/commitment integration is unfinished; OTP delivery and cloud KMS providers remain TODOs. CV separates later local development and does not claim production readiness, national-election suitability or ballot secrecy.

## Personal facts

- Professional name: Dismas Muriuki Mutabari; exclude the user's Git author alias from CV and document metadata.
- Industrial attachment: Centrino Technologies Limited, Nairobi, June–August 2024. User reports video-based MySQL training, knowledge-check assessments and staff guidance; no responsibility for live banking systems claimed.
- University final project: Decentralized Voting System, solo extension of an open-source fork; subsequent local redevelopment is separate from the university submission. Happy Teens Movie App was the first university project.
- Nkubu High School: 2016–April 2021; KCSE B (plain), user-reported. Primary-school marks omitted from technical CV.
- Email and GitHub are taken from the user's existing portfolio and CV.
- Kenya, EAT / UTC+3.
- BSc Computer Science candidate at Murang'a University of Technology; expected graduation 2027, based on the user's reported delay. Do not claim completed coursework or graduation without confirmation.
- Independent project experience is separate from formal employment or paid client engagements. No invented employer history, testimonials, years-of-experience figure or design-client work.

## Publication safety

Five earlier model-news articles contain unsupported release, benchmark or ranking claims. Their text is preserved and their frontmatter sets `published: false`. The blog loader requires explicit publication and returns no post for an unpublished slug.

The public note `ai-system-boundaries.mdx` links the reviewed code and states the limits of its claims.

## Tooling limitation

GitNexus indexing failed during native worker startup under Node 26, 24 and an isolated Node 22 runtime. Upstream impact commands were attempted before component/function edits but timed out. Source-reference review identified the home-page component dependencies, shared footer/layout, project-list/detail consumers and blog-list/detail consumers. This is a limited fallback, not a successful GitNexus graph analysis.

The update is constrained to this portfolio, its CV/content, dependency/install repair and CI checks. The contact API and other project implementations are unchanged. A change-detection attempt plus explicit Git diff review is required before committing; record actual results in the agent checklist.

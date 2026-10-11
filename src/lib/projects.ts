import { Project } from '@/types'

// Public, source-reviewable work. Counts and release claims are deliberately omitted.
export const projects: Project[] = [
  {
    id: 'dmr-x',
    title: 'DMR-X — AI Gateway & Adaptive Routing',
    description: 'Local-first AI infrastructure that connects applications to model providers through a shared gateway and routing policies.',
    longDescription: 'DMR-X separates model routing from application orchestration. Its TypeScript gateway, React management interface and provider integrations bring model discovery, routing constraints, fallbacks and usage controls into one codebase. The project explores cost, latency, reliability and privacy trade-offs without requiring callers to adopt a particular agent framework.',
    technologies: ['TypeScript', 'Bun', 'React', 'Vite', 'MCP', 'SQLite'],
    githubUrl: 'https://github.com/danny-dis/dmr-X',
    featured: true,
    features: ['Provider and model management through a React interface', 'Configurable model routing, free-tier selection and fallback paths', 'Gateway integration for external AI applications and coding clients', 'MCP tooling and a separate optional agent-runtime layer'],
    sourceUrl: 'https://github.com/danny-dis/dmr-X/tree/main/apps',
    provenance: 'Independent project · active development',
  },
  {
    id: 'mote',
    title: 'MOTE — Minimal Agent Execution Engine',
    description: 'A small Rust library and CLI for bounded model-and-tool execution, with Python and TypeScript bridge SDKs.',
    longDescription: 'MOTE implements a model → capability check → tool execution → observation loop. YAML configuration controls grants, model fallback and execution limits. A separate bridge lets Python and TypeScript applications supply their own tools. The application remains responsible for its interface, approvals, scheduling and storage; capability checks are not an operating-system sandbox.',
    technologies: ['Rust', 'Python', 'TypeScript', 'YAML', 'JSONL'],
    githubUrl: 'https://github.com/danny-dis/MOTE',
    liveUrl: 'https://mote-runtime.vercel.app',
    featured: true,
    features: ['Opt-in capability grants and bounded execution', 'Rust library, command-line runtime and separate bridge process', 'Application-owned tools through Python and TypeScript SDKs', 'Public binary releases with checksums and integration-test infrastructure'],
    sourceUrl: 'https://github.com/danny-dis/MOTE/tree/production-ready/src',
    provenance: 'Independent project · library and CLI',
  },
  {
    id: 'chimera',
    title: 'Chimera — Multi-Agent Coding Workspace',
    description: 'A TypeScript coding-agent workspace that coordinates model providers, tool execution and terminal workflows.',
    longDescription: 'Chimera brings coding-agent execution, provider integration and developer-facing interfaces into a modular TypeScript workspace. Its coordinator includes solo, duo and trio execution paths, context handling and tool loops. Separate packages cover sessions, Git worktree isolation, declarative workflows and VS Code integration. Its focus is developer-controlled coding workflows across terminal and editor interfaces.',
    technologies: ['TypeScript', 'Node.js', 'React', 'Git Worktrees', 'VS Code API', 'Vitest'],
    githubUrl: 'https://github.com/danny-dis/chimera',
    featured: true,
    features: ['Solo, duo and trio coordinator implementations', 'Provider adapters and model/tool execution loops', 'Context handling and persisted coding sessions', 'Worktree isolation and terminal/IDE integration packages'],
    sourceUrl: 'https://github.com/danny-dis/chimera/tree/main/packages',
    provenance: 'Independent project · active development',
  },
  {
    id: 'drift',
    title: 'Drift — Local-First Thinking Workspace',
    description: 'A Python and React workspace for capturing ideas, connecting repositories and reviewing source-backed research.',
    longDescription: 'Drift pairs a local Python backend with a React dashboard for ideas, project context, research reports and task review. It retains local state across restarts and connects to a separately configured model gateway. Explicit approval boundaries and bounded calls keep research and proposals distinct from actual source-code changes. Drift is a thinking workspace, not an autonomous coding factory.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'SQLite'],
    githubUrl: 'https://github.com/danny-dis/Drift',
    featured: true,
    features: ['Idea capture, repository registration and managed project notes', 'Research reports with retained sources and citation review', 'Queued and blocked tasks with explicit approval', 'Local persistence and model-call/resource budgets'],
    sourceUrl: 'https://github.com/danny-dis/Drift/blob/main/drift/ui_api.py',
    provenance: 'Independent project · local-first application',
  },
  {
    id: 'glue',
    title: 'G.L.U.E. — Agent Interoperability Architecture',
    description: 'An architecture and specification project for connecting heterogeneous agents without replacing their native runtimes.',
    longDescription: 'G.L.U.E. documents an interoperability fabric covering agent identity, discovery, capability registration, protocol adapters, trust and provenance. The repository explicitly identifies itself as an architecture/specification project. The specifications set implementation direction for federation and capability routing.',
    technologies: ['System Architecture', 'MCP', 'A2A', 'Protocol Design'],
    githubUrl: 'https://github.com/danny-dis/G.L.U.E',
    featured: false,
    features: ['Federation and interoperability specifications', 'Capability-first routing and agent identity contracts', 'Least-privilege admission and provenance design', 'Clear boundaries between federation, governance and memory'],
    sourceUrl: 'https://github.com/danny-dis/G.L.U.E/tree/master/docs',
    provenance: 'Architecture / specification · not a deployed platform',
  },
  {
    id: 'letty',
    title: 'Letty — Maintained Coding-Agent Derivative',
    description: 'A maintained derivative of Mario Zechner’s Pi agent, with terminal tools, provider integrations and resumable sessions.',
    longDescription: 'Letty is a maintained derivative based on the Pi agent project, with the original MIT attribution retained. Its TypeScript workspace covers a coding CLI, agent loop, provider abstraction, terminal UI, sessions and extension interfaces. The work builds on Pi, with upstream authorship and licensing credited.',
    technologies: ['TypeScript', 'Node.js', 'Terminal UI', 'SQLite', 'RPC'],
    githubUrl: 'https://github.com/danny-dis/letty',
    featured: false,
    features: ['Terminal coding-agent tools and provider integrations', 'Resumable sessions and extension interfaces', 'Interactive, one-shot, JSON and RPC interfaces', 'Upstream attribution retained in repository documentation'],
    sourceUrl: 'https://github.com/danny-dis/letty/tree/main/packages',
    provenance: 'Maintained derivative · upstream: badlogic/pi-mono',
  },
  {
    id: 'votechain',
    title: 'Decentralized Voting — Ethereum Project Adaptation',
    description: 'A fork-based voting project with Solidity contracts, voter/admin interfaces and browser-based demonstration flows.',
    longDescription: 'This repository adapts an existing Ethereum voting project for university election workflows. The public source contains Solidity contracts, HTML/JavaScript voter and admin interfaces, a FastAPI database service and simplified localStorage demonstrations. The original project is credited in the README.',
    technologies: ['Solidity', 'JavaScript', 'HTML / CSS', 'FastAPI', 'MySQL', 'Truffle'],
    githubUrl: 'https://github.com/danny-dis/Decentralized-Voting-System',
    featured: false,
    features: ['Ethereum voting contracts and election administration', 'Voter and administrator interfaces', 'MetaMask integration and local demonstration flows', 'Upstream project attribution in the README'],
    sourceUrl: 'https://github.com/danny-dis/Decentralized-Voting-System/tree/main/contracts',
    provenance: 'Fork-based adaptation · educational project',
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug)
}

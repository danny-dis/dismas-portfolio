import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'dmr-x',
    title: 'DMR-X — AI gateway and adaptive routing',
    description:
      'One gateway between an application and its model providers, with routing policies, fallback paths and a React management interface.',
    longDescription:
      'DMR-X handles model discovery, provider integration and request routing in a TypeScript gateway. Applications can use it without adopting a particular agent framework. The React interface puts provider configuration and model management alongside the routing controls.',
    technologies: ['TypeScript', 'Bun', 'React', 'Vite', 'MCP', 'SQLite'],
    githubUrl: 'https://github.com/danny-dis/dmr-X',
    featured: true,
    features: [
      'Provider and model management in React',
      'Configurable routing, free-tier selection and fallback paths',
      'Gateway integration for AI applications and coding clients',
      'MCP tools and a separate optional agent-runtime layer',
    ],
    sourceUrl: 'https://github.com/danny-dis/dmr-X/tree/main/apps',
    provenance: 'Independent project · active development',
    story: {
      problem:
        'An application may need several model providers, each with its own integration and availability constraints. Putting those decisions into every caller makes the application harder to change.',
      decision:
        'Keep provider adapters and routing policy in a shared gateway. The application owns its workflow; the gateway handles the choice of model and the fallback path.',
      scope:
        'DMR-X brings discovery, routing and usage controls together and is in active development. Its routing policies address cost, latency, reliability and privacy trade-offs; their results depend on the configured providers and workloads.',
    },
  },
  {
    id: 'mote',
    title: 'MOTE — Minimal agent execution engine',
    description:
      'A small Rust engine for model-and-tool loops. Capability grants and execution limits stay explicit; applications supply their own tools.',
    longDescription:
      'MOTE runs a model response through a capability check, executes the allowed tool, then returns an observation to the loop. YAML configuration controls grants, fallback models and execution limits. A separate bridge connects application-owned tools through Python and TypeScript SDKs.',
    technologies: ['Rust', 'Python', 'TypeScript', 'YAML', 'JSONL'],
    githubUrl: 'https://github.com/danny-dis/MOTE',
    liveUrl: 'https://mote-runtime.vercel.app',
    featured: true,
    features: [
      'Opt-in capability grants and bounded execution',
      'Rust library, CLI and separate bridge process',
      'Application-owned tools through Python and TypeScript SDKs',
      'Public binary releases with checksums and integration-test infrastructure',
    ],
    sourceUrl: 'https://github.com/danny-dis/MOTE/tree/production-ready/src',
    provenance: 'Independent project · library and CLI',
    story: {
      problem:
        'An application that needs a model-and-tool loop should be able to keep control of its interface, approvals and data. Bundling all of that into the engine makes reuse harder.',
      decision:
        'Give the engine a narrow job: check capabilities, execute tools and return observations within configured limits. Use a bridge so Python and TypeScript callers can supply the tools.',
      scope:
        'The application still owns scheduling, approvals and storage. Capability checks are not an operating-system sandbox. The project website describes the engine; it is not a hosted execution service.',
    },
  },
  {
    id: 'chimera',
    title: 'Chimera — Multi-agent coding workspace',
    description:
      'A coding-agent workspace with solo, duo and trio execution paths, provider adapters and terminal/editor integration.',
    longDescription:
      'Chimera coordinates coding-agent execution in a TypeScript workspace. The core handles model providers, context and tool loops. Separate packages cover saved sessions, Git worktree isolation, declarative workflows and VS Code integration.',
    technologies: [
      'TypeScript',
      'Node.js',
      'React',
      'Git Worktrees',
      'VS Code API',
      'Vitest',
    ],
    githubUrl: 'https://github.com/danny-dis/chimera',
    featured: true,
    features: [
      'Solo, duo and trio coordinators',
      'Provider adapters and model/tool loops',
      'Context handling and persisted coding sessions',
      'Worktree isolation and terminal/IDE packages',
    ],
    sourceUrl: 'https://github.com/danny-dis/chimera/tree/main/packages',
    provenance: 'Independent project · active development',
    story: {
      problem:
        'Coding-agent workflows involve more than a model response. They need project context, tools, saved sessions and a way to keep parallel code changes separate.',
      decision:
        'Split coordination, sessions, isolation and interfaces into packages. Keep solo, duo and trio execution paths explicit and use Git worktrees for isolated coding work.',
      scope:
        'Chimera is an actively developed workspace. The package tree includes terminal and VS Code integration; it does not establish a published marketplace extension or hosted service.',
    },
  },
  {
    id: 'drift',
    title: 'Drift — Local-first thinking workspace',
    description:
      'A local workspace for ideas, repository context and research. Sources stay with the notes, and tasks have explicit approval boundaries.',
    longDescription:
      'Drift pairs a Python backend with a React dashboard for ideas, projects, research reports and task review. It keeps local state across restarts and uses a separately configured model gateway. Model-call budgets and approval boundaries constrain research and proposed changes.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Vite',
      'SQLite',
    ],
    githubUrl: 'https://github.com/danny-dis/Drift',
    featured: true,
    features: [
      'Idea capture, repository registration and project notes',
      'Research reports with retained sources and citation review',
      'Queued and blocked tasks with explicit approval',
      'Local persistence and model-call/resource budgets',
    ],
    sourceUrl: 'https://github.com/danny-dis/Drift/blob/main/drift/ui_api.py',
    preview: {
      src: '/projects/drift-research-empty-composer.png',
      alt: 'Drift research screen with navigation tabs, collapsed connection settings and an empty question field. AI status is not checked.',
      width: 1440,
      height: 837,
      caption:
        'Drift’s research screen with an empty question composer. Local interface preview; no model run is shown.',
    },
    provenance: 'Independent project · local-first application',
    story: {
      problem:
        'Ideas and research need somewhere to live alongside project context. A proposed change also needs to remain distinguishable from a change someone has approved and implemented.',
      decision:
        'Keep ideas, repository notes and research in a local workspace. Retain sources with reports and make queued, blocked and approval-dependent tasks visible in the dashboard.',
      scope:
        'Drift is a thinking and research workspace. Citation review is not independent fact-checking, and a proposed task does not mean Drift has changed the source code.',
    },
  },
  {
    id: 'glue',
    title: 'G.L.U.E. — Agent interoperability architecture',
    description:
      'Specifications for agent identity, discovery and capability routing across different runtimes.',
    longDescription:
      'G.L.U.E. is an architecture and specification project. Its documents cover agent federation, protocol adapters, capability registration, trust and provenance. They set a direction for implementation rather than describe a deployed platform.',
    technologies: ['System Architecture', 'MCP', 'A2A', 'Protocol Design'],
    githubUrl: 'https://github.com/danny-dis/G.L.U.E',
    featured: false,
    features: [
      'Federation and interoperability specifications',
      'Capability routing and agent identity contracts',
      'Least-privilege admission and provenance design',
      'Boundaries between federation, governance and memory',
    ],
    sourceUrl: 'https://github.com/danny-dis/G.L.U.E/tree/master/docs',
    provenance: 'Architecture / specification · not a deployed platform',
  },
  {
    id: 'letty',
    title: 'Letty — Maintained coding-agent derivative',
    description:
      'A maintained derivative of Mario Zechner’s Pi agent, with terminal tools, provider integration and resumable sessions.',
    longDescription:
      'Letty builds on Pi and retains its MIT attribution. The TypeScript workspace covers a coding CLI, agent loop, provider abstraction, terminal UI, sessions and extensions. The repository credits the upstream project and its authors.',
    technologies: ['TypeScript', 'Node.js', 'Terminal UI', 'SQLite', 'RPC'],
    githubUrl: 'https://github.com/danny-dis/letty',
    featured: false,
    features: [
      'Terminal coding tools and provider integration',
      'Resumable sessions and extensions',
      'Interactive, one-shot, JSON and RPC interfaces',
      'Upstream attribution retained in the documentation',
    ],
    sourceUrl: 'https://github.com/danny-dis/letty/tree/main/packages',
    provenance: 'Maintained derivative · upstream: badlogic/pi-mono',
  },
  {
    id: 'votechain',
    title: 'Decentralized voting — Ethereum project adaptation',
    description:
      'An educational adaptation of an Ethereum voting project for university elections, with voter and administrator interfaces.',
    longDescription:
      'This fork adapts an existing voting project for university election workflows. The source includes Solidity contracts, HTML/JavaScript interfaces, a FastAPI database service and browser-local demonstrations. The README credits the original project.',
    technologies: [
      'Solidity',
      'JavaScript',
      'HTML / CSS',
      'FastAPI',
      'MySQL',
      'Truffle',
    ],
    githubUrl: 'https://github.com/danny-dis/Decentralized-Voting-System',
    featured: false,
    features: [
      'Voting contracts and election administration',
      'Voter and administrator interfaces',
      'MetaMask integration and local demonstrations',
      'Original project attribution in the README',
    ],
    sourceUrl:
      'https://github.com/danny-dis/Decentralized-Voting-System/tree/main/contracts',
    provenance: 'Fork-based adaptation · educational project',
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug)
}

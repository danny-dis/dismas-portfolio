import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'argus',
    title: 'A.R.G.U.S — AI Red Teaming Platform',
    description: 'AI-driven autonomous penetration testing platform that plans engagements, develops custom exploits, validates findings, and generates reports.',
    longDescription: 'An AI-driven autonomous penetration testing platform that plans engagements, develops custom exploits, validates findings, and generates reports — all driven by a tiered LLM operator with minimal human supervision. Built 244+ Python files across 28 specialist agent folders covering recon, OSINT, exploitation, post-exploitation, lateral movement, cloud, container, IoT, wireless, and traffic analysis.',
    technologies: ['Python', 'LangChain', 'MongoDB', 'Neo4j', 'WebSockets', 'LLM Integration'],
    githubUrl: 'https://github.com/danny-dis/argus',
    featured: true,
  },
  {
    id: 'chimera',
    title: 'Chimera — Parallel Multi-Agent Coding',
    description: 'Terminal-native coding platform presenting as one agent but deploying 2-3 agents across different providers in parallel.',
    longDescription: 'Terminal-native coding platform presenting as one agent but deploying 2-3 agents across different providers in parallel — a cheap model for bulk work, a frontier model for verification, and an optional challenger for complex tasks. Features a Draft → Verify → Challenge → Synthesize pipeline with cost-aware routing, Agent Relay Racing for graceful context handoff, and worktree isolation for parallel execution.',
    technologies: ['TypeScript', 'Node.js', 'VS Code Extension', 'LSP', 'JSON-RPC', 'Pino'],
    githubUrl: 'https://github.com/danny-dis/chimera',
    featured: true,
  },
  {
    id: 'dmr-x',
    title: 'DMR-X — Universal AI Routing & MCP',
    description: 'Single gateway accepting OpenAI, Anthropic, and Gemini wire formats, routing to 57+ provider adapters with dynamic cost/latency/quality scoring.',
    longDescription: 'A single gateway accepting OpenAI, Anthropic, and Gemini wire formats, routing to 57+ provider adapters with dynamic cost/latency/quality scoring. Implements Thompson Sampling bandit for dynamic routing with fallback chains, Agent-as-a-Service runtime with durable sessions, MCP server with stdio/SSE/HTTP transports, and multi-tenant architecture with per-tenant keys, quotas, and policies.',
    technologies: ['TypeScript', 'React', 'Vite', 'MCP', 'SQLite', '57+ Providers'],
    githubUrl: 'https://github.com/danny-dis/dmr-X',
    featured: true,
  },
  {
    id: 'noesis',
    title: 'N.O.E.S.I.S — Agent Fleet Collective Brain',
    description: 'Two-tier memory system where agents keep local memory while contributing to a shared temporal knowledge graph.',
    longDescription: 'A two-tier memory system where agents keep local memory while contributing to a shared temporal knowledge graph — so what one agent knows, every relevant agent knows. Features content-addressed object store for immutable evidence, trust-scoring and deduplication across transcripts, and Python insight workers for chunking, embedding, extraction, and graphification.',
    technologies: ['TypeScript', 'Python', 'MCP', 'SQLite', 'Knowledge Graph'],
    githubUrl: 'https://github.com/danny-dis/N.O.E.S.I.S',
    featured: true,
  },
  {
    id: 'votechain',
    title: 'VoteChain — Blockchain Voting SaaS',
    description: 'Multi-tenant blockchain voting SaaS where each organization gets isolated elections as individual smart-contract instances.',
    longDescription: 'A multi-tenant blockchain voting SaaS where each organization gets isolated elections as individual smart-contract instances. Built with Solidity 0.8.24, OpenZeppelin v5, and Foundry. Features Privy embedded wallet + MetaMask support for voter authentication, and results indexing into Postgres with live SSE streaming to React frontend.',
    technologies: ['Solidity', 'Foundry', 'OpenZeppelin', 'React', 'Postgres', 'SSE', 'Base L2'],
    githubUrl: 'https://github.com/danny-dis/Decentralized-Voting-System',
    featured: true,
  },
  {
    id: 'ghost-factory',
    title: 'Ghost Factory — Polyglot Universal Builder',
    description: 'General-purpose build system targeting C, C++, Rust, Go, Java, Python, Web for Windows/Linux/macOS/Docker/ISO/firmware.',
    longDescription: 'A general-purpose build system targeting C, C++, Rust, Go, Java, Python, Web for Windows/Linux/macOS/Docker/ISO/firmware. Features modular toolchain abstraction for multi-language, multi-platform builds and a "ghost-ify" pipeline for automated repository transformation.',
    technologies: ['Python', 'YAML', 'Multi-Platform', 'Build Orchestration'],
    githubUrl: 'https://github.com/danny-dis/ghost_factory',
    featured: false,
  },
  {
    id: 'escrowbot',
    title: 'EscrowBot — Non-Custodial Cross-Platform Escrow',
    description: 'Deterministic escrow bot for Telegram, Slack, and Discord where deposits, release, and refunds are enforced by smart contracts.',
    longDescription: 'A deterministic escrow bot for Telegram, Slack, and Discord where deposits, release, and refunds are enforced by smart contracts — never by the operator. Features a platform-agnostic core with adapters for multiple platforms and 2-of-3 multisig + HTLC dispute resolution.',
    technologies: ['TypeScript', 'Node.js', 'Smart Contracts', 'Telegram API', 'Discord API'],
    githubUrl: 'https://github.com/danny-dis/escrow-bot',
    featured: false,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug)
}

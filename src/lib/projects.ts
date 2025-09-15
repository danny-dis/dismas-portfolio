import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'decentralized-voting-system',
    title: 'Decentralized Voting System',
    description: 'A secure, transparent voting system built on blockchain technology for educational institutions.',
    longDescription: 'A comprehensive decentralized voting system designed for schools and communities. Features blockchain-based vote recording, cryptographic security, and transparent result verification. Built with modularity in mind for easy deployment across different institutions.',
    technologies: ['Blockchain', 'Cryptography', 'Node.js', 'React'],
    githubUrl: 'https://github.com/danny-dis/Decentralized-Voting-System.git',
    featured: true,
  },
  {
    id: 'beyond',
    title: 'Beyond',
    description: 'Core backend system for peer-to-peer network infrastructure.',
    longDescription: 'The foundational backend system that powers peer-to-peer network communications. Designed with modularity and self-hosting in mind, Beyond provides the core infrastructure for decentralized applications.',
    technologies: ['Node.js', 'P2P Networks', 'Networking', 'Backend'],
    githubUrl: 'https://github.com/danny-dis/Beyond',
    featured: true,
  },
  {
    id: 'beyond-web',
    title: 'Beyond-Web',
    description: 'Web interface for the Beyond peer-to-peer network system.',
    longDescription: 'A modern web interface that provides user-friendly access to the Beyond P2P network. Features real-time network monitoring, node management, and intuitive controls for decentralized network operations.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Frontend'],
    githubUrl: 'https://github.com/danny-dis/Beyond-Web',
    featured: true,
  },
  {
    id: 'vigilnet',
    title: 'VigilNet',
    description: 'Secure network for browsing onion, Loki, and I2P sites with multi-protocol message hopping.',
    longDescription: 'A revolutionary secure network that enables browsing of onion, Loki, and I2P sites while providing message hopping across Wi-Fi, cellular, Bluetooth, radio, and future mesh/satellite connections. Designed for censorship resistance and privacy.',
    technologies: ['Network Security', 'Tor', 'I2P', 'Mesh Networks', 'Privacy'],
    githubUrl: 'https://github.com/danny-dis/VigilNet.git',
    featured: true,
  },
  {
    id: 'danny-dis-profile',
    title: 'danny-dis',
    description: 'Profile repository containing miscellaneous projects and experiments.',
    longDescription: 'A collection of various projects, experiments, and code snippets. This repository serves as a showcase of different technologies and approaches explored during development.',
    technologies: ['Various', 'Experiments', 'Open Source'],
    githubUrl: 'https://github.com/danny-dis/danny-dis',
    featured: false,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug)
}

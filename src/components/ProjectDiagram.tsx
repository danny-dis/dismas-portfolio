interface ProjectDiagramProps {
  id: string
}

const diagrams: Record<
  string,
  { label: string; nodes: string[]; note: string }
> = {
  'dmr-x': {
    label: 'Model routing',
    nodes: [
      'Application',
      'Routing policy',
      'Provider adapters',
      'Model providers',
    ],
    note: 'Fallbacks and usage controls at the gateway',
  },
  mote: {
    label: 'Bounded execution',
    nodes: [
      'Model response',
      'Capability check',
      'Tool execution',
      'Observation',
    ],
    note: 'Execution limits and opt-in capability grants',
  },
  chimera: {
    label: 'Coding workflow',
    nodes: ['Coding task', 'Coordinator', 'Agent + tools', 'Git worktree'],
    note: 'Solo, duo and trio execution paths',
  },
  drift: {
    label: 'Local research',
    nodes: ['Idea + repository', 'Research', 'Sources + notes', 'Task review'],
    note: 'Local persistence and explicit approval boundaries',
  },
}

export default function ProjectDiagram({ id }: ProjectDiagramProps) {
  const diagram = diagrams[id]
  if (!diagram) return null
  return (
    <figure className={`architecture architecture-${id}`}>
      <figcaption>
        <span>Architecture sketch</span>
        <span>{diagram.label}</span>
      </figcaption>
      <div className="architecture-flow">
        {diagram.nodes.map((node, index) => (
          <div className="architecture-step" key={node}>
            <span className="architecture-index" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{node}</span>
          </div>
        ))}
      </div>
      <p className="architecture-note">{diagram.note}</p>
    </figure>
  )
}

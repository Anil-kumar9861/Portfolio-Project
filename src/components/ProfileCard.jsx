import config from '../config.js'

// Edit these lines to change what the card shows.
const profile = {
  role: 'Software developer',
  stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
  based: 'Bengaluru, Karnataka',
  degree: 'B.Tech, CSE (AIML)',
  status: 'Open to opportunities',
}

const punct = 'text-muted'
const str = (value) => <span className="text-accent-ink">&quot;{value}&quot;</span>

function Row({ name, children, indent = 'pl-6' }) {
  return (
    <div className={indent}>
      {name && <span className={punct}>&quot;{name}&quot;: </span>}
      {children}
    </div>
  )
}

export default function ProfileCard({ className = '' }) {
  return (
    <aside
      aria-label="Profile summary"
      className={`overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_12px_32px_var(--shadow)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3 font-mono text-xs font-medium text-muted">
        {[0, 1, 2].map((i) => (
          <i key={i} className="block h-2.5 w-2.5 rounded-full bg-line-strong" />
        ))}
        <span className="ml-2">profile.json</span>
      </div>

      <div className="px-6 py-5 font-mono text-sm leading-8">
        <div className={punct}>{'{'}</div>
        <Row name="name">
          <span className="text-ink">&quot;{config.name}&quot;</span>
          <span className={punct}>,</span>
        </Row>
        <Row name="role">
          {str(profile.role)}
          <span className={punct}>,</span>
        </Row>
        <Row name="stack">
          <span className={punct}>[</span>
        </Row>
        {profile.stack.map((item, i) => (
          <Row key={item} indent="pl-12">
            {str(item)}
            {i < profile.stack.length - 1 && <span className={punct}>,</span>}
          </Row>
        ))}
        <Row>
          <span className={punct}>],</span>
        </Row>
        <Row name="based">
          {str(profile.based)}
          <span className={punct}>,</span>
        </Row>
        <Row name="degree">
          {str(profile.degree)}
          <span className={punct}>,</span>
        </Row>
        <Row name="status">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
          {str(profile.status)}
        </Row>
        <div className={punct}>{'}'}</div>
      </div>

      <div className="flex gap-5 border-t border-line px-6 py-3 text-sm font-medium">
        <a className="hover:text-accent-ink" href={config.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="hover:text-accent-ink" href={config.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="hover:text-accent-ink" href={`mailto:${config.email}`}>Email</a>
      </div>
    </aside>
  )
}

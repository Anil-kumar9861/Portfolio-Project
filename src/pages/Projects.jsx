import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import { container, grid, input, lead, page } from '../ui.js'

const chip =
  'min-h-10 cursor-pointer rounded-full border px-[18px] text-sm font-medium transition-colors motion-reduce:transition-none'

const tags = ['All', ...[...new Set(projects.flatMap((p) => p.tags))].sort()]

export default function Projects() {
  const [tag, setTag] = useState('All')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return projects.filter(
      (p) =>
        (tag === 'All' || p.tags.includes(tag)) &&
        (!needle ||
          p.title.toLowerCase().includes(needle) ||
          p.summary.toLowerCase().includes(needle)),
    )
  }, [tag, query])

  return (
    <div className={`${container} ${page}`}>
      <h1 className="mb-2 text-[clamp(2.2rem,5vw,3.5rem)]">Projects</h1>
      <p className={lead}>Things I&apos;ve built with React, Spring Boot and PostgreSQL.</p>

      <div className="my-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter by technology">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={t === tag}
              onClick={() => setTag(t)}
              className={`${chip} ${
                t === tag
                  ? 'border-accent bg-accent font-bold text-on-accent'
                  : 'border-line-strong text-muted hover:border-accent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <input
          type="search"
          className={`${input} max-w-full rounded-full sm:w-[260px]`}
          placeholder="Search projects"
          aria-label="Search projects"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {visible.length === 0 && <p className="my-6 text-muted">No projects match. Try another filter.</p>}

      <div className={grid}>
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}

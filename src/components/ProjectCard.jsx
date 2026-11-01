import { Link } from 'react-router-dom'
import { tag, tagList } from '../ui.js'

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[14px] border border-line bg-panel transition-colors hover:border-accent motion-reduce:transition-none">
      <Link
        to={`/projects/${project.id}`}
        className="flex h-40 items-center justify-center bg-panel-2 font-mono text-xs text-muted"
        aria-label={`Open ${project.title}`}
      >
        {project.imageUrl ? (
          <img className="h-full w-full object-cover" src={project.imageUrl} alt="" loading="lazy" />
        ) : (
          <span>No screenshot yet</span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl">
          <Link className="hover:text-accent-ink" to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p className="mb-4 text-[0.95rem] text-muted">{project.summary}</p>
        <ul className={tagList} aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className={tag}>{t}</li>
          ))}
        </ul>
        <div className="mt-auto flex gap-5 text-sm font-medium">
          {project.githubUrl && (
            <a className="hover:underline" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.liveUrl && (
            <a className="text-accent-ink hover:underline" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

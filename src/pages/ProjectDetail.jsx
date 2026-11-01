import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects.js'
import { btnOutline, btnPrimary, lead, page, tag, tagList } from '../ui.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)

  return (
    <div className={`mx-auto w-full  px-7  ${page}`}>
      <Link to="/projects" className="mb-6 inline-block font-medium text-accent-ink hover:underline">
        All projects
      </Link>

      {!project && (
        <div>
          <h1 className="mb-2 text-[clamp(2.2rem,5vw,3.5rem)]">Project not found</h1>
          <p className={lead}>That project doesn&apos;t exist. Go back to the list to pick another.</p>
        </div>
      )}

      {project && (
        <article>
          <h1 className="mb-2 text-[clamp(2.2rem,5vw,3.5rem)]">{project.title}</h1>
          <p className={lead}>{project.summary}</p>

          <ul className={tagList} aria-label="Technologies">
            {project.tags.map((t) => (
              <li key={t} className={tag}>{t}</li>
            ))}
          </ul>

          <div className="mb-8 mt-2 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a className={btnPrimary} href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a className={btnOutline} href={project.githubUrl} target="_blank" rel="noreferrer">
                Source on GitHub
              </a>
            )}
          </div>

          {project.imageUrl && (
            <img
              className="mb-8 w-full rounded-[14px] border border-line"
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
            />
          )}

          {project.description
            .split(/\n\s*\n/)
            .filter(Boolean)
            .map((para, i) => (
              <p key={i} className="mb-4 max-w-[68ch]">{para}</p>
            ))}
        </article>
      )}
    </div>
  )
}

import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import config from '../config.js'
import { projects } from '../data/projects.js'
import { accentLink, btnOutline, btnPrimary, container, grid, lead } from '../ui.js'


export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const list = featured.length ? featured : projects.slice(0, 3)

  return (
    <div className={container}>
     <section className="grid items-center gap-8 pb-10 pt-4 md:pt-6 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div>
          <p className="mb-3.5 text-xs font-bold uppercase tracking-wide text-accent-ink">
            {config.role}
          </p>
          <h1 className="mb-5 text-[clamp(2.4rem,4.6vw,3.5rem)]">
            Hi, I&apos;m {config.name}. I build things that make a difference.
          </h1>
          <p className={lead}>
            
            I’m a full-stack developer passionate about building practical web applications using Java, Spring Boot, React, and PostgreSQL. 
            I enjoy developing backend services, designing REST APIs, and integrating databases to create reliable and user-friendly applications. 
            I’m eager to learn, solve real-world problems, and contribute to a team where I can grow as a software developer.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects" className={btnPrimary}>View projects</Link>
            <Link to="/contact" className={btnOutline}>Contact me</Link>
          </div>
        </div>

        <ProfileCard className="w-full max-w-110 justify-self-center lg:w-110 lg:justify-self-end" />
      </section>

      <section aria-labelledby="featured-heading" className="pb-20">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 id="featured-heading" className="m-0 text-[clamp(1.5rem,3vw,2rem)]">
            Featured projects
          </h2>
          <Link to="/projects" className={accentLink}>View all projects</Link>
        </div>

        <div className={grid}>
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
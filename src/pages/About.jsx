import { Fragment, useState } from 'react'
import config from '../config.js'
import { btnOutline, container, page, tag, tagList } from '../ui.js'

// Fill in your details here. Everything on the page is read from this object.
const cv = {
  phone: config.phone,
  photo: '/profile.jpg', // put your photo at frontend/public/profile.jpg
  graduate: 'B.Tech, 2025',
  about:
    'Aspiring software engineer with hands-on experience in Java, Spring Boot, and PostgreSQL. I have built backend solutions and improved database integration on real-time projects, which sharpened my debugging skills.',
  education: [
    {
      when: 'Apr 2025',
      school: 'Trident Academy of Technology, Bhubaneswar',
      degree: 'B.Tech, Computer Science (AIML)',
    },
    {
      when: 'Jul 2021',
      school: 'Sankalp Senior Secondary School, Berhampur',
      degree: 'Senior Secondary',
    },
  ],
  projects: [
    {
      when: 'Mar 2025 - May 2025',
      title: 'Hotel Management System',
      text: 'Web application for room booking and customer management, with automatic bill calculation, booking confirmation emails, real-time room availability, and a responsive Bootstrap interface.',
      tech: ['Java', 'Spring Boot', 'JSP', 'PostgreSQL', 'Bootstrap', 'jQuery'],
    },
  ],
  experience: [
    {
      period: 'Jul 2026 · Bengaluru, Karnataka',
      title: 'Associate Developer',
      company: 'Agilitz Technology Pvt Ltd',
      text: 'Developed and customized Microsoft Dynamics 365 solutions: implemented business logic, built custom forms and reports, and integrated external systems through APIs. Worked with functional consultants to deliver scalable business applications following Microsoft best practices.',
    },
    {
      period: 'Mar 2025 - May 2025 · Bhubaneswar, Odisha',
      title: 'Java Development Intern',
      company: 'Logicwave Training Institute',
      text: 'Completed 3-month practical training in Java Full Stack Development. Worked on real-time projects using Java, Spring Boot, JSP, and PostgreSQL, gaining experience in backend development, database integration, and debugging.',
    },
  ],
  skills: {
    Languages: ['Java', 'SQL', 'JavaScript'],
    'Frameworks and frontend': ['Spring Boot', 'React', 'HTML', 'CSS', 'Bootstrap'],
    'Database and tools': ['PostgreSQL', 'Git', 'Maven', 'IntelliJ IDEA', 'VS Code', 'STS'],
    'Core concepts': ['Data Structures and Algorithms', 'OOPs', 'Computer Networks', 'Linux', 'TCP/IP', 'REST APIs'],
  },
}

function Spark({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`shrink-0 fill-accent-ink ${className}`}>
      <path d="M12 0C12.8 7.2 16.8 11.2 24 12C16.8 12.8 12.8 16.8 12 24C11.2 16.8 7.2 12.8 0 12C7.2 11.2 11.2 7.2 12 0Z" />
    </svg>
  )
}

const boxClass = 'border border-line-strong bg-panel p-5 sm:p-6'
const boxTitle =
  'mb-5 flex items-center justify-between font-heading text-sm font-medium uppercase tracking-wide'

function Box({ title, className = '', children }) {
  return (
    <section className={`${boxClass} ${className}`}>
      <h2 className={boxTitle}>
        {title}
        <Spark />
      </h2>
      {children}
    </section>
  )
}

function Pair({ left, right }) {
  return (
    <div className="mt-1 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm">
      <span>{left}</span>
      <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
      <span className="text-muted">{right}</span>
    </div>
  )
}

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false)
  const [first, ...rest] = config.name.split(' ')
  const initials = config.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <div className={`${container} ${page}`}>
      {/* Resume button at the top */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xl font-bold uppercase tracking-wide text-accent-ink">About me</p>
        <a className={btnOutline} href={config.resume} download>
          Download resume
        </a>
      </div>

      <div className="grid gap-4 object-cover lg:grid-cols-2">
        {/* Photo */}
        <div className="flex flex-col border border-line-strong bg-panel">
          <div className="relative min-h-75 flex-1 bg-panel-2">
            {photoFailed ? (
              <div
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center font-heading text-7xl font-bold text-line-strong"
              >
                {initials}
              </div>
            ) : (
              <img
                src={cv.photo}
                alt={`Portrait of ${config.name}`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => setPhotoFailed(true)}
              />
            )}
            <span className="absolute right-3 top-4 rotate-180 bg-page/80 px-1 py-2 text-xs font-bold uppercase tracking-wide [writing-mode:vertical-rl]">
             
            </span>
          </div>
          <div className="flex justify-between gap-4 border-t border-line-strong p-5 text-sm uppercase tracking-wide">
            <span>{cv.graduate}</span>
            <span className="text-right">{config.role}</span>
          </div>
        </div>

        {/* Name, contact, about */}
        <div className="grid content-start gap-4">
          <h1 className="font-heading text-[clamp(3.5rem,9vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-tight">
            {first}
            <br />
            {rest.join(' ')}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border border-line-strong px-5 py-3 text-sm">
            <a className="hover:text-accent-ink" href={`tel:${cv.phone.replace(/\s/g, '')}`}>{cv.phone}</a>
            <a className="hover:text-accent-ink" href={`mailto:${config.email}`}>{config.email}</a>
          </div>

          <Box title="About me">
            <p className="m-0 text-[0.95rem] leading-relaxed text-muted">{cv.about}</p>
          </Box>
        </div>

        {/* Education and achievements */}
        <Box title="Education">
          <ul className="m-0 grid list-none gap-5 p-0">
            {cv.education.map((e) => (
              <li key={e.school}>
                <p className="mb-1 font-mono text-xs text-accent-ink">{e.when}</p>
                <Pair left={e.school} right={e.degree} />
              </li>
            ))}
          </ul>
        </Box>

        <Box title="Projects">
          <ul className="m-0 grid list-none gap-5 p-0">
            {cv.projects.map((p) => (
              <li key={p.title}>
                <p className="mb-1 font-mono text-xs text-accent-ink">{p.when}</p>
                <h3 className="mb-1 text-base">{p.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted">{p.text}</p>
                <ul className={`${tagList} mb-0`}>
                  {p.tech.map((t) => (
                    <li key={t} className={tag}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Box>

        {/* Experience */}
        <section className={`${boxClass} lg:col-span-2`}>
          <h2 className="mb-6 flex items-center justify-center gap-4 font-heading text-sm font-medium uppercase tracking-wide">
            <Spark />
            Experience
            <Spark />
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {cv.experience.map((x, i) => (
              <article key={x.title} className={i > 0 ? 'md:border-l md:border-line-strong md:pl-8' : ''}>
                <p className="mb-1 font-mono text-xs text-accent-ink">{x.period}</p>
                <h3 className="mb-0.5 text-base">{x.title}</h3>
                <p className="mb-3 text-sm font-medium">{x.company}</p>
                <p className="m-0 text-[0.95rem] leading-relaxed text-muted">{x.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills strip */}
        <section className={`${boxClass} lg:col-span-2`}>
          <h2 className="sr-only">Skills</h2>
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(cv.skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-3 font-heading text-xs font-bold uppercase tracking-wide">{group}</h3>
                <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-1.5 p-0 text-sm text-muted">
                  {items.map((s, i) => (
                    <Fragment key={s}>
                      <li>{s}</li>
                      {i < items.length - 1 && <li aria-hidden="true"><Spark className="h-2.5 w-2.5" /></li>}
                    </Fragment>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

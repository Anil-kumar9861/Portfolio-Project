import { Link } from 'react-router-dom'
import { btnPrimary, containerNarrow, lead, page } from '../ui.js'

export default function NotFound() {
  return (
    <div className={`${containerNarrow} ${page}`}>
      <h1 className="mb-2 text-[clamp(2.2rem,5vw,3.5rem)]">Page not found</h1>
      <p className={lead}>That address doesn&apos;t exist. Head back to the projects.</p>
      <Link to="/projects" className={btnPrimary}>View projects</Link>
    </div>
  )
}

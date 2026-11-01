import { Link, NavLink } from 'react-router-dom'
import config from '../config.js'
import { useTheme } from '../context/ThemeContext.jsx'

const linkClass = ({ isActive }) =>
  `py-2 underline-offset-8 hover:underline ${
    isActive ? 'font-bold text-accent-ink underline' : 'text-ink'
  }`

export default function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page shadow-md">
      <div className="px-4 py-3 sm:px-8">

        {/* Top row: Logo and theme button */}
        <div className="flex min-h-12 items-center justify-between gap-2">
          <Link
            to="/"
            className="shrink-0 font-heading text-2xl font-bold tracking-tight text-logo sm:text-3xl"
          >
            {config.handle}
            <span className="text-accent-ink">.dev</span>
          </Link>

          <button
            type="button"
            className="shrink-0 rounded-lg border border-line-strong px-2.5 py-2 text-xs font-medium text-ink transition hover:border-accent sm:px-3 sm:text-sm motion-reduce:transition-none"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
          </button>
        </div>

        {/* Navigation row */}
        <nav
          aria-label="Main"
          className="mt-2 flex items-center justify-center gap-x-7 text-sm sm:justify-end sm:gap-x-7 sm:text-base"
        >
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

      </div>
    </header>
  )

}
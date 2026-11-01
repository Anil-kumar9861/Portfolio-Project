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
      <div
        className={`flex min-h-16 pl-8 pr-7 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3`}
      >
        <Link
          to="/"
          className="shrink-0 font-heading text-3xl font-bold tracking-tight text-logo"
        >
          {config.handle}
          <span className="text-accent-ink">.dev</span>
        </Link>

        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm sm:gap-x-7 sm:text-base"
        >
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <button
            type="button"
            className="min-h-10 rounded-lg border border-line-strong px-3 text-sm font-medium text-ink transition hover:border-accent motion-reduce:transition-none"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
          </button>
        </nav>
      </div>
    </header>
  )
}
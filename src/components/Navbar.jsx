
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
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3 pl-4 pr-4 sm:pl-8 sm:pr-7">

        <Link
          to="/"
          className="shrink-0 font-heading text-3xl font-bold tracking-tight text-logo"
        >
          {config.handle}
          <span className="text-accent-ink">.dev</span>
        </Link>

        {/* Mobile theme button */}
        <button
          type="button"
          className="order-2 min-h-10 w-28 shrink-0 whitespace-nowrap rounded-lg border border-line-strong px-2 text-xs font-medium text-ink transition hover:border-accent md:hidden"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}
        </button>

        <nav
          aria-label="Main"
         className="order-3 flex w-full flex-wrap items-center justify-start gap-x-5 gap-y-3 text-sm sm:gap-x-7 sm:text-base md:order-2 md:w-auto"
        >
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* Desktop theme button */}
          <button
            type="button"
            className="hidden min-h-10 rounded-lg border border-line-strong px-3 text-sm font-medium text-ink transition hover:border-accent md:block motion-reduce:transition-none"
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

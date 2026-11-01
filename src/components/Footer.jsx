
import { Link } from 'react-router-dom'
import config from '../config.js'
import { container,btnOutline } from '../ui.js'

const year = new Date().getFullYear()

function Icon({ size = 17, className = '', children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  )
}

const GithubIcon = (props) => (
  <Icon {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
)

const LinkedinIcon = (props) => (
  <Icon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
)
const LeetCodeIcon = (props) => (
  <Icon {...props}>
    <path d="M16.2 3.5 8.7 11a4.2 4.2 0 0 0 0 6l2.5 2.5a4.2 4.2 0 0 0 6 0l1.3-1.3" />
    <path d="m13 6.7 4.2-4.2" />
    <path d="M11 14h9" />
  </Icon>
)

const MailIcon = (props) => (
  <Icon {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
)

const ArrowUpRightIcon = (props) => (
  <Icon {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Icon>
)

const ArrowUpIcon = (props) => (
  <Icon {...props}>
    <path d="m18 15-6-6-6 6" />
  </Icon>
)

const HeartIcon = (props) => (
  <Icon {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </Icon>
)

const socialLink =
  'group flex items-center justify-center gap-2 rounded-xl border border-line px-4 py-3 text-sm text-muted transition-all duration-300 hover:border-accent hover:text-accent-ink hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0'

function backToTop() {
  const reduce = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  window.scrollTo({
    top: 0,
    behavior: reduce ? 'auto' : 'smooth',
  })
}

export default function Footer() {
  return (
    <footer className="relative border-t border-line mt-6  bg-page">

      {/* Top accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className={`${container} pt-10 pb-2 sm:pt-12 sm:pb-2`}>

        {/* Top section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Profile information */}
          <div className="space-y-3">

            <Link
              to="/"
              className="inline-flex font-heading text-xl font-bold tracking-tight text-ink transition hover:text-accent-ink"
            >
              {config.handle}
              <span className="text-accent-ink">.dev</span>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-muted">
              Passionate about creating, learning, and solving problems.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2 pt-1 text-xs text-muted">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              Available for opportunities
            </div>

          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3 ">

            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
             className={`${socialLink} ${btnOutline}`}
              
            >
              <GithubIcon />

              <span  >GitHub</span>

              <ArrowUpRightIcon
                size={13}
                className="opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
               className={`${socialLink} ${btnOutline}`}
            >
              <LinkedinIcon />

              <span>Linkedin</span>

              <ArrowUpRightIcon
                size={13}
                className="opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={config.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
               className={`${socialLink} ${btnOutline}`}
            >
              <LeetCodeIcon/>

              <span>LeetCode</span>

              <ArrowUpRightIcon
                size={13}
                className="opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-on-accent transition-all duration-300 hover:-translate-y-1 hover:brightness-110 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <MailIcon />
              Contact me
            </Link>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t  border-gray-500" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-5 text-center text-xs text-muted sm:flex-row sm:text-left">

          {/* Copyright */}
          <p className="m-0">
            © {year} {config.name}. All rights reserved.
          </p>

          {/* Built with */}
          <p className="m-0 flex items-center gap-1.5">
            Crafted with

            <HeartIcon
              size={13}
              className="fill-accent text-accent"
            />

            using React &amp; Tailwind CSS
          </p>

          {/* Back to top */}
          <button
            type="button"
            onClick={backToTop}
            className="group flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-surface hover:text-accent-ink motion-reduce:transition-none"
          >
            Back to top

            <ArrowUpIcon
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

        </div>
      </div>
    </footer>
  )
}

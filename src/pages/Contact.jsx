import { useState } from 'react'
import config from '../config.js'
import { btnOutline, btnPrimary, btnSmall, container, input, lead, page } from '../ui.js'

const empty = { name: '', email: '', message: '' }

const card = 'rounded-2xl border border-line bg-panel p-5 sm:p-6'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard can be blocked; the email is still a normal link
    }
  }

  return (
    <button type="button" onClick={copy} className="text-xs font-medium text-accent-ink hover:underline" aria-live="polite">
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function InfoRow({ label, action, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="min-w-0">
        <p className="m-0 font-mono text-xs uppercase tracking-wide text-muted">{label}</p>
        <div className="truncate font-medium">{children}</div>
      </div>
      {action}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()

    // No form service set in config.js: open the visitor's email app with the message filled in.
    if (!config.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
      window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`
      setStatus({ type: 'success', text: 'Your email app should open with the message ready to send.' })
      return
    }

    setStatus({ type: 'sending', text: '' })
    try {
      const res = await fetch(config.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(
          data?.errors?.map((x) => x.message).join('. ') || 'Could not send your message. Please try again.',
        )
      }
      setStatus({ type: 'success', text: 'Thanks! Your message was sent.' })
      setForm(empty)
    } catch (err) {
      const offline = err instanceof TypeError
      setStatus({
        type: 'error',
        text: offline ? 'Could not reach the server. Please try again later or email me directly.' : err.message,
      })
    }
  }

  return (
    <div className={`${container} ${page}`}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        {/* Form */}
        <div>
          <h1 className="mb-2 text-[clamp(2.2rem,5vw,3.5rem)]">Contact</h1>
          <p className={lead}>
            Have a project or an opportunity in mind? Send a message and I&apos;ll get back to you.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-5">
            <label className="grid gap-2 font-medium">
              Name
              <input className={input} required maxLength={100} value={form.name} onChange={update('name')} autoComplete="name" />
            </label>
            <label className="grid gap-2 font-medium">
              Email
              <input className={input} type="email" required maxLength={200} value={form.email} onChange={update('email')} autoComplete="email" />
            </label>
            <label className="grid gap-2 font-medium">
              Message
              <textarea className={`${input} resize-y`} required rows={6} maxLength={2000} value={form.message} onChange={update('message')} />
            </label>
            <button className={`${btnPrimary} justify-self-start`} type="submit" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status.type === 'success' && (
              <p className="m-0 font-medium text-accent-ink" role="status">{status.text}</p>
            )}
            {status.type === 'error' && (
              <p className="m-0 border-l-[3px] border-accent pl-3" role="alert">{status.text}</p>
            )}
          </form>
        </div>

        {/* Details */}
        <aside className="grid content-start gap-4 mt-12 lg:pt-3" aria-label="Contact details">
          <section className={card}>
            <p className="mb-2 flex items-center gap-2.5 font-heading text-lg font-medium text-heading">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
              Open to opportunities
            </p>
            <p className="m-0 text-[0.95rem] text-muted">
              Looking for software developer roles where I can work with Python, Java, Spring Boot, and React.
            </p>
          </section>

          <section className={`${card} divide-y divide-line py-2 sm:py-3`}>
            <InfoRow label="Email" action={<CopyButton text={config.email} />}>
              <a className="hover:text-accent-ink" href={`mailto:${config.email}`}>{config.email}</a>
            </InfoRow>
            <InfoRow label="Phone" action={<CopyButton text={config.phone} />}>
              <a className="hover:text-accent-ink" href={`tel:${config.phone.replace(/\s/g, '')}`}>{config.phone}</a>
            </InfoRow>
            <InfoRow label="Based in">{config.location}</InfoRow>
          </section>

          <section className={card}>
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">Find me online</p>
            <div className="flex flex-wrap gap-3">
              <a className={`${btnOutline} ${btnSmall}`} href={config.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className={`${btnOutline} ${btnSmall}`} href={config.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className={`${btnOutline} ${btnSmall}`} href={config.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
              <a className={`${btnOutline} ${btnSmall}`} href={config.resume} download>Resume</a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}

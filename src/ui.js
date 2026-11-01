// Shared Tailwind class strings, so the same look is not repeated in every file.

export const container = 'mx-auto w-full  px-4 md:px-6'
export const containerNarrow = 'mx-auto w-full max-w-[1280px] px-4 md:px-6'
export const page = 'py-9 pb-20 md:py-14 md:pb-20'

const btn =
  'inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border  px-5 text-[0.95rem] font-medium transition motion-reduce:transition-none'
export const btnPrimary = `${btn} bg-accent font-bold text-on-accent hover:brightness-110 disabled:cursor-progress disabled:opacity-60 `
export const btnOutline = `${btn} border-line-strong text-ink hover:border-accent`
export const btnSmall = 'min-h-10 px-4 text-sm'

export const input =
  'w-full min-h-11 rounded-xl border border-line-strong bg-panel px-4 py-2.5 text-ink placeholder:text-muted'

export const tagList = 'mb-4 flex list-none flex-wrap gap-2 p-0'
export const tag =
  'rounded-md border border-line-strong px-2 py-0.5 font-mono text-xs text-accent-ink'

export const lead = 'mb-4 max-w-[60ch] text-lg text-muted'
export const accentLink = 'font-medium text-accent-ink hover:underline'

export const grid = 'grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-6'

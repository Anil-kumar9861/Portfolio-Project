# Portfolio (React + Tailwind CSS)

A frontend-only developer portfolio. There is no backend or database: your projects live in a data file, and the whole site is static, so it can be hosted for free.

Built with React 19, Vite, React Router, and Tailwind CSS v4. Dark and light themes.

## Run it

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open https://portfolio-project-nine-topaz.vercel.app/.

## Build for production

```bash
npm run build      # creates the dist folder
npm run preview    # optional: test the build locally
```

## Where to edit your content

| What | File |
|---|---|
| Name, role, email, GitHub, LinkedIn, contact form service | `src/config.js` |
| Projects (add, edit, remove) | `src/data/projects.js` |
| About page (education, experience, projects, skills, phone, bio) | the `cv` object at the top of `src/pages/About.jsx` |
| Home page text | `src/pages/Home.jsx` |
| Resume download | replace `public/resume.pdf` |
| Photo on the About page | replace `public/profile.jpg` |
| Profile card on the home page | `profile` object at the top of `src/components/ProfileCard.jsx` |
| Colors and fonts | the variables at the top of `src/index.css` |

### Adding a project
Copy an entry in `src/data/projects.js`, give it a new `id`, and fill in the fields. It appears on the Projects page, gets its own page at `/projects/<id>`, and shows on the home page if `featured` is `true`. To add a screenshot, put the image in `public/` and set `imageUrl: '/my-screenshot.png'`.

## Contact form (no backend)

By default, pressing "Send message" opens the visitor's email app with the message filled in, addressed to the email in `config.js`.

To receive messages directly in your inbox instead:
1. Create a free form at https://formspree.io and copy its URL (it looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `src/config.js`.

## Deploy

Any static host works. Use these settings:

- Build command: `npm run build`
- Output directory: `dist`

**Netlify and Vercel:** connect your GitHub repository and use the settings above. The included `public/_redirects` (Netlify) and `vercel.json` (Vercel) make links like `/projects` work when the page is refreshed.

**GitHub Pages:** it needs two extra steps. Set `base: '/your-repo-name/'` in `vite.config.js` and the `basename` on `BrowserRouter` in `src/main.jsx`, and copy `dist/index.html` to `dist/404.html` so refreshed pages work.

## Structure

```
src/
  pages/        Home, Projects, ProjectDetail, About, Contact, NotFound
  components/   Navbar, Footer, ProjectCard, ProfileCard, ScrollToTop
  context/      ThemeContext (dark/light, saved in localStorage)
  data/         projects.js
  config.js     Your personal details
  ui.js         Shared Tailwind class strings
  index.css     Tailwind import, theme variables, tokens
```

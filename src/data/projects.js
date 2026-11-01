// Your projects live here. Add, edit, or remove entries and the site updates.
//
// id         - used in the URL: /projects/<id> (letters, numbers, dashes)
// description - separate paragraphs with a blank line
// githubUrl / liveUrl / imageUrl - leave '' to hide the link or show "No screenshot yet".
//   imageUrl can be '/my-shot.png' (file in the public folder) or an imported image.
// featured   - true shows it in "Featured projects" on the home page
// createdAt  - YYYY-MM-DD, newest first

const items = [
  {
    id: 'hotel-management-system',
    title: 'Hotel Management System',
    summary: 'Web application for room booking and customer management.',
    description: [
      'A hotel management web application for room booking and customer management, built in 2025 with Java, Spring Boot, JSP, and PostgreSQL.',
      'It calculates the bill automatically, sends a booking confirmation email, and keeps room availability and booking status up to date in real time.',
      'The interface is responsive, designed with Bootstrap, JSP, and jQuery, and all data is stored in PostgreSQL.',
    ].join('\n\n'),
    tags: ['Java', 'Spring Boot', 'JSP', 'PostgreSQL', 'Bootstrap', 'jQuery'],
    githubUrl: 'https://github.com/Anil-kumar9861/Hotel-Management-System', // add your repository link
    liveUrl: '',
    imageUrl: '/projects/HotelManagementSystem.png',
    featured: true,
    createdAt: '2025-05-01',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    summary: 'This site: a responsive developer portfolio with dark and light themes.',
    description: [
      'A personal portfolio built with React, React Router, and Tailwind CSS.',
      'It has dark and light themes, a filterable project list, project detail pages, and a CV-style About page.',
    ].join('\n\n'),
    tags: ['React', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/Anil-kumar9861/Portfolio-Project', // add your repository link
    liveUrl: 'https://portfolio-project-nine-topaz.vercel.app/',
    imageUrl: '/projects/Portfoilo.png',
    featured: true,
    createdAt: '2026-10-28',
  },
]

export const projects = [...items].sort((a, b) => b.createdAt.localeCompare(a.createdAt))

export const getProject = (id) => projects.find((p) => p.id === id)

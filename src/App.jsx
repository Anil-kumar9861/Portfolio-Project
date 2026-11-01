import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Projects from './pages/Projects.jsx'

export default function App() {
  return (
    <>
      <a
        className="absolute -top-16 left-3 z-100 rounded-lg bg-accent px-4 py-2.5 font-bold text-on-accent focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

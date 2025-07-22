import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './hero.jsx'
import About from './about.jsx'
import Skills from './Skills.jsx'
import ProjectsSection from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
    <Skills />
    <ProjectsSection />
    </StrictMode>
)

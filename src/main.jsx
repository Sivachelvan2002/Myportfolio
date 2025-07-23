import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './hero.jsx'
import About from './about.jsx'
import Skills from './Skills.jsx'
import ProjectsSection from './Projects.jsx'
import ContactSection from './Contact.jsx'
import FooterSection from './Footer.jsx'
import NavBar from './Nav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
    </StrictMode>
)

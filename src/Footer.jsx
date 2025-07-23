import { Github, Linkedin, Mail } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="py-8 px-4 md:py-12 bg-gradient-to-br from-gray-700 via-gray-950 to-black text-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0">
        {/* Name and Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">S.Sivachelvan</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/Sivachelvan2002" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/srimaheswaralingam-sivachelvan-56703b2a8/" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" aria-label="Email" className="hover:text-white transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

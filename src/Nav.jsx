import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-gray-700 via-gray-950 to-black text-gray-100 border-b-[1px] border-b-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-4xl font-black tracking-wide font-sans bg-gradient-to-r from-blue-400 via-purple-400/60 to-pink-400 bg-clip-text text-transparent">
            Selvan
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-xl">
            <a href="#home" className="hover:text-fuchsia-600 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-fuchsia-600 transition-colors duration-200">About</a>
            <a href="#skills" className="hover:text-fuchsia-600 transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-fuchsia-600 transition-colors duration-200">My projects</a>
            <a href="#contact" className="hover:text-fuchsia-600 transition-colors duration-200">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-gray-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 px-4 py-3 space-y-3">
          <a href="#home" className="block hover:text-fuchsia-600 transition-colors duration-200">Home</a>
          <a href="#about" className="block hover:text-fuchsia-600 transition-colors duration-200">About</a>
          <a href="#skills" className="block hover:text-fuchsia-600 transition-colors duration-200">Skills</a>
          <a href="#projects" className="block hover:text-fuchsia-600 transition-colors duration-200">My projects</a>
          <a href="#contact" className="block hover:text-fuchsia-600 transition-colors duration-200">Contact</a>
        </div>
      )}
    </nav>
  );
}

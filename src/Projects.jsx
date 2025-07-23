import React from "react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-700 via-gray-950 to-black">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-50">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full transition-all duration-300 animate-pulse md:hover:shadow-lg md:hover:scale-[1.02] border-2 border-fuchsia-800 bg-gradient-to-br from-gray-700 via-gray-950 to-black">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-6 flex justify-center items-center">
              <img
                src="coffee1.png"
                alt="E-commerce Storefront"
                className="w-96 h-full object-fill transition-transform duration-300  "
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-50 mb-3">Simple coffee shop website</h3>
            <p className="text-gray-200 mb-4 flex-grow">
              A simple and responsive coffee shop website built with HTML, CSS, and JavaScript. It showcases the menu, services, and brand in a clean and modern design.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-700 hover:animate-bounce">HTML</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 hover:animate-bounce">CSS</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-700 hover:animate-bounce">JAVASCRIPT</span>

            </div>
            <div className="flex gap-4 mt-auto">
              <a href="https://coffeeshop-123.netlify.app/#" className="px-5 py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 transform hover:-translate-1 transition shadow-sm">Live Demo</a>
              <a href="https://github.com/Sivachelvan2002/coffee-website.git" className="px-5 py-2 rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transform hover:-translate-1 transition shadow-sm">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gradient-to-br from-gray-700 via-gray-950 to-black rounded-2xl shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 border-fuchsia-800 animate-pulse ">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-6 flex justify-center items-center gap-4">
              <img
                src="budgetbuddy.png"
                alt="Expensive Tracker App"
                className="w-28 h-full object-fill transition-transform duration-300 "
              />
              <img
                src="ui1.png"
                alt="Expensive Tracker App"
                className="w-28 h-full object-fill transition-transform duration-300 "
              />
              <img
                src="ui2.png"
                alt="Expensive Tracker App"
                className="w-28 h-full object-fill transition-transform duration-300 "
              />
            </div>
            <h3 className="text-2xl font-semibold text-amber-50 mb-3">Task Management App UI</h3>
            <p className="text-gray-200 mb-4 flex-grow">
              This is a user interface design created in Figma featuring both light and dark mode. It offers a clean, modern layout with interactive prototype elements, focusing on user-friendly navigation and visual clarity
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 hover:animate-bounce">FIGMA</span>

            </div>
            <div className="flex gap-4 mt-auto">
              <a href="https://www.figma.com/proto/THGUOJSizQAni7Nizlvl5x/hcl?t=7aYuom9251D4LyqJ-1" className="px-5 py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 transform hover:-translate-1 transition shadow-sm">Live Demo</a>
              <a href="https://github.com/Sivachelvan2002/Budgetbuddy-ui.git" className="px-5 py-2 rounded-md text-gray-700 bg-white border border-gray-300  transform hover:-translate-1 transition shadow-sm">GitHub</a>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}

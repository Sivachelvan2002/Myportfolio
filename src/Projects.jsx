import React from "react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-700 via-gray-950 to-black">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-50">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
              <img
                src="coffee.png"
                alt="E-commerce Storefront"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Simple coffee shop website</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              A full-stack e-commerce application with product listings, shopping cart, and checkout functionality.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-700">Next.js</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">React</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-50 text-orange-700">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-rose-50 text-rose-700">PostgreSQL</span>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href="#" className="px-5 py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 transition shadow-sm">Live Demo</a>
              <a href="#" className="px-5 py-2 rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition shadow-sm">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
              <img
                src="/placeholder.svg?height=400&width=600&text=Task%20Manager"
                alt="Task Management App"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Task Management App</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              A responsive task management application with drag-and-drop reordering and user authentication.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">React</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700">TypeScript</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-rose-50 text-rose-700">Node.js</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">MongoDB</span>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href="#" className="px-5 py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 transition shadow-sm">Live Demo</a>
              <a href="#" className="px-5 py-2 rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 transition shadow-sm">GitHub</a>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}

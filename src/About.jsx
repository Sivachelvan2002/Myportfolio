import React from 'react'

function About() {
  return (
    <div>
      <section id="about" className="bg-gradient-to-br from-gray-700 via-gray-950 to-black text-white py-20 px-6 md:px-12">
        <div className="mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">

          {/* Profile Image */}
          <div className="group p-[3px] rounded-2xl bg-gradient-to-b from-blue-400/60 via-purple-400/20 to-pink-400/30 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:translate-x-4 hover:translate-y-4">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black rounded-full">
              <img
                src="sel.jpg"
                alt="Srimaheswaralingam Sivachelvan"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110 group-hover:shadow-lg"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-4 text-center md:text-left w-full md:w-3/5 rounded-2xl overflow-hidden border-4 border-purple-600 shadow-lg p-6 md:p-8 transition-all duration-500 transform hover:-translate-x-5 hover:-translate-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About <span className="text-purple-700">Me</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="text-purple-400 font-semibold">Srimaheswaralingam Sivachelvan</span>, a passionate <strong>Frontend Developer</strong> and <strong>UI Designer</strong> based in Jaffna, Sri Lanka.
            </p>
            <p className="text-base text-gray-400">
              I specialize in crafting responsive, user-centric websites using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and modern frontend tools. I focus on clean code, smooth UI, and optimal performance to deliver great user experiences.
            </p>
            <p className="text-base text-gray-400">
              Outside of coding, I enjoy exploring new design trends, building side projects, and staying updated with the latest in frontend development.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

import React from 'react'

function about() {
    return (
        <div>
            <section id="about" className=" bg-gradient-to-br from-gray-700 via-gray-950 to-black text-white py-20 px-6 md:px-12">
                <div className="container mx-auto grid md:grid-cols-2 items-center gap-1">

                    {/* Profile Image */}
                    <div className="group p-[3px] rounded-2xl bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 w-64 h-64 md:w-80 md:h-90 shadow-xl hover:shadow-2xl transition-all duration-500 ">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                            <img
                                src="sel.jpg"
                                alt="Srimaheswaralingam Sivachelvan"
                                loading="lazy"
                                className="w-full h-full object-cover rounded-2xl transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110 group-hover:shadow-lg"
                            />
                        </div>
                    </div>



                    {/* About Content */}
                    <div className="space-y-5 text-center md:text-left h-64 md:h-90 rounded-2xl overflow-hidden border-4 border-purple-600 shadow-lg p-4">
                        <h2 className="text-3xl md:text-6xl font-bold text-white">
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

export default about
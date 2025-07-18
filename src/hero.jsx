import React from "react";
import './App.css';
import Typewriter from 'typewriter-effect';


function Hero() {
    return (
        <>
            <section className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-950 to-black text-white relative overflow-hidden py-2 md:py-3 px-4 md:px-8">
            {/* Background circles */}
            <div className="absolute top-24 left-4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/30 blur-3xl animate-spin-slow" />
            <div className="absolute bottom-24 right-24 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/10 blur-3xl animate-spin-slow-reverse" />
            <div className="relative z-10 container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ">

                {/* Left content */}
                <div className="space-y-3 text-center lg:text-left order-2 md:order-1">
                    <span className="inline-block px-4 py-2  rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-blue-200 font-medium border border-blue-600/10 backdrop-blur-sm">
                        👋 Hello, I'm
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight ">
                        <span className="block text-white  ">Srimaheswaralingam</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400/60 to-pink-400 bg-clip-text text-transparent">
                            Sivachelvan
                        </span>
                    </h1>

                    <h2 className="text-2xl text-grey-300 font-semibold">
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'UI Designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /> 
                    </h2>

                    <p className="max-w-2xl text-gray-400/90 leading-relaxed text-lg">
                       I'm Srimaheswaralingam Sivachelvan, a passionate Frontend Developer & UI Designer based in jaffna. I specialize in building high-performance, responsive web apps using React.js, Tailwind CSS, and modern JavaScript. I turn complex problems into elegant solutions through clean code, accessible UI, and fast user experiences.
                    </p>

                    {/* Skills */}
                    <div className="flex justify-center lg:justify-start gap-6 text-sm font-medium text-blue-400">
                        <span className="flex items-center gap-2">💻 Frontend</span>
                        <span className="flex items-center gap-2 text-purple-400">🎨 UI Design</span>
                        <span className="flex items-center gap-2 text-pink-400">⚡ Performance</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
                            aria-label="Download my resume"
                        >
                            📥 Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border border-white/20 hover:border-white/30 backdrop-blur-sm transition-colors duration-300"
                            aria-label="Contact me"
                        >
                            ✉️ Contact Me →
                        </a>
                    </div>
                </div>

                {/* Right image/avatar placeholder */}
                <div className="flex justify-center items-center  order-1 md:order-2 relative ">
                    <div className="bg-gradient-to-r border-2 border-b-grey-600 from-blue-500/10 to-grey-500/30 w-80 md:w-96 h-80 md:-h-96 rounded-2xl flex justify-center items-cente animate-spin absolute top-0 z-0"></div>

                    <div className="rounded-full   hover:animate-ping ">
                        <img
                            src="sel.jpg"
                            alt="Srimaheswaralingam Sivachelvan"
                            className=" object-cover rounded-full h-80 md:h-90 w-80 md:w-90 z-40 "
                        />
                    </div>
                    {/* Optional overlay image */}
                    

                    {/* Spinning border circle */}
                   
                        

                   

                </div>

            </div>







        </section>

   


        </>
       


    );
}

export default Hero;

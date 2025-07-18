"use client"
import React from "react"
import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiGit,
  SiBootstrap,
  SiTailwindcss,
 
} from "react-icons/si"




function About() {
  const skills = [
    { icon: <SiHtml5 size={36} color="#e44d26" />, title: "HTML5" },
    { icon: <SiCss3 size={36} color="#264de4" />, title: "CSS3" },
    { icon: <SiJavascript size={36} color="#f0db4f" />, title: "JavaScript" },
    { icon: <SiReact size={36} color="#61DBFB" />, title: "React" },
    { icon: <SiFigma size={36} color="#F24E1E" />, title: "Figma" },
    { icon: <SiGit size={36} color="#F1502F" />, title: "Git" },
    { icon: <SiBootstrap size={36} color="#563d7c" />, title: "Bootstrap" },
    { icon: <SiTailwindcss size={36} color="#38bdf8" />, title: "Tailwind CSS" },
    
    
  ]

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-6 md:px-16 text-white"
    >
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight ">
         Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 p-6 rounded-2xl shadow-md flex flex-col items-center space-y-3"
            >
              <div>{skill.icon}</div>
              <div className="text-white font-medium text-lg">{skill.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

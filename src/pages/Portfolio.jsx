import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectData from "../data/projectData";

export default function Portfolio() {
  const projects = Object.entries(projectData).map(([id, project]) => ({
    id,
    ...project,
  }));

  return (
    <section className="min-h-screen bg-[#050b16] text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-neonBlue mb-6 neon-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Portfolio
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We’ve worked on amazing projects for businesses and brands that
          believe in innovation and excellence.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg border border-[rgba(0,255,255,0.2)] hover:border-[rgba(0,255,255,0.6)]"
            >
              <Link to={`/portfolio/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                  <div className="btn-neon px-4 py-2 rounded-lg text-sm">
                    View Project
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">Want your brand here next?</h2>
          <Link
            to="/contact"
            className="btn-neon px-6 py-3 rounded-lg inline-block"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

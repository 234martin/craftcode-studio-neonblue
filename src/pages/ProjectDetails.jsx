import React from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found.</p>
      </div>
    );

  return (
    <section className="min-h-screen bg-[#050b16] text-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/portfolio"
          className="text-cyan-400 hover:underline text-sm mb-4 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <motion.h1
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {project.title}
        </motion.h1>

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl border border-[rgba(0,255,255,0.2)] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        <p className="text-gray-400 mb-6">{project.description}</p>

        <div className="mb-6">
          <h3 className="text-xl text-white font-semibold mb-2">Tools Used</h3>
          <ul className="flex flex-wrap gap-3">
            {project.tools.map((tool, i) => (
              <li
                key={i}
                className="bg-[rgba(0,255,255,0.1)] border border-[rgba(0,255,255,0.3)] rounded-full px-4 py-1 text-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl text-white font-semibold mb-2">Process</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {project.process.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-white font-semibold mb-2">Results</h3>
          <p className="text-gray-400">{project.results}</p>
        </div>

        <Link
          to="/contact"
          className="btn-neon px-6 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
}

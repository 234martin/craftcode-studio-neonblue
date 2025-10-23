import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NeonParticles from "../components/NeonParticles";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen text-white overflow-hidden bg-[#050b16]">
      {/* Neon Particle Background */}
      <NeonParticles />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-20 px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 neon-text drop-shadow-[0_0_20px_#00f0ff]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CraftCode Studio
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Digital experiences made with <span className="text-cyan-400 font-semibold">precision</span> — where creativity meets clean code.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/contact")}
            className="btn-neon px-8 py-3 text-lg rounded-lg hover:scale-105 transition-transform shadow-[0_0_15px_#00f0ff50]"
          >
            Start a Project
          </button>
          <Link
            to="/portfolio"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg rounded-lg transition-all"
          >
            View Work
          </Link>
        </motion.div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-5 text-cyan-400">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed text-base">
            At <span className="text-white font-semibold">CraftCode Studio</span>, we merge creative design with clean, powerful code.
            We specialize in building visually stunning, performance-driven digital experiences
            that help brands stand out and scale globally.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="mt-6 btn-neon px-6 py-2 rounded-lg text-sm hover:scale-105 transition-transform"
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-[rgba(255,255,255,0.05)] p-8 border border-[rgba(0,255,255,0.2)] backdrop-blur-md shadow-lg text-center hover:shadow-[0_0_25px_#00f0ff40] transition-all"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 italic leading-relaxed">
            “Design is intelligence made visible — and code is its invisible soul.”
          </p>
        </motion.div>
      </section>

      {/* Service Preview */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-12 text-cyan-400">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Web Design", desc: "Modern, sleek, and user-focused digital interfaces." },
            { title: "Brand Identity", desc: "Crafting powerful visual identities that speak to your audience." },
            { title: "Web Development", desc: "High-performance, scalable websites built for growth." },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 rounded-xl bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.2)] hover:border-[rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_#00f0ff40] transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => navigate("/services")}
          className="inline-block mt-12 btn-neon px-8 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          View All Services
        </button>
      </section>

      {/* Portfolio Preview */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-12 text-cyan-400">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { img: "/project1.jpg", title: "Brand Website Design", desc: "Clean, responsive, and brand-focused." },
            { img: "/project2.jpg", title: "E-commerce Platform", desc: "Seamless shopping experience built for performance." },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-[rgba(0,0,0,0.3)] rounded-xl overflow-hidden border border-[rgba(0,255,255,0.2)] hover:border-[rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_#00f0ff40] transition-all"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-4 text-left">
                <h3 className="font-semibold text-lg mb-1 text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => navigate("/portfolio")}
          className="inline-block mt-12 btn-neon px-8 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          View Portfolio
        </button>
      </section>

      {/* CTA */}
      <section className="text-center py-24 bg-[rgba(0,10,20,0.8)] border-t border-[rgba(0,255,255,0.2)]">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Let’s turn your vision into a digital masterpiece that inspires.
        </p>
        <a
          href="mailto:hello@craftcodestudio.com"
          className="btn-neon px-10 py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>
      </section>
    </section>
  );
}

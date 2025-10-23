import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "We create visually appealing and conversion-focused designs that tell your story beautifully.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      desc: "From responsive websites to complex web apps — we build experiences that perform seamlessly.",
      icon: "💻",
    },
    {
      title: "Brand Identity",
      desc: "We help businesses establish their unique identity with powerful logos and brand systems.",
      icon: "🚀",
    },
    {
      title: "UI/UX Design",
      desc: "Pixel-perfect interfaces that prioritize usability and delight your audience.",
      icon: "🧩",
    },
    {
      title: "SEO Optimization",
      desc: "Boost your visibility with proven SEO strategies that drive traffic and growth.",
      icon: "📈",
    },
    {
      title: "Digital Strategy",
      desc: "Align your brand goals with the right technology and creative approach for success.",
      icon: "🧠",
    },
  ];

  return (
    <section className="min-h-screen bg-[#050b16] text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-neonBlue mb-6 neon-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At CraftCode Studio, we merge design brilliance with development mastery to create standout digital experiences.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[rgba(0,0,0,0.3)] border border-[rgba(0,255,255,0.2)] hover:border-[rgba(0,255,255,0.5)] backdrop-blur-md p-8 rounded-2xl transition shadow-md"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Ready to bring your idea to life?
          </h2>
          <Link
            to="/contact"
            className="btn-neon px-6 py-3 rounded-lg inline-block"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}

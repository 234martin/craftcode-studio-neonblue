// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    company: "EcoTravel Africa",
    feedback: "Martin completely transformed our website. The results exceeded expectations!",
  },
  {
    name: "John Smith",
    company: "CodeLearn Academy",
    feedback: "Professional, creative, and very responsive. Highly recommend!",
  },
  {
    name: "Sara Lee",
    company: "Bold Agency",
    feedback: "Delivered an amazing design that helped boost our client engagement by 50%.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0b1220] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-neonBlue mb-12 neon-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Clients Say
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#050b16] p-6 rounded-xl border border-[rgba(0,255,255,0.2)]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-gray-300 mb-4">"{t.feedback}"</p>
              <h3 className="font-semibold text-white">{t.name}</h3>
              <p className="text-cyan-400 text-sm">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

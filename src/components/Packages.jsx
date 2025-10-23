// src/components/Packages.jsx
import React from "react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Basic Website",
    price: "$500",
    features: ["5 Pages", "Responsive Design", "Basic SEO", "1 Revision"],
  },
  {
    title: "Advanced Website",
    price: "$1200",
    features: ["10 Pages", "Custom UI/UX", "SEO Optimization", "3 Revisions"],
  },
  {
    title: "Full Branding + Web",
    price: "$2500",
    features: ["Brand Identity", "Custom Website", "SEO + Analytics", "Unlimited Revisions"],
  },
];

export default function Packages() {
  return (
    <section className="bg-[#050b16] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-neonBlue mb-12 neon-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pricing & Packages
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              className="bg-[#0b1220] p-6 rounded-xl border border-[rgba(0,255,255,0.2)] hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="text-cyan-400 text-xl font-semibold mb-4">{pkg.price}</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="btn-neon px-6 py-2 rounded-lg"
              >
                Start This Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

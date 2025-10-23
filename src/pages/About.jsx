import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function About() {
  const team = [
    {
      name: "Martin Kihungi",
      role: "Creative Director / Lead Developer",
      img: "/team/martin.jpg",
      linkedin: "https://linkedin.com/in/martinotieno",
      github: "https://github.com/234martin",
      instagram: "https://instagram.com/martin.codes",
    },
    {
      name: "Ashley Anne",
      role: "UI/UX Designer",
      img: "/team/ashley.jpg",
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
    {
      name: "Austin Muroki",
      role: "Marketing & Strategy",
      img: "/team/austin.jpg",
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-gray-300 flex flex-col items-center pt-28 pb-20 px-6">
      {/* INTRO */}
      <div className="max-w-5xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-cyan-400">CraftCode Studio</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          We’re a passionate digital agency crafting high-end websites, apps,
          and creative solutions that empower businesses to thrive in the
          modern era. Every pixel we design and every line of code we write
          is driven by excellence, innovation, and results.
        </p>
      </div>

      {/* OUR MISSION */}
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To bridge creativity and technology through human-centered design
            and flawless development. We aim to build brands and products
            that people love — from startups to global enterprises.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To be Africa’s most trusted creative tech partner — shaping
            the future of digital experiences that inspire, engage,
            and deliver measurable growth.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="max-w-6xl text-center mb-14">
        <h2 className="text-3xl font-bold text-white mb-8">Meet the Team</h2>
        <p className="text-gray-400 mb-10">
          Behind every successful project is a team of passionate designers,
          developers, and strategists who turn ideas into impact.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all overflow-hidden"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-cyan-400 mb-4 shadow-[0_0_20px_#00f0ff80] group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-white font-semibold">{member.name}</h3>
              <p className="text-cyan-400 text-sm mb-4">{member.role}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-xl hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-xl hover:text-white transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-xl hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Want to work with us?
        </h2>
        <p className="text-gray-400 mb-6">
          Let’s collaborate to create digital experiences that truly stand out.
        </p>
        <a
          href="mailto:hello@craftcodestudio.com"
          className="btn-neon px-6 py-3 rounded-lg shadow-[0_0_15px_#00f0ff] hover:scale-105 transition-transform"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-20 top-0 transition backdrop-blur-sm ${
        scrolled ? "bg-[rgba(8,12,16,0.8)] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="CraftCode Studio"
            className="w-20 h-20 drop-shadow-[0_0_20px_#00f0ff]"
          />
          <div className="cursor-default">
            <div className="text-white font-bold text-2xl tracking-wide">
              CraftCode Studio
            </div>
            <div className="text-xs text-gray-400">
              Digital experiences made with precision.
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-sm items-center text-gray-300">
          <Link
            to="/"
            className={`nav-underline ${
              loc.pathname === "/" ? "text-white" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`nav-underline ${
              loc.pathname === "/about" ? "text-white" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/services"
            className={`nav-underline ${
              loc.pathname === "/services" ? "text-white" : ""
            }`}
          >
            Services
          </Link>

          <Link
            to="/portfolio"
            className={`nav-underline ${
              loc.pathname === "/portfolio" ? "text-white" : ""
            }`}
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className={`nav-underline ${
              loc.pathname === "/contact" ? "text-white" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <button
          onClick={openModal}
          className="btn-neon px-4 py-2 rounded-lg text-sm shadow-[0_0_10px_#00f0ff] hover:scale-105 transition-transform"
        >
          Start a Project
        </button>
      </div>
    </header>
  );
}

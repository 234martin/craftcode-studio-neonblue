import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all backdrop-blur-sm ${
        scrolled ? "bg-[rgba(8,12,16,0.95)] shadow-lg" : "bg-[rgba(8,12,16,0.85)]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="CraftCode Studio"
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_20px_#00f0ff]"
          />
          <div className="cursor-default">
            <div className="text-white font-bold text-xl sm:text-2xl tracking-wide">
              CraftCode Studio
            </div>
            <div className="text-xs text-gray-400">
              Digital experiences made with precision.
            </div>
          </div>
        </div>

        {/* NAV LINKS - Desktop */}
        <nav className="hidden md:flex gap-8 text-sm items-center text-gray-300">
          <Link to="/" className={loc.pathname === "/" ? "text-white" : ""}>Home</Link>
          <Link to="/about" className={loc.pathname === "/about" ? "text-white" : ""}>About</Link>
          <Link to="/services" className={loc.pathname === "/services" ? "text-white" : ""}>Services</Link>
          <Link to="/portfolio" className={loc.pathname === "/portfolio" ? "text-white" : ""}>Portfolio</Link>
          <Link to="/contact" className={loc.pathname === "/contact" ? "text-white" : ""}>Contact</Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={openModal}
            className="btn-neon px-4 py-2 rounded-lg text-sm shadow-[0_0_10px_#00f0ff] hover:scale-105 transition-transform"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-2xl px-2 py-1"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050b16] text-white flex flex-col items-center py-6 gap-4 border-t border-[rgba(0,255,255,0.2)] z-40 relative">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => { openModal(); setMobileMenuOpen(false); }}
            className="btn-neon px-4 py-2 rounded-lg text-sm shadow-[0_0_10px_#00f0ff] hover:scale-105 transition-transform"
          >
            Start a Project
          </button>
        </div>
      )}
    </header>
  );
}

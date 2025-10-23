import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img src="/logo.svg" alt="CraftCode Studio" className="w-16 h-16" />
          <span className="text-white font-bold">CraftCode Studio</span>
          <span className="text-sm text-gray-400">
            Digital experiences made with precision.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-white">Quick Links</span>
          <Link to="/" className="hover:text-cyan-400">Home</Link>
          <Link to="/services" className="hover:text-cyan-400">Services</Link>
          <Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link>
          <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-white">Follow Us</span>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-cyan-400"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-cyan-400"><FaGithub /></a>
            <a href="#" className="hover:text-cyan-400"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} CraftCode Studio. All rights reserved.
      </div>
    </footer>
  );
}

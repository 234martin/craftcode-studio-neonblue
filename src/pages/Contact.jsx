import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setErrorMsg("");

    emailjs
      .sendForm(
        "service_f9xr2sr", // Your Service ID
        "template_trxb1kq", // Your Template ID
        form.current,
        "TwyDS-pTH3k0D3fEE" // Your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result);
          setSent(true);
          e.target.reset();
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          setErrorMsg(error.text || "Failed to send email. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-screen bg-[#050b16] text-white pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-neonBlue mb-4 neon-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Create Something Amazing
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Have a project idea or want a free consultation? Fill the form below, and we’ll get back to you within 24 hours. Or reach out directly via WhatsApp or Email.
        </motion.p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <input
            type="text"
            name="projectType"
            placeholder="Project Type (e.g. Web Design, Branding...)"
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget Range (e.g. $500 - $2000)"
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 focus:ring-2 focus:ring-cyan-400 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`btn-neon w-full py-3 rounded-lg font-semibold ${loading ? "opacity-70" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success / Error Messages */}
        {sent && (
          <p className="text-green-400 mt-4 text-center animate-pulse">
            ✅ Message sent successfully! Check your inbox (or spam). We’ll respond shortly.
          </p>
        )}
        {errorMsg && (
          <p className="text-red-400 mt-4 text-center">{errorMsg}</p>
        )}

        {/* Quick Contact Links */}
        <div className="flex justify-center gap-6 mt-12 text-2xl">
          <a href="https://linkedin.com/in/martinkihungi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaLinkedin /></a>
          <a href="https://github.com/234martin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaGithub /></a>
          <a href="https://instagram.com/martinkihungi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaInstagram /></a>
          <a href="https://twitter.com/martinkihungi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaTwitter /></a>
          <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaWhatsapp /></a>
        </div>

        {/* Optional CTA Button */}
        <div className="mt-12">
          <a
            href="mailto:dawgg708@gmail.com"
            className="btn-neon px-8 py-3 rounded-lg hover:scale-105 transition-transform"
          >
            Send Email Directly
          </a>
        </div>

      </div>
    </section>
  );
}

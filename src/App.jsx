import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectModal from "./components/ProjectModal";

// New section modal
import QuoteCalculator from "./components/QuoteCalculator";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false); // ✅ new state

  return (
    <>
      <Header openModal={() => setModalOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* other sections */}
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
      </Routes>

      {modalOpen && <ProjectModal closeModal={() => setModalOpen(false)} />}

      {quoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#050b16] rounded-2xl p-6 w-full max-w-lg relative">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold"
            >
              ×
            </button>
            <QuoteCalculator />
          </div>
        </div>
      )}

      <Footer />

      {/* Sticky "Get a Quote" Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-8 right-8 bg-neonBlue text-white font-bold px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
      >
        Get a Quote
      </button>
    </>
  );
}

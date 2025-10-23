import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function QuoteCalculator() {
  const form = useRef();
  const [quote, setQuote] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const basePrices = {
    "Web Design": 500,
    "Branding": 300,
    "E-commerce": 1000,
    "Mobile App": 1200,
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const projectType = formData.get("projectType");
    const complexity = parseInt(formData.get("complexity"), 10);

    const price = (basePrices[projectType] || 0) * complexity;
    setQuote(price);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_f9xr2sr",     // ✅ Your EmailJS Service ID
        "template_trxb1kq",    // ✅ Your Template ID
        form.current,
        "TwyDS-pTH3k0D3fEE"   // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Quote Email sent:", result);
          setSent(true);
          form.current.reset();
          setQuote(0);
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Get Your Quote</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 outline-none"
        />

        <select
          name="projectType"
          required
          className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 outline-none"
        >
          <option value="">Select Project Type</option>
          <option value="Web Design">Web Design</option>
          <option value="Branding">Branding</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Mobile App">Mobile App</option>
        </select>

        <select
          name="complexity"
          required
          className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 outline-none"
        >
          <option value="1">Simple</option>
          <option value="2">Moderate</option>
          <option value="3">Complex</option>
        </select>

        <textarea
          name="message"
          rows="3"
          placeholder="Additional Details"
          className="w-full p-3 rounded-lg bg-[#0b1220] border border-cyan-500 outline-none"
        ></textarea>

        <button
          type="button"
          onClick={handleCalculate}
          className="btn-neon w-full py-3 rounded-lg font-semibold"
        >
          Calculate Quote
        </button>

        {quote > 0 && (
          <p className="text-green-400 text-center font-bold">
            Estimated Price: ${quote}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`btn-neon w-full py-3 rounded-lg font-semibold ${
            loading ? "opacity-70" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Quote Request"}
        </button>
      </form>

      {sent && (
        <p className="text-green-400 mt-4 text-center animate-pulse">
          ✅ Quote request sent!
        </p>
      )}
    </div>
  );
}

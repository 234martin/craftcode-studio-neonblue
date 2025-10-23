import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ConsultationModal({ closeModal }) {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sendConsultation = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setErrorMsg("");

    emailjs.sendForm(
      "service_f9xr2sr", // Your EmailJS Service ID
      "template_trxb1kq", // Your EmailJS Template ID
      form.current,
      "TwyDS-pTH3k0D3fEE" // Your EmailJS Public Key
    ).then(
      () => {
        setSent(true);
        setLoading(false);
        e.target.reset();
      },
      (error) => {
        console.error("❌ EmailJS Error:", error);
        setErrorMsg(error.text || "Failed to send email.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-[#050b16] p-6 rounded-xl max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 font-bold"
        >
          X
        </button>
        <h2 className="text-cyan-400 font-bold text-2xl mb-4">Free Consultation</h2>

        {sent ? (
          <p className="text-green-400">✅ Your request has been sent! Check your email.</p>
        ) : (
          <form ref={form} onSubmit={sendConsultation} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#0b1220] border border-cyan-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-[#0b1220] border border-cyan-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-[#0b1220] border border-cyan-500"
            />
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
            <button
              type="submit"
              disabled={loading}
              className="btn-neon w-full py-2"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

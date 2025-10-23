import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ProjectModal({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          closeModal();
        },
        (error) => {
          console.error(error);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <form
        className="bg-gray-900 p-6 rounded-lg w-96 flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-xl mb-2">Start a Project</h2>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="projectType"
          placeholder="Project Type"
          value={formData.projectType}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />
        <input
          name="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded mt-2"
        >
          Send
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="text-gray-400 hover:text-white mt-1"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

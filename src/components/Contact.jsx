import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-teal-400">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaEnvelope className="text-2xl text-teal-400" />
            <span className="font-bold">jayjayanth345@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaPhoneAlt className="text-2xl text-teal-400" />
            <span className="font-bold">+91 9347038049</span>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaGithub className="text-2xl text-teal-400" />
            <a
              href="https://github.com/JayanthPenta"
              target="_blank"
              className="font-bold"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaLinkedin className="text-2xl text-teal-400" />
            <a
              href="https://www.linkedin.com/in/jayanth-penta-a69118249"
              target="_blank"
              className="font-bold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          <button className="w-full bg-teal-500 py-3 rounded text-black font-bold hover:bg-transparent
    hover:text-teal-400
    hover:shadow-[0_4px_16px_rgba(20,184,166,0.4)]">
            Send Message
          </button>

          {status && <p className="mt-3 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}

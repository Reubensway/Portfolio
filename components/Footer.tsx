"use client";
import React, { useState } from "react";

const Footer: React.FC<{}> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-[2]">
      <div className="container mx-auto 2xl px-6 pt-[50px] pb-8">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-white font-semibold text-4xl mb-4">Get in touch</h2>
          <p className="text-gray-400 mb-8">
            I&apos;m always interested in exploring new opportunities, collaborating, or
            exchanging ideas with like-minded individuals. Feel free to book a call or
            email me if you&apos;d like to see my portfolio deck or to discuss a potential
            project.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-gray-500"
              />
            </div>
            <textarea
              placeholder="Write your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-gray-500 resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-white text-black font-semibold py-4 px-8 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()} &bull; Reuben Irantiola &bull; All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

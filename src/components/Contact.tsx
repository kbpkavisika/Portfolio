"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "✉️",
      label: "EMAIL",
      value: "hello@yourdomain.dev",
      link: "mailto:hello@yourdomain.dev"
    },
    {
      icon: "📞",
      label: "CALL",
      value: "+880 17XX-XXXX",
      link: "tel:+8801700000000"
    },
    {
      icon: "📍",
      label: "LOCATION",
      value: "Dhaka, Bangladesh",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6">
          <span className="gradient-text">CONTACT</span>
        </h2>

        <div className="text-center mb-16">
          <p className="text-xl text-gray-300 mb-2">GET IN TOUCH</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            "Have an idea, a dream, or just curiosity? Let's turn it into something beautiful together."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="block p-6 bg-gradient-to-br from-[#1a1a2e] to-[#0f1729] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold mb-1">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", icon: "💻", url: "#" },
                  { name: "LinkedIn", icon: "💼", url: "#" },
                  { name: "Twitter", icon: "🐦", url: "#" },
                  { name: "Instagram", icon: "📷", url: "#" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300 glow-blue"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden md:block pt-8">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
                <div className="relative text-6xl">📧</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f1729] p-8 rounded-2xl border border-cyan-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 glow-cyan hover:scale-105"
                >
                  SUBMIT
                </button>
              </form>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "Email",
      value: "kbpkavisika@gmail.com",
      description: "Best for detailed project discussions",
      link: "mailto:kbpkavisika@gmail.com"
    },
    {
      title: "Phone",
      value: "+94 71 882 7129",
      description: "For urgent project discussions",
      link: "tel:+94718827129"
    },
    {
      title: "LinkedIn",
      value: "Pavith Kavisika",
      description: "Professional networking and opportunities",
      link: "https://linkedin.com/in/pavithkavisika"
    },
    {
      title: "GitHub",
      value: "kbpkavisika",
      description: "View my code repositories and contributions",
      link: "https://github.com/kbpkavisika"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">LET'S WORK TOGETHER</span>
          </h2>
          <div className="w-24 h-1 bg-[#8EFF00] mx-auto mb-6"></div>
          <p className="text-[#EFECE3]/80 text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#8EFF00] mb-4">Get In Touch</h3>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-black border border-[#EFECE3]/20 rounded-lg hover:border-[#8EFF00]/50 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#EFECE3] group-hover:text-[#8EFF00] transition-colors">
                      {method.title}
                    </h4>
                    <svg className="w-4 h-4 text-[#EFECE3]/50 group-hover:text-[#8EFF00] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-[#EFECE3] font-medium mb-1">{method.value}</p>
                  <p className="text-[#EFECE3]/70 text-sm">{method.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-black border border-[#EFECE3]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#EFECE3] mb-6">Start a Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#EFECE3]/90 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#EFECE3]/90 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Company and Subject Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#EFECE3]/90 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#EFECE3]/90 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] focus:outline-none focus:border-[#8EFF00] transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="web-application">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="api-development">API Development</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#EFECE3]/90 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors resize-none"
                    placeholder="Please describe your project requirements, timeline, and budget range..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105"
                >
                  Send Project Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

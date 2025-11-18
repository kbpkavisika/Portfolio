"use client";

import { useState } from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
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
      link: "mailto:kbpkavisika@gmail.com",
      type: "email"
    },
    {
      title: "Phone",
      value: "+94 71 882 7129",
      description: "For urgent project discussions",
      link: "tel:+94718827129",
      type: "phone"
    },
    {
      title: "LinkedIn",
      value: "Pavith Kavisika",
      description: "Professional networking and opportunities",
      link: "https://linkedin.com/in/pavithkavisika",
      type: "linkedin"
    },
    {
      title: "GitHub",
      value: "kbpkavisika",
      description: "View my code repositories and contributions",
      link: "https://github.com/kbpkavisika",
      type: "github"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const contactMethodVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getContactIcon = (type: string) => {
    const iconProps = {
      size: 24,
      className: "text-[#8EFF00] group-hover:text-[#7AE600] transition-colors"
    };

    switch (type) {
      case 'email':
        return <Mail {...iconProps} />;
      case 'phone':
        return <Phone {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'github':
        return <Github {...iconProps} />;
      default:
        return <Mail {...iconProps} />;
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="gradient-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              LET'S WORK TOGETHER
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#8EFF00] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-[#EFECE3]/80 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              className="space-y-4"
              variants={contactMethodVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h3
                className="text-xl font-semibold text-[#8EFF00] mb-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Get In Touch
              </motion.h3>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-black border border-[#EFECE3]/20 rounded-lg hover:border-[#8EFF00]/50 transition-all duration-300 group"
                  variants={contactItemVariants}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(142, 255, 0, 0.5)",
                    boxShadow: "0 0 20px rgba(142, 255, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0]
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {getContactIcon(method.type)}
                      </motion.div>
                      <motion.h4
                        className="font-semibold text-[#EFECE3] group-hover:text-[#8EFF00] transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {method.title}
                      </motion.h4>
                    </div>
                    <motion.svg
                      className="w-4 h-4 text-[#EFECE3]/50 group-hover:text-[#8EFF00] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{
                        x: 3,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </div>
                  <motion.p
                    className="text-[#EFECE3] font-medium mb-1"
                    whileHover={{ color: "#8EFF00" }}
                    transition={{ duration: 0.3 }}
                  >
                    {method.value}
                  </motion.p>
                  <motion.p
                    className="text-[#EFECE3]/70 text-sm"
                    whileHover={{ color: "rgba(239, 236, 227, 0.9)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {method.description}
                  </motion.p>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="relative"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-black border border-[#EFECE3]/20 rounded-lg p-8"
              whileHover={{
                borderColor: "rgba(142, 255, 0, 0.3)",
                boxShadow: "0 0 30px rgba(142, 255, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-[#EFECE3] mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Start a Project
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#EFECE3]/90 mb-2"
                      whileHover={{ color: "#8EFF00" }}
                      transition={{ duration: 0.3 }}
                    >
                      Full Name *
                    </motion.label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors"
                      placeholder="John Doe"
                      whileFocus={{
                        scale: 1.02,
                        borderColor: "#8EFF00",
                        boxShadow: "0 0 10px rgba(142, 255, 0, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#EFECE3]/90 mb-2"
                      whileHover={{ color: "#8EFF00" }}
                      transition={{ duration: 0.3 }}
                    >
                      Email Address *
                    </motion.label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors"
                      placeholder="john@example.com"
                      whileFocus={{
                        scale: 1.02,
                        borderColor: "#8EFF00",
                        boxShadow: "0 0 10px rgba(142, 255, 0, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Company and Subject Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[#EFECE3]/90 mb-2"
                      whileHover={{ color: "#8EFF00" }}
                      transition={{ duration: 0.3 }}
                    >
                      Company/Organization
                    </motion.label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors"
                      placeholder="Your Company"
                      whileFocus={{
                        scale: 1.02,
                        borderColor: "#8EFF00",
                        boxShadow: "0 0 10px rgba(142, 255, 0, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-[#EFECE3]/90 mb-2"
                      whileHover={{ color: "#8EFF00" }}
                      transition={{ duration: 0.3 }}
                    >
                      Project Type *
                    </motion.label>
                    <motion.select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] focus:outline-none focus:border-[#8EFF00] transition-colors"
                      whileFocus={{
                        scale: 1.02,
                        borderColor: "#8EFF00",
                        boxShadow: "0 0 10px rgba(142, 255, 0, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <option value="">Select project type</option>
                      <option value="web-application">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="api-development">API Development</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="other">Other</option>
                    </motion.select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#EFECE3]/90 mb-2"
                    whileHover={{ color: "#8EFF00" }}
                    transition={{ duration: 0.3 }}
                  >
                    Project Details *
                  </motion.label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-[#EFECE3]/30 rounded-lg text-[#EFECE3] placeholder-[#EFECE3]/50 focus:outline-none focus:border-[#8EFF00] transition-colors resize-none"
                    placeholder="Please describe your project requirements, timeline, and budget range..."
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#8EFF00",
                      boxShadow: "0 0 10px rgba(142, 255, 0, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(142, 255, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={isSubmitting ? { opacity: 0 } : { opacity: 1 }}
                  >
                    Send Project Inquiry
                  </motion.span>
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-[#8EFF00] to-[#7AE600] opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

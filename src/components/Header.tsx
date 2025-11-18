"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#EFECE3]/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-sm opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Image 
                src={logoImage} 
                alt="PK Logo" 
                width={48} 
                height={48} 
                className="relative z-10 transition-transform group-hover:scale-105 rounded-lg" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#EFECE3] font-bold text-lg leading-none">Pavith Kavisika</span>
            </div>
          </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-[#EFECE3]/80 hover:text-[#8EFF00] font-medium transition-all duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8EFF00] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-[#EFECE3] hover:text-[#8EFF00] font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-6 py-2 bg-linear-to-r from-[#8EFF00] to-[#7AE600] text-black font-semibold rounded-xl overflow-hidden shadow-lg shadow-[#8EFF00]/25 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(142, 255, 0, 0.3), 0 0 25px rgba(142, 255, 0, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#7AE600] to-[#6DD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <span className="relative z-10">Let's Talk</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#EFECE3] p-2 hover:text-[#8EFF00] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-[#EFECE3]/10 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-[#EFECE3]/80 hover:text-[#8EFF00] font-medium transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col gap-3 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#EFECE3] hover:text-[#8EFF00] font-medium transition-colors py-2"
                  >
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-linear-to-r from-[#8EFF00] to-[#7AE600] text-black font-semibold rounded-xl transition-all duration-300 text-center shadow-lg shadow-[#8EFF00]/25"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let's Talk
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
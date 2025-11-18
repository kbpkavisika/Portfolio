"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import logoImage from "../assets/logo.png";
import linkedinLogo from "../assets/linkedin.jpg";
import githubLogo from "../assets/git.png";
import emailLogo from "../assets/mail.jpg";
import phoneLogo from "../assets/tel.jpg";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black border-t border-[#EFECE3]/20 py-12 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src={logoImage} 
                alt="PK Logo" 
                width={40} 
                height={40} 
                className="rounded-lg" 
              />
              <span className="text-xl font-bold gradient-text">Pavith Kavisika</span>
            </div>
            <p className="text-[#EFECE3]/70 text-sm">
              Building innovative software solutions with clean architecture and user-centric design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-[#EFECE3] font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#EFECE3]/70 hover:text-[#8EFF00] transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Professional Connect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-[#EFECE3] font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Email", logo: emailLogo, url: "mailto:kbpkavisika@gmail.com", label: "kbpkavisika@gmail.com" },
                { name: "Phone", logo: phoneLogo, url: "tel:+94718827129", label: "+94 71 882 7129" },
                { name: "LinkedIn", logo: linkedinLogo, url: "https://linkedin.com/in/pavithkavisika", label: "LinkedIn Profile" },
                { name: "GitHub", logo: githubLogo, url: "https://github.com/kbpkavisika", label: "GitHub Profile" }
              ].map((connect) => (
                <a
                  key={connect.name}
                  href={connect.url}
                  className="flex items-center gap-3 text-[#EFECE3]/70 hover:text-[#8EFF00] transition-colors text-sm group"
                  title={connect.label}
                >
                  <Image
                    src={connect.logo}
                    alt={`${connect.name} logo`}
                    width={20}
                    height={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="group-hover:translate-x-1 transition-transform">{connect.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-[#EFECE3]/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#EFECE3]/70 text-sm">
            © {new Date().getFullYear()} Pavith Kavisika. Crafted with precision using Next.js
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
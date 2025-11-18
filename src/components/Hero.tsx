"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2
      }
    }
  };

  const metricsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const metricItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8EFF00] rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EFECE3] rounded-full filter blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Photo */}
        <motion.div
          className="shrink-0 mx-4 lg:mx-8"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="relative">
            <Image
              src="/dp.jpg"
              alt="Pavith Kavisika"
              width={350}
              height={350}
              className="w-[350px] h-[350px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] aspect-square rounded-full border-4 border-[#8EFF00] shadow-lg shadow-[#8EFF00]/20 transition-all duration-300 hover:border-[#7AE600] hover:shadow-[#8EFF00]/40"
            />
            <div className="absolute inset-0 rounded-full border-2 border-[#8EFF00]/50 shadow-lg shadow-[#8EFF00]/10" />
          </div>
        </motion.div>

        {/* Professional Introduction */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          style={{ y: textY }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#EFECE3]"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="gradient-text"
              whileHover={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PAVITH KAVISIKA
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#EFECE3]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Motivated Software Engineering undergraduate with a strong interest in developing innovative software solutions that address real-world needs. Passionate about designing user-focused digital experiences while continuously learning new technologies.
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto lg:mx-0"
            variants={metricsVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-center"
              variants={metricItemVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-[#8EFF00] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8
                }}
              >
                1+
              </motion.div>
              <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Years Studying</div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={metricItemVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-[#8EFF00] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9
                }}
              >
                6+
              </motion.div>
              <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Projects Built</div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={metricItemVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-[#8EFF00] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.0
                }}
              >
                10+
              </motion.div>
              <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Skills Learned</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(142, 255, 0, 0.5)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.span
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View My Work
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#8EFF00] to-[#7AE600]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-[#8EFF00] text-[#8EFF00] hover:text-[#7AE600] font-semibold rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                borderColor: "#7AE600",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.span
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Get In Touch
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-[#8EFF00] opacity-0 group-hover:opacity-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

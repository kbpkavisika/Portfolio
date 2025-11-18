"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const expertise = [
    "MERN Stack Development",
    "REST API Development",
    "Database Design",
    "Web Application Development",
    "Authentication Systems",
    "Frontend Development"
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
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

  const expertiseVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const expertiseItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const educationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.7
      }
    }
  };

  const educationItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const achievementItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen bg-black py-20 px-4">
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
              ABOUT ME
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#8EFF00] mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Professional Info */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-[#EFECE3] mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Software Engineering
                <motion.span
                  className="text-[#8EFF00] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Undergraduate
                </motion.span>
              </motion.h3>

              <motion.p
                className="text-[#EFECE3]/80 text-lg leading-relaxed mb-6"
                variants={itemVariants}
              >
                Motivated Software Engineering undergraduate at SLIIT with a proven track record in hackathons
                and real-world projects. Passionate about developing innovative software solutions that address
                real-world needs, from disaster management platforms to fitness management systems.
              </motion.p>

              <motion.p
                className="text-[#EFECE3]/80 text-lg leading-relaxed"
                variants={itemVariants}
              >
                Awarded 1st Runners Up in SLIIT Codefest 2025 and reached 3rd round in Tech Triathlon.
                Excel in team-based projects, combining technical expertise with user-centered design to
                deliver reliable, scalable solutions using modern web technologies.
              </motion.p>
            </motion.div>

            {/* Core Expertise */}
            <motion.div variants={itemVariants}>
              <motion.h4
                className="text-xl font-semibold text-[#8EFF00] mb-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                CORE EXPERTISE
              </motion.h4>
              <motion.div
                className="grid grid-cols-2 gap-3"
                variants={expertiseVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-3 bg-black border border-[#8EFF00]/30 rounded-lg text-center text-sm font-medium text-[#EFECE3] hover:border-[#8EFF00] hover:bg-[#8EFF00]/5 transition-all duration-300 cursor-pointer"
                    variants={expertiseItemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#8EFF00",
                      backgroundColor: "rgba(142, 255, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Professional Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-6"
              variants={statsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                className="text-center"
                variants={statItemVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#8EFF00] mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(142, 255, 0, 0)",
                      "0 0 20px rgba(142, 255, 0, 0.5)",
                      "0 0 0px rgba(142, 255, 0, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  1+
                </motion.div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Years Studying</div>
              </motion.div>

              <motion.div
                className="text-center"
                variants={statItemVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#8EFF00] mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(142, 255, 0, 0)",
                      "0 0 20px rgba(142, 255, 0, 0.5)",
                      "0 0 0px rgba(142, 255, 0, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                >
                  6+
                </motion.div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Projects Built</div>
              </motion.div>

              <motion.div
                className="text-center"
                variants={statItemVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#8EFF00] mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(142, 255, 0, 0)",
                      "0 0 20px rgba(142, 255, 0, 0.5)",
                      "0 0 0px rgba(142, 255, 0, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 2
                  }}
                >
                  10+
                </motion.div>
                <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Skills Learned</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Education & Achievements */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              className="p-6 bg-black border border-[#EFECE3]/20 rounded-lg"
              variants={itemVariants}
              whileHover={{
                borderColor: "rgba(142, 255, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="text-xl font-semibold text-[#8EFF00] mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                EDUCATION
              </motion.h4>
              <motion.div
                className="space-y-4"
                variants={educationVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div
                  variants={educationItemVariants}
                >
                  <h5 className="text-[#EFECE3] font-medium">BSc (Hons) in Information Technology</h5>
                  <p className="text-[#EFECE3]/70 text-sm">Sri Lanka Institute of Information Technology (SLIIT) • <span className="text-white font-bold">Oct 2023 – Present</span></p>
                  <p className="text-[#EFECE3]/80 text-sm">Specializing in Software Engineering</p>
                </motion.div>
                <motion.div
                  className="pt-3 border-t border-[#EFECE3]/10"
                  variants={educationItemVariants}
                >
                  <h5 className="text-[#EFECE3] font-medium">GCE Advanced Level</h5>
                  <p className="text-[#EFECE3]/70 text-sm">Mahanama College (Colombo) • <span className="text-white font-bold">2022</span></p>
                </motion.div>
                <motion.div
                  className="pt-3 border-t border-[#EFECE3]/10"
                  variants={educationItemVariants}
                >
                  <h5 className="text-[#EFECE3] font-medium">GCE Ordinary Level</h5>
                  <p className="text-[#EFECE3]/70 text-sm">Mahanama College (Colombo) • <span className="text-white font-bold">2019</span></p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="p-6 bg-black border border-[#EFECE3]/20 rounded-lg"
              variants={itemVariants}
              whileHover={{
                borderColor: "rgba(142, 255, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="text-xl font-semibold text-[#8EFF00] mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                ACHIEVEMENTS
              </motion.h4>
              <motion.div
                className="space-y-3"
                variants={achievementVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div
                  className="flex items-start space-x-3"
                  variants={achievementItemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-[#8EFF00] rounded-full mt-2 shrink-0"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2
                    }}
                  />
                  <div>
                    <h5 className="text-[#EFECE3] font-medium">1st Runners Up – SLIIT Codefest 2025</h5>
                    <p className="text-[#EFECE3]/70 text-sm">Revivenation Competition</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-3"
                  variants={achievementItemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-[#8EFF00] rounded-full mt-2 shrink-0"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2.5
                    }}
                  />
                  <div>
                    <h5 className="text-[#EFECE3] font-medium">3rd Round – Tech Triathlon</h5>
                    <p className="text-[#EFECE3]/70 text-sm">Organized by Rootcode</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ResQ – National Disaster Platform",
      category: "Full-Stack Application",
      description: "A comprehensive disaster response platform that won 1st Runners Up in SLIIT Codefest 2025. Features real-time disaster alerts, SOS requests, and resource allocation with integrated APIs for cross-agency collaboration.",
      image: "/projects/resq.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Recharts", "JWT", "REST API"],
      features: [
        "Real-time disaster alerts and tracking",
        "SOS request system with geolocation",
        "Analytics dashboard with data visualization",
        "Role-based access control (citizen, responder, admin)",
        "Integrated APIs (SLUDI, Commercial Bank PayDPI, NDX)"
      ],
      metrics: {
        achievement: "1st Runners Up",
        competition: "SLIIT Codefest 2025",
        impact: "National Scale"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/disaster-response-sl/national-disaster-platform",
      caseStudyUrl: "#"
    },
    {
      id: 2,
      title: "Ceylon Smart Citizen",
      category: "Government Services Platform",
      description: "A digital governance solution for 20+ citizen services including document requests, multilingual support, and queue reservations. Built during Tech-Triathlon hackathon, reached 3rd round.",
      image: "/projects/ceylon-smart.jpg",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Next.js", "Docker", "JWT"],
      features: [
        "20+ citizen services integration",
        "Multilingual support system",
        "Real-time queue management",
        "NIC verification and authentication",
        "Microservices architecture"
      ],
      metrics: {
        achievement: "3rd Round",
        competition: "Tech-Triathlon",
        services: "20+ Integrated"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/CeylonSmartCitizen",
      caseStudyUrl: "#"
    },
    {
      id: 3,
      title: "ZFit – Gym Management System",
      category: "Full-Stack Application",
      description: "A comprehensive gym management system with payment processing, member dashboards, and attendance tracking. Currently in development with PayHere integration for secure subscriptions.",
      image: "/projects/zfit.jpg",
      technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "PayHere"],
      features: [
        "Payment management (subscriptions, invoices, refunds)",
        "Member dashboards with attendance logs",
        "Responsive design for all devices",
        "Secure payment integration with PayHere",
        "Real-time data management"
      ],
      metrics: {
        status: "In Development",
        features: "Payment System",
        tech: "MERN Stack"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/gaindunuhansith/ZFit",
      caseStudyUrl: "#"
    },
    {
      id: 4,
      title: "Datathon – Public Service Optimization",
      category: "Machine Learning Project",
      description: "Machine learning models for optimizing public service resource allocation. Built predictive models for service times and workforce forecasting using real-world datasets.",
      image: "/projects/datathon.jpg",
      technologies: ["Python", "pandas", "scikit-learn", "NumPy", "joblib", "HistGradientBoostingRegressor"],
      features: [
        "Service time prediction (R² ~0.85)",
        "Workforce forecasting with RandomForest",
        "Automated predictions for 51K+ records",
        "83% unique data coverage",
        "Smart resource allocation"
      ],
      metrics: {
        accuracy: "R² ~0.85",
        dataset: "51K+ Records",
        coverage: "83% Unique"
      },
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 5,
      title: "PlayNova – Online Game Store",
      category: "Web Application",
      description: "A Java-based online game store with announcement management and MVC architecture. Features full CRUD operations for game releases and secure database connections.",
      image: "/projects/playnova.jpg",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "JDBC", "Apache Tomcat", "CSS", "JavaScript"],
      features: [
        "Announcement management system",
        "Full CRUD operations for game releases",
        "MVC design pattern implementation",
        "Singleton pattern for database connections",
        "Scalable architecture"
      ],
      metrics: {
        pattern: "MVC Design",
        operations: "Full CRUD",
        security: "Singleton DB"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/gaindunuhansith/playnova",
      caseStudyUrl: "#"
    },
    {
      id: 6,
      title: "Cabin.com – Hotel Reservation Platform",
      category: "Web Application",
      description: "A secure hotel reservation system built with PHP and MySQL. Features user profiles, booking management, and mobile-responsive design for seamless reservations.",
      image: "/projects/cabin.jpg",
      technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
      features: [
        "Secure user authentication and profiles",
        "Complete booking management system",
        "CRUD operations for reservations",
        "Mobile-friendly responsive design",
        "Database-driven architecture"
      ],
      metrics: {
        security: "User Auth",
        operations: "Full CRUD",
        design: "Responsive"
      },
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen bg-black py-20 px-4">
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
              FEATURED PROJECTS
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
            A showcase of my recent software engineering projects demonstrating technical expertise and problem-solving skills
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Project Image */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[#EFECE3]/20 group cursor-pointer"
                  whileHover={{
                    borderColor: "rgba(142, 255, 0, 0.5)",
                    boxShadow: "0 0 30px rgba(142, 255, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-[#8EFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Placeholder - Replace with actual project screenshots */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#EFECE3]/50">
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-2"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        ⚡
                      </motion.div>
                      <div className="text-sm">Project Screenshot</div>
                    </div>
                  </div>

                  {/* Project overlay */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        className="px-4 py-2 bg-[#8EFF00] hover:bg-[#7AE600] text-black text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(142, 255, 0, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="px-4 py-2 bg-black border border-[#EFECE3] text-[#EFECE3] hover:bg-[#EFECE3] hover:text-black text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Project Metrics */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mt-4"
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg"
                    variants={featureItemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(142, 255, 0, 0.5)"
                    }}
                  >
                    <motion.div
                      className="text-sm font-semibold text-[#8EFF00]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2
                      }}
                    >
                      {project.metrics.achievement || project.metrics.accuracy || project.metrics.status || project.metrics.pattern || project.metrics.security}
                    </motion.div>
                    <div className="text-xs text-[#EFECE3]/70">{project.metrics.competition ? 'Competition' : project.metrics.dataset ? 'Dataset' : project.metrics.features ? 'Focus' : project.metrics.operations ? 'Operations' : 'Status'}</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg"
                    variants={featureItemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(142, 255, 0, 0.5)"
                    }}
                  >
                    <motion.div
                      className="text-sm font-semibold text-[#8EFF00]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.4
                      }}
                    >
                      {project.metrics.competition || project.metrics.coverage || project.metrics.tech || project.metrics.security}
                    </motion.div>
                    <div className="text-xs text-[#EFECE3]/70">{project.metrics.competition ? 'Result' : project.metrics.coverage ? 'Coverage' : project.metrics.tech ? 'Stack' : 'Security'}</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg"
                    variants={featureItemVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(142, 255, 0, 0.5)"
                    }}
                  >
                    <motion.div
                      className="text-sm font-semibold text-[#8EFF00]"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.6
                      }}
                    >
                      {project.metrics.impact || project.metrics.services || project.metrics.accuracy || project.metrics.design}
                    </motion.div>
                    <div className="text-xs text-[#EFECE3]/70">{project.metrics.impact ? 'Scale' : project.metrics.services ? 'Services' : project.metrics.accuracy ? 'Accuracy' : 'Design'}</div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className={`space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
                variants={cardVariants}
              >
                {/* Category */}
                <motion.div
                  className="inline-flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span
                    className="w-2 h-2 bg-[#8EFF00] rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <span className="text-sm font-semibold text-[#8EFF00] uppercase tracking-wide">
                    {project.category}
                  </span>
                </motion.div>

                {/* Title & Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold text-[#EFECE3] mb-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-[#EFECE3]/80 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h4
                    className="text-lg font-semibold text-[#8EFF00] mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Key Features
                  </motion.h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-[#EFECE3]/80"
                        variants={featureItemVariants}
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-[#8EFF00] rounded-full shrink-0"
                          whileHover={{
                            scale: 1.5,
                            backgroundColor: "#7AE600"
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                  variants={techVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h4
                    className="text-lg font-semibold text-[#8EFF00] mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Technology Stack
                  </motion.h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 bg-black border border-[#EFECE3]/30 text-[#EFECE3] text-sm font-medium rounded-lg hover:border-[#8EFF00] transition-all duration-300"
                        variants={techItemVariants}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "#8EFF00",
                          backgroundColor: "rgba(142, 255, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-lime"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(142, 255, 0, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8EFF00] text-[#8EFF00] hover:bg-[#7AE600] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#8EFF00",
                      color: "#000000"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Case Study
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 p-8 bg-black border border-[#EFECE3]/20 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{
            borderColor: "rgba(142, 255, 0, 0.3)",
            boxShadow: "0 0 30px rgba(142, 255, 0, 0.1)"
          }}
        >
          <motion.h3
            className="text-2xl font-bold text-[#EFECE3] mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Interested in working together?
          </motion.h3>
          <motion.p
            className="text-[#EFECE3]/80 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm always open to discussing new opportunities and interesting projects.
            Let's build something amazing together.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(142, 255, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

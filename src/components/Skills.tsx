"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Skills() {
  const programmingLanguages = [
    { name: "JavaScript", level: "Advanced", years: "2+" },
    { name: "Java", level: "Advanced", years: "2+" },
    { name: "Python", level: "Intermediate", years: "1+" },
    { name: "C", level: "Intermediate", years: "1+" },
    { name: "C++", level: "Intermediate", years: "1+" },
    { name: "PHP", level: "Intermediate", years: "1+" },
    { name: "TypeScript", level: "Intermediate", years: "1+" },
    { name: "R", level: "Beginner", years: "1+" }
  ];

  const webTechnologies = [
    { name: "React.js", level: "Advanced", years: "2+" },
    { name: "Node.js", level: "Advanced", years: "2+" },
    { name: "Express.js", level: "Advanced", years: "2+" },
    { name: "HTML", level: "Advanced", years: "2+" },
    { name: "CSS", level: "Advanced", years: "2+" },
    { name: "SQL", level: "Intermediate", years: "2+" }
  ];

  const databases = [
    { name: "MySQL", level: "Intermediate", years: "2+" },
    { name: "MongoDB", level: "Intermediate", years: "1+" },
    { name: "PostgreSQL", level: "Intermediate", years: "1+" }
  ];

  const toolsPlatforms = [
    { name: "Git/GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Eclipse", level: "Intermediate" },
    { name: "Postman", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Figma", level: "Intermediate" },
    { name: "Android Studio", level: "Beginner" },
    { name: "XAMPP", level: "Intermediate" },
    { name: "Apache Tomcat", level: "Intermediate" }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: string) => ({
      width: level === 'Expert' ? '90%' :
             level === 'Advanced' ? '75%' :
             level === 'Intermediate' ? '60%' : '45%'
    })
  };

  const AnimatedSkillCard = ({ skill, category, index }: { skill: any, category: string, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true });

    return (
      <motion.div
        ref={cardRef}
        className="p-4 bg-black border border-[#EFECE3]/20 rounded-lg hover:border-[#8EFF00]/50 transition-all duration-300 group cursor-pointer"
        variants={skillCardVariants}
        whileHover={{
          scale: 1.05,
          borderColor: "rgba(142, 255, 0, 0.5)",
          boxShadow: "0 0 20px rgba(142, 255, 0, 0.1)"
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-start mb-2">
          <motion.h4
            className="font-semibold text-[#EFECE3] group-hover:text-[#8EFF00] transition-colors"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill.name}
          </motion.h4>
          {skill.years && (
            <motion.span
              className="text-xs text-[#EFECE3]/60 bg-[#8EFF00]/10 px-2 py-1 rounded"
              animate={isHovered ? {
                backgroundColor: "rgba(142, 255, 0, 0.2)",
                scale: 1.1
              } : {
                backgroundColor: "rgba(142, 255, 0, 0.1)",
                scale: 1
              }}
              transition={{ duration: 0.3 }}
            >
              {skill.years}
            </motion.span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#EFECE3]/10 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-[#8EFF00] h-2 rounded-full"
              variants={progressVariants}
              initial="hidden"
              animate={cardInView ? "visible" : "hidden"}
              custom={skill.level}
            />
          </div>
          <motion.span
            className="text-xs text-[#EFECE3]/70 min-w-[70px]"
            animate={isHovered ? { color: "#8EFF00" } : { color: "rgba(239, 236, 227, 0.7)" }}
            transition={{ duration: 0.3 }}
          >
            {skill.level}
          </motion.span>
        </div>
      </motion.div>
    );
  };

  const competencyVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const competencyItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" ref={sectionRef} className="relative min-h-screen bg-black py-20 px-4">
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
              TECHNICAL SKILLS
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
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="space-y-12"
          variants={categoryVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Programming Languages */}
          <motion.div variants={skillCardVariants}>
            <motion.h3
              className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold"
                whileHover={{
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                PL
              </motion.span>
              Programming Languages
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmingLanguages.map((skill, index) => (
                <AnimatedSkillCard key={index} skill={skill} category="programming" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Web Technologies */}
          <motion.div variants={skillCardVariants}>
            <motion.h3
              className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold"
                whileHover={{
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                WT
              </motion.span>
              Web Technologies
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {webTechnologies.map((skill, index) => (
                <AnimatedSkillCard key={index} skill={skill} category="web" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div variants={skillCardVariants}>
            <motion.h3
              className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold"
                whileHover={{
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                DB
              </motion.span>
              Databases
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {databases.map((skill, index) => (
                <AnimatedSkillCard key={index} skill={skill} category="database" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div variants={skillCardVariants}>
            <motion.h3
              className="text-2xl font-bold text-[#8EFF00] mb-6 flex items-center"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-8 h-8 bg-[#8EFF00] rounded mr-3 flex items-center justify-center text-black text-sm font-bold"
                whileHover={{
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                TP
              </motion.span>
              Tools & Platforms
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolsPlatforms.map((skill, index) => (
                <AnimatedSkillCard key={index} skill={skill} category="tools" index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="mt-16 p-8 bg-black border border-[#EFECE3]/20 rounded-lg"
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
            className="text-2xl font-bold text-[#8EFF00] mb-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            Core Competencies
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={competencyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center"
              variants={competencyItemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="font-semibold text-[#EFECE3] mb-2"
                whileHover={{ color: "#8EFF00" }}
              >
                Full-Stack Development
              </motion.h4>
              <p className="text-sm text-[#EFECE3]/70">MERN Stack, REST APIs, JWT Authentication</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={competencyItemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="font-semibold text-[#EFECE3] mb-2"
                whileHover={{ color: "#8EFF00" }}
              >
                Database Management
              </motion.h4>
              <p className="text-sm text-[#EFECE3]/70">MySQL, MongoDB, PostgreSQL</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={competencyItemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="font-semibold text-[#EFECE3] mb-2"
                whileHover={{ color: "#8EFF00" }}
              >
                Development Tools
              </motion.h4>
              <p className="text-sm text-[#EFECE3]/70">Git/GitHub, Docker, Postman, VS Code</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={competencyItemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h4
                className="font-semibold text-[#EFECE3] mb-2"
                whileHover={{ color: "#8EFF00" }}
              >
                Web Technologies
              </motion.h4>
              <p className="text-sm text-[#EFECE3]/70">React, Node.js, Express, Responsive Design</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

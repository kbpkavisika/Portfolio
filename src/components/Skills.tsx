"use client";

import { motion, useInView, AnimationGeneratorType } from 'framer-motion';
import { useRef, useState } from 'react';

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  level: SkillLevel;
  years?: string;
  color: string;
}

interface Category {
  title: string;
  icon: string;
  skills: Skill[];
}

export default function Skills() {
  const categories: Category[] = [
    {
      title: "Tools & Platforms",
      icon: "",
      skills: [
        { name: "Git/GitHub", level: "Advanced", color: "#8EFF00" },
        { name: "VS Code", level: "Advanced", color: "#8EFF00" },
        { name: "Eclipse", level: "Intermediate", color: "#8EFF00" },
        { name: "Postman", level: "Intermediate", color: "#8EFF00" },
        { name: "Docker", level: "Intermediate", color: "#8EFF00" },
        { name: "Figma", level: "Intermediate", color: "#8EFF00" },
        { name: "Android Studio", level: "Beginner", color: "#8EFF00" },
        { name: "XAMPP", level: "Intermediate", color: "#8EFF00" },
        { name: "Apache Tomcat", level: "Intermediate", color: "#8EFF00" }
      ]
    },
    {
      title: "Programming Languages",
      icon: "",
      skills: [
        { name: "JavaScript", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "Java", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "Python", level: "Intermediate", years: "1+", color: "#8EFF00" },
        { name: "C", level: "Intermediate", years: "1+", color: "#8EFF00" },
        { name: "C++", level: "Intermediate", years: "1+", color: "#8EFF00" },
        { name: "PHP", level: "Intermediate", years: "1+", color: "#8EFF00" },
        { name: "TypeScript", level: "Intermediate", years: "1+", color: "#8EFF00" },
        { name: "R", level: "Beginner", years: "1+", color: "#8EFF00" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "",
      skills: [
        { name: "React.js", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "Node.js", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "Express.js", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "HTML", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "CSS", level: "Advanced", years: "2+", color: "#8EFF00" },
        { name: "SQL", level: "Intermediate", years: "2+", color: "#8EFF00" }
      ]
    },
    {
      title: "Databases",
      icon: "",
      skills: [
        { name: "MySQL", level: "Intermediate", years: "2+", color: "#8EFF00" },
        { name: "MongoDB", level: "Intermediate", years: "1+", color: "#8EFF00" },
        { name: "PostgreSQL", level: "Intermediate", years: "1+", color: "#8EFF00" }
      ]
    }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: 15,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as AnimationGeneratorType,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getProgressWidth = (level: SkillLevel): string => {
    switch (level) {
      case 'Expert': return '90%';
      case 'Advanced': return '75%';
      case 'Intermediate': return '60%';
      case 'Beginner': return '45%';
      default: return '45%';
    }
  };

  const SkillCategory = ({ 
    category, 
    delay = 0 
  }: { 
    category: Category; 
    delay?: number;
  }) => {
    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          scale: 1 
        } : {}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: delay
        }}
      >
        <motion.div
          className="relative p-6 bg-linear-to-br from-black/80 to-black/40 border border-[#EFECE3]/10 rounded-2xl backdrop-blur-sm overflow-hidden group"
          whileHover={{
            y: -4,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(142, 255, 0, 0.1)",
            borderColor: "rgba(142, 255, 0, 0.3)"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15 
          }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-[#8EFF00]/5 via-transparent to-[#8EFF00]/10 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          />

          {/* Header */}
          <motion.div 
            className="mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
          >
            <motion.h3
              className="text-xl font-bold text-[#8EFF00] group-hover:text-[#7AE600] transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {category.title}
            </motion.h3>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {category.skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} delay={delay} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const SkillCard = ({ skill, index, delay }: { skill: Skill; index: number; delay: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true });

    return (
      <motion.div
        ref={cardRef}
        className="relative p-4 bg-black/60 border border-[#EFECE3]/5 rounded-xl hover:border-[#8EFF00]/30 transition-all duration-300 cursor-pointer group overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        animate={cardInView ? { 
          opacity: 1, 
          x: 0,
          transition: { 
            delay: delay + 0.4 + (index * 0.1),
            type: "spring",
            stiffness: 120,
            damping: 20
          }
        } : {}}
        whileHover={{
          scale: 1.02,
          y: -2,
          boxShadow: "0 8px 25px rgba(142, 255, 0, 0.2), 0 0 15px rgba(142, 255, 0, 0.15)"
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Skill Color Accent */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
          style={{ backgroundColor: skill.color }}
          initial={{ scaleY: 0 }}
          animate={cardInView ? { 
            scaleY: 1,
            transition: { delay: delay + 0.6 + (index * 0.1), duration: 0.4 }
          } : {}}
        />

        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-[#8EFF00]/5 via-transparent to-[#8EFF00]/10 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          animate={isHovered ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <motion.h4
              className="font-semibold text-[#EFECE3] group-hover:text-[#8EFF00] transition-colors"
              animate={isHovered ? { x: 3 } : { x: 0 }}
            >
              {skill.name}
            </motion.h4>
            {skill.years && (
              <motion.span
                className="text-xs px-2 py-1 bg-[#8EFF00]/10 text-[#8EFF00] rounded-full border border-[#8EFF00]/20"
                animate={isHovered ? { 
                  scale: 1.05,
                  backgroundColor: "rgba(142, 255, 0, 0.15)",
                  borderColor: "rgba(142, 255, 0, 0.3)"
                } : { scale: 1 }}
              >
                {skill.years}
              </motion.span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-[#EFECE3]/5 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-2 rounded-full relative"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0, opacity: 0 }}
                animate={cardInView ? {
                  width: getProgressWidth(skill.level),
                  opacity: 1,
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: delay + 0.5 + (index * 0.1)
                  }
                } : {}}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.8 + (index * 0.2)
                  }}
                />
              </motion.div>
            </div>
            <motion.span
              className="text-xs text-[#EFECE3]/70 min-w-[70px] font-medium"
              animate={isHovered ? { 
                color: "#8EFF00",
                scale: 1.05 
              } : {}}
            >
              {skill.level}
            </motion.span>
          </div>
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

        {/* Skills Categories */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 mb-16"
          variants={categoryVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              category={category} 
              delay={index * 0.2} 
            />
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="p-8 bg-black border border-[#EFECE3]/20 rounded-lg"
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
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

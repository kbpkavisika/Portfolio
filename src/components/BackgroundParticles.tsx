"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
}

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      setParticles(newParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      createParticles();
    };

    createParticles();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let { x, y, vx, vy } = particle;

          // Basic movement
          x += vx;
          y += vy;

          // Mouse repulsion
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            vx -= (dx / distance) * force * 0.01;
            vy -= (dy / distance) * force * 0.01;
          }

          // Damping
          vx *= 0.99;
          vy *= 0.99;

          // Boundary wrapping
          if (x < -10) x = window.innerWidth + 10;
          if (x > window.innerWidth + 10) x = -10;
          if (y < -10) y = window.innerHeight + 10;
          if (y > window.innerHeight + 10) y = -10;

          // Random velocity adjustment
          vx += (Math.random() - 0.5) * 0.02;
          vy += (Math.random() - 0.5) * 0.02;

          // Clamp velocity
          vx = Math.max(-1, Math.min(1, vx));
          vy = Math.max(-1, Math.min(1, vy));

          return {
            ...particle,
            x,
            y,
            vx,
            vy
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16); // ~60fps
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-[#8EFF00] rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px rgba(142, 255, 0, 0.3)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional floating geometric shapes */}
      {particles.slice(0, 8).map((particle) => (
        <motion.div
          key={`shape-${particle.id}`}
          className="absolute border border-[#8EFF00]/20"
          style={{
            width: particle.size * 3,
            height: particle.size * 3,
            left: particle.x + 50,
            top: particle.y + 50,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
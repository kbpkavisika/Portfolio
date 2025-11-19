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
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 6 + 3,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          opacity: Math.random() * 0.7 + 0.3
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
          
          if (distance < 120) {
            const force = (120 - distance) / 120;
            vx -= (dx / distance) * force * 0.015;
            vy -= (dy / distance) * force * 0.015;
          }

          // Damping
          vx *= 0.995;
          vy *= 0.995;

          // Boundary wrapping
          if (x < -10) x = window.innerWidth + 10;
          if (x > window.innerWidth + 10) x = -10;
          if (y < -10) y = window.innerHeight + 10;
          if (y > window.innerHeight + 10) y = -10;

          // Random velocity adjustment (less frequent)
          if (Math.random() < 0.02) {
            vx += (Math.random() - 0.5) * 0.02;
            vy += (Math.random() - 0.5) * 0.02;
          }

          // Clamp velocity
          vx = Math.max(-1.2, Math.min(1.2, vx));
          vy = Math.max(-1.2, Math.min(1.2, vy));

          return {
            ...particle,
            x,
            y,
            vx,
            vy
          };
        })
      );
      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
            boxShadow: `0 0 ${particle.size * 3}px rgba(142, 255, 0, 0.4), 0 0 ${particle.size * 6}px rgba(142, 255, 0, 0.2)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.4, particle.opacity],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional floating geometric shapes */}
      {particles.slice(0, 8).map((particle) => (
        <motion.div
          key={`shape-${particle.id}`}
          className="absolute border-2 border-[#8EFF00]/30 rounded-lg"
          style={{
            width: particle.size * 3,
            height: particle.size * 3,
            left: particle.x + 80,
            top: particle.y + 80,
            willChange: 'transform, opacity',
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.7, 1.1, 0.7],
            opacity: [0.1, 0.3, 0.1],
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Connecting lines between nearby particles */}
      {particles.slice(0, 10).map((particle, index) => {
        const nearbyParticles = particles.filter((p, i) => {
          if (i === index) return false;
          const distance = Math.sqrt(
            Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)
          );
          return distance < 150;
        });

        return nearbyParticles.slice(0, 1).map((nearParticle, lineIndex) => (
          <svg
            key={`line-${particle.id}-${lineIndex}`}
            className="absolute pointer-events-none"
            style={{
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <motion.line
              x1={particle.x}
              y1={particle.y}
              x2={nearParticle.x}
              y2={nearParticle.y}
              stroke="rgba(142, 255, 0, 0.15)"
              strokeWidth="1"
              animate={{
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        ));
      })}
    </div>
  );
}
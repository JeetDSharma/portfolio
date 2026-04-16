"use client";

import React, { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface PipelineParticlesProps {
  scrollProgress: MotionValue<number>;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetOpacity: number;
  hue: number;
}

const PipelineParticles: React.FC<PipelineParticlesProps> = ({
  scrollProgress,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const progressRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  // Track scroll progress without re-renders
  useMotionValueEvent(scrollProgress, "change", (v) => {
    progressRef.current = v;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const PARTICLE_COUNT = 35;
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.3) * 1.5,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2.5 + 1.5,
        opacity: 0,
        targetOpacity: Math.random() * 0.6 + 0.2,
        hue: 230 + Math.random() * 30, // indigo range
      });
    }
    particlesRef.current = particles;

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const progress = progressRef.current;

      ctx.clearRect(0, 0, w, h);

      // Global opacity based on scroll (fade in/out at edges)
      let globalOpacity = 1;
      if (progress < 0.08) {
        globalOpacity = progress / 0.08;
      } else if (progress > 0.92) {
        globalOpacity = (1 - progress) / 0.08;
      }

      // Speed multiplier based on stage
      let speedMult = 1;
      if (progress > 0.48 && progress < 0.66) {
        // Data layer: particles slow down
        speedMult = 0.3;
      } else if (progress > 0.66 && progress < 0.80) {
        // Infrastructure: particles become steady
        speedMult = 0.15;
      } else if (progress > 0.90) {
        // Pullback: particles speed up
        speedMult = 1.8;
      }

      // Direction shift: mostly rightward flow
      const baseVx = 0.8 + progress * 1.2;

      for (const p of particles) {
        // Smoothly adjust opacity
        p.opacity += (p.targetOpacity * globalOpacity - p.opacity) * 0.05;

        // Update position
        p.x += (p.vx + baseVx) * speedMult;
        p.y += p.vy * speedMult;

        // Slight vertical drift toward center
        const centerY = h / 2;
        p.vy += (centerY - p.y) * 0.0003;

        // Wrap around
        if (p.x > w + 10) {
          p.x = -10;
          p.y = Math.random() * h;
          p.targetOpacity = Math.random() * 0.6 + 0.2;
        }
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Draw particle
        if (p.opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

          // Color shifts based on stage
          let hue = p.hue;
          if (progress > 0.48 && progress < 0.66) {
            hue = 200 + Math.random() * 10; // cooler blue for data
          } else if (progress > 0.66) {
            hue = 250 + Math.random() * 20; // purple for infra
          }

          ctx.fillStyle = `hsla(${hue}, 70%, 65%, ${p.opacity})`;
          ctx.fill();

          // Glow
          ctx.shadowColor = `hsla(${hue}, 80%, 60%, ${p.opacity * 0.5})`;
          ctx.shadowBlur = p.size * 4;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw faint connection lines between nearby particles
      if (globalOpacity > 0.3) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const lineOpacity =
                (1 - dist / 120) *
                0.1 *
                globalOpacity *
                Math.min(particles[i].opacity, particles[j].opacity);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `hsla(235, 60%, 65%, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default PipelineParticles;

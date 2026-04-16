"use client";

import React, { useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { pipelineLayers } from "./pipelineData";

// Dynamic import of the R3F scene (no SSR — Three.js needs the browser)
const PipelineScene = dynamic(() => import("./PipelineScene"), {
  ssr: false,
});

const PipelineJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // --- Opening text ---
  const openingOpacity = useTransform(
    smoothProgress,
    [0, 0.05, 0.12],
    [1, 1, 0],
  );
  const openingY = useTransform(smoothProgress, [0, 0.12], [0, -50]);

  // --- Closing text ---
  const closingOpacity = useTransform(
    smoothProgress,
    [0.85, 0.92, 1],
    [0, 1, 1],
  );
  const closingY = useTransform(smoothProgress, [0.85, 0.92], [30, 0]);

  // --- Scroll prompt ---
  const promptOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);

  return (
    <>
      {/* Desktop: 300vh scroll-locked R3F experience */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
          {/* R3F Canvas — full viewport */}
          <div className="absolute inset-0 z-[1]">
            <PipelineScene scrollProgress={smoothProgress} />
          </div>

          {/* Vignette overlay */}
          <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

          {/* Opening text overlay */}
          <motion.div
            style={{ opacity: openingOpacity, y: openingY }}
            className="absolute inset-0 z-[3] flex flex-col items-center justify-center pointer-events-none"
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500 mb-4">
              System Architecture
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center leading-tight">
              How I think about
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                systems
              </span>
            </h2>
          </motion.div>

          {/* Scroll prompt */}
          <motion.div
            style={{ opacity: promptOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-px h-8 bg-gradient-to-b from-indigo-500/50 to-transparent"
            />
          </motion.div>

          {/* Closing text overlay */}
          <motion.div
            style={{ opacity: closingOpacity, y: closingY }}
            className="absolute inset-0 z-[3] flex flex-col items-center justify-center pointer-events-none"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center">
              This is how I build.
            </h2>
            <p className="text-sm font-mono text-gray-500 mt-4 tracking-wider">
              5 layers · One system · Production-grade
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile fallback */}
      <MobilePipelineFallback />
    </>
  );
};

// ─── Mobile: stacked cards ───
const MobilePipelineFallback: React.FC = () => {
  return (
    <div className="md:hidden bg-black py-16 px-4 space-y-6">
      <div className="text-center mb-12">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500 mb-4">
          System Architecture
        </p>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          How I think about{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            systems
          </span>
        </h2>
      </div>

      {pipelineLayers.map((layer) => (
        <motion.div
          key={layer.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative overflow-hidden border border-white/[0.08] bg-black/[0.6] backdrop-blur-xl p-6"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-4">
            Layer {layer.number}
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mb-2">
            {layer.title}
          </h3>
          <p className="text-xs text-gray-400 font-mono mb-6">
            {layer.description}
          </p>
          <div className="h-px w-12 bg-indigo-500/30 mb-6" />
          <div className="flex flex-wrap gap-2">
            {layer.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] font-mono tracking-wider text-gray-400 bg-white/[0.04] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />
        </motion.div>
      ))}

      <div className="text-center pt-8">
        <p className="text-lg font-bold text-white tracking-tight">
          This is how I build.
        </p>
      </div>
    </div>
  );
};

export default PipelineJourney;

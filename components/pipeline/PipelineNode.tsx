"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { PipelineLayer } from "./pipelineData";

interface PipelineNodeProps {
  layer: PipelineLayer;
  index: number;
  scrollProgress: MotionValue<number>;
  focusRange: [number, number]; // scroll range when this node is in focus
}

const PipelineNode: React.FC<PipelineNodeProps> = ({
  layer,
  index,
  scrollProgress,
  focusRange,
}) => {
  const [focusStart, focusEnd] = focusRange;
  const mid = (focusStart + focusEnd) / 2;
  const rangeLen = focusEnd - focusStart;

  // Opacity: sharp fade-in at start, starts fading before end to prevent double-overlap
  const opacity = useTransform(
    scrollProgress,
    [
      Math.max(0, focusStart - 0.04),
      focusStart + 0.02,
      mid,
      focusEnd - rangeLen * 0.15,
      focusEnd + 0.02,
    ],
    [0, 1, 1, 1, 0],
  );

  // Scale: smaller when not in focus
  const scale = useTransform(
    scrollProgress,
    [
      Math.max(0, focusStart - 0.04),
      focusStart + 0.02,
      mid,
      focusEnd - rangeLen * 0.15,
      focusEnd + 0.02,
    ],
    [0.85, 1, 1.02, 1, 0.85],
  );

  // Y rotation: slight tilt entering, settle flat, tilt leaving
  const rotateY = useTransform(
    scrollProgress,
    [
      Math.max(0, focusStart - 0.05),
      focusStart + 0.03,
      mid,
      focusEnd - 0.03,
      Math.min(1, focusEnd + 0.05),
    ],
    [8, 2, 0, -2, -8],
  );

  // X translation: slide in from side, slide out to opposite side
  const x = useTransform(
    scrollProgress,
    [
      Math.max(0, focusStart - 0.05),
      focusStart + 0.02,
      mid,
      focusEnd - rangeLen * 0.1,
      focusEnd + 0.03,
    ],
    [index % 2 === 0 ? -80 : 80, 0, 0, 0, index % 2 === 0 ? 60 : -60],
  );

  // Blur: blurred when not in focus
  const blur = useTransform(
    scrollProgress,
    [
      Math.max(0, focusStart - 0.03),
      focusStart + 0.01,
      focusEnd - rangeLen * 0.1,
      focusEnd + 0.02,
    ],
    [6, 0, 0, 6],
  );

  // Tech tags stagger: reveal when in focus
  const tagOpacity = useTransform(
    scrollProgress,
    [focusStart, focusStart + 0.05],
    [0, 1],
  );

  const descOpacity = useTransform(
    scrollProgress,
    [focusStart + 0.01, focusStart + 0.06],
    [0, 1],
  );

  const descY = useTransform(
    scrollProgress,
    [focusStart + 0.01, focusStart + 0.06],
    [10, 0],
  );

  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        rotateY,
        x,
        filter: filterBlur,
      }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-full max-w-2xl mx-auto px-4">
        {/* Glass card */}
        <div
          className="relative overflow-hidden border border-white/[0.08] dark:border-white/[0.08] bg-black/[0.35] dark:bg-black/[0.45] backdrop-blur-xl shadow-[0_0_60px_rgba(99,102,241,0.06)] p-8 md:p-12"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Layer number — top left */}
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 dark:text-gray-500 mb-6">
            Layer {layer.number}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-3">
            {layer.title}
          </h3>

          {/* Description — fades/slides in */}
          <motion.p
            style={{ opacity: descOpacity, y: descY }}
            className="text-sm md:text-base text-gray-400 font-mono mb-8 max-w-md"
          >
            {layer.description}
          </motion.p>

          {/* Divider */}
          <div className="h-px w-16 bg-gradient-to-r from-indigo-500/50 to-transparent mb-8" />

          {/* Technology tags — stagger in */}
          <motion.div
            style={{ opacity: tagOpacity }}
            className="flex flex-wrap gap-2"
          >
            {layer.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={false}
                className="px-3 py-1.5 text-[11px] font-mono tracking-wider text-gray-300 bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtle glow effect at edges */}
          <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <div className="absolute -bottom-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

export default PipelineNode;

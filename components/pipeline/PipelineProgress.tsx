"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { pipelineLayers, stageRanges } from "./pipelineData";

interface PipelineProgressProps {
  scrollProgress: MotionValue<number>;
}

const stages = [
  { id: "application", label: "APP", range: stageRanges.application },
  { id: "business", label: "LOGIC", range: stageRanges.business },
  { id: "data", label: "DATA", range: stageRanges.data },
  { id: "infrastructure", label: "INFRA", range: stageRanges.infrastructure },
  { id: "architecture", label: "ARCH", range: stageRanges.architecture },
];

const ProgressDot: React.FC<{
  stage: (typeof stages)[0];
  scrollProgress: MotionValue<number>;
}> = ({ stage, scrollProgress }) => {
  const isActive = useTransform(scrollProgress, (v) => {
    return v >= stage.range[0] && v <= stage.range[1] ? 1 : 0;
  });

  const isPast = useTransform(scrollProgress, (v) => {
    return v > stage.range[1] ? 1 : 0;
  });

  const dotScale = useTransform(isActive, (v) => (v ? 1.4 : 1));
  const dotOpacity = useTransform(scrollProgress, (v) => {
    if (v >= stage.range[0] && v <= stage.range[1]) return 1;
    if (v > stage.range[1]) return 0.7;
    return 0.3;
  });

  const labelOpacity = useTransform(isActive, (v) => (v ? 1 : 0));

  return (
    <div className="flex items-center gap-3 relative">
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="w-2 h-2 rounded-full bg-indigo-400 dark:bg-indigo-400 relative"
      >
        {/* Active glow */}
        <motion.div
          style={{ opacity: isActive }}
          className="absolute inset-0 rounded-full bg-indigo-400 animate-ping"
        />
      </motion.div>
      <motion.span
        style={{ opacity: labelOpacity }}
        className="text-[9px] font-mono tracking-[0.2em] text-gray-400 whitespace-nowrap"
      >
        {stage.label}
      </motion.span>
    </div>
  );
};

const PipelineProgress: React.FC<PipelineProgressProps> = ({
  scrollProgress,
}) => {
  // Only show when in the pipeline section (not at overview or pullback)
  const containerOpacity = useTransform(scrollProgress, (v) => {
    if (v < 0.1 || v > 0.95) return 0;
    return 1;
  });

  // Progress line fill
  const lineFill = useTransform(
    scrollProgress,
    [0.12, 0.90],
    ["0%", "100%"]
  );

  return (
    <motion.div
      style={{ opacity: containerOpacity }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-start gap-6 transition-opacity duration-300"
    >
      {/* Vertical track line */}
      <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gray-800">
        <motion.div
          style={{ height: lineFill }}
          className="w-full bg-gradient-to-b from-indigo-500/60 to-indigo-400/30"
        />
      </div>

      {stages.map((stage) => (
        <ProgressDot
          key={stage.id}
          stage={stage}
          scrollProgress={scrollProgress}
        />
      ))}
    </motion.div>
  );
};

export default PipelineProgress;

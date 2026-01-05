"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-backgrounds";
import { Highlight } from "./ui/hero-highlight";

const Hero = () => {
  const scrollToBody = () => {
    const bodySection = document.getElementById("body-section");
    if (bodySection) {
      bodySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AuroraBackground className="min-h-screen pt-16 md:pt-20">
      {/* Using `pt-16` (~4rem or 64px) for mobile, `pt-20` (~5rem or 80px) for larger screens */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center tracking-tight">
          <span className="block mb-2">Jeet Sharma</span>
        </div>

        <div className="text-base md:text-2xl font-mono text-gray-700 dark:text-gray-300 py-4 tracking-wide">
          Backend Engineer • Distributed Systems • Production AI
        </div>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl text-center mt-2 mb-6 leading-relaxed">
          Building scalable infrastructure and data-intensive platforms from
          zero to production. Currently @ UMass Amherst pursuing MS in Computer
          Science.
        </p>

        <button
          className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-6 py-3 text-sm font-mono uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          onClick={scrollToBody}
        >
          Let's Dive In
        </button>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;

"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { AuroraBackground } from './ui/aurora-backgrounds'
import { Highlight, HeroHighlight } from './ui/hero-highlight';
const Hero = () => {
  return (
    <AuroraBackground className='max-h-[80vh]'>
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
      <div className="text-3xl md:text-7xl font-bold uppercase dark:text-white text-center">
  <Highlight>
   Crafting the Future </Highlight>, <br /> One Revolutionary Idea at a Time
</div>

      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        This is Jeet Sharma
      </div>
      <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        Let's Dive In
      </button>
    </motion.div>
  </AuroraBackground>
  )
}

export default Hero
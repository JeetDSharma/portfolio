"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroStats } from "@/lib/founderContent";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen pt-20 md:pt-0 md:min-h-[100svh] md:flex md:items-center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col justify-center gap-8 px-6 py-8 md:gap-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-border shadow-sm">
              <Image
                src="/linkedIn-Profile.jpeg"
                alt="Jeet Sharma"
                fill
                className="object-cover"
                sizes="56px"
                priority
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Founding engineer
            </p>
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Jeet Sharma
          </h1>
          <p className="mt-2 font-display text-2xl font-semibold text-brand md:text-3xl lg:text-4xl">
            I ship products end-to-end.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From first customer conversation to software in production. I handle the UX, the backend, and make sure it keeps working after launch.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={scrollToProjects}
              className="rounded-xl bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg transition hover:opacity-95"
            >
              Selected work
            </button>
            <a
              href="mailto:jeetsharma2112@gmail.com"
              className="rounded-xl border border-border px-8 py-3.5 text-center text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand"
            >
              Email me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border/60 bg-muted/30 px-3 py-4 text-center"
            >
              <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue — keeps Selected work hidden below the fold for the reveal */}
      <motion.button
        type="button"
        onClick={scrollToProjects}
        aria-label="Scroll to selected work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition hover:text-brand md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Selected work
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </motion.svg>
      </motion.button>
    </section>
  );
};

export default Hero;

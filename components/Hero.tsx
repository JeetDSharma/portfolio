"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FounderShowcase from "@/components/FounderShowcase";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="min-h-screen pt-20 md:pt-0 md:min-h-[100svh]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 flex flex-col justify-center md:order-1"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-border shadow-sm">
              <Image
                src="/linkedIn-Profile.jpeg"
                alt="Jeet Sharma"
                fill
                className="object-cover"
                sizes="48px"
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
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            From first customer conversation to software in production—clear
            UX, reliable backends, and systems that keep working after launch.
            MS CS @ UMass Amherst.
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
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="order-1 md:order-2"
        >
          <FounderShowcase />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

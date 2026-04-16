"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { showcaseConfig } from "@/lib/founderContent";

export default function FounderShowcase() {
  const { mode, videoSrc, poster, images, intervalSec = 5 } = showcaseConfig;
  const [slide, setSlide] = useState(0);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    if (mode !== "images" || images.length <= 1) return;
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % images.length);
    }, intervalSec * 1000);
    return () => clearInterval(t);
  }, [mode, images, intervalSec]);

  if (mode === "video" && videoSrc) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-xl">
        {videoOk ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            playsInline
            muted
            loop
            autoPlay
            onError={() => setVideoOk(false)}
          />
        ) : (
          <PlaceholderShowcase />
        )}
      </div>
    );
  }

  if (mode === "images" && images.length > 0) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={images[slide].src}
              alt={images[slide].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={slide === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 shadow-xl">
      <PlaceholderShowcase />
    </div>
  );
}

function PlaceholderShowcase() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand/25 via-muted/80 to-brand-muted/35 p-6 text-center dark:from-brand/20 dark:via-muted/50 dark:to-brand-muted/30">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Showcase
      </span>
      <p className="mt-3 max-w-[16rem] text-sm leading-snug text-foreground/90">
        Add{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-[11px]">public/showcase.mp4</code>{" "}
        or images in{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-[11px]">
          lib/founderContent.ts
        </code>
      </p>
    </div>
  );
}

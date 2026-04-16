"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectMedia } from "@/lib/founderContent";

export default function ProjectCover({
  media,
  title,
}: {
  media: ProjectMedia;
  title: string;
}) {
  const [videoOk, setVideoOk] = useState(true);

  if (media.kind === "video") {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
        {videoOk ? (
          <video
            className="h-full w-full object-cover"
            src={media.src}
            poster={media.poster}
            playsInline
            muted
            loop
            autoPlay
            onError={() => setVideoOk(false)}
          />
        ) : (
          <GradientPlaceholder title={title} />
        )}
      </div>
    );
  }

  const { items } = media;
  if (items.length === 0) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50">
        <GradientPlaceholder title={title} />
      </div>
    );
  }

  if (items.length === 1) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50">
        <Image
          src={items[0].src}
          alt={items[0].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 42rem"
        />
      </div>
    );
  }

  return <MultiImageCover items={items} />;
}

function MultiImageCover({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % items.length);
    }, 5000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={items[slide].src}
            alt={items[slide].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 42rem"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-2 right-2 flex gap-1">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === slide ? "bg-brand" : "bg-white/40"
            }`}
            onClick={() => setSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

function GradientPlaceholder({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand/20 via-muted/50 to-brand-muted/30 p-6 text-center dark:from-brand/15 dark:to-brand-muted/25">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Visual
      </span>
      <span className="mt-2 max-w-[14rem] text-sm font-semibold leading-snug text-foreground/90">
        {title}
      </span>
      <span className="mt-3 text-[10px] text-muted-foreground">
        Add a cover in founderContent
      </span>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import CommandPalette from "@/components/CommandPalette";

export default function SearchLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isFindShortcut =
        (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "f";
      if (!isFindShortcut) return;
      e.preventDefault();
      setIsOpen((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
}

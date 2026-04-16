"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const links = [
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur md:hidden">
        <button
          type="button"
          onClick={() => {
            scrollTop();
            setMenuOpen(false);
          }}
          className="text-lg font-semibold tracking-tight"
        >
          Jeet Sharma
        </button>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-foreground"
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-14 z-40 flex flex-col gap-1 border-b border-border bg-background px-6 py-4 shadow-lg md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              className="py-3 text-left text-base font-medium"
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-3 text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}

      {/* Desktop vertical rail */}
      <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-[4.5rem] flex-col border-r border-border bg-background/95 py-6 backdrop-blur md:flex">
        <button
          type="button"
          onClick={scrollTop}
          className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sm font-bold text-foreground transition-colors hover:border-brand hover:text-brand"
          aria-label="Home"
        >
          JS
        </button>

        <nav
          className="mt-6 flex flex-col items-center gap-5 px-2"
          aria-label="Primary"
        >
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div
          className="pointer-events-none flex min-h-0 flex-1 flex-col items-center justify-center py-4"
          aria-hidden
        >
          <span
            className="select-none text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground/80 [writing-mode:vertical-rl] [text-orientation:mixed]"
            style={{ transform: "rotate(180deg)" }}
          >
            Jeet Sharma
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 pb-2">
          <a
            href="https://github.com/JeetDSharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-brand"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jeet-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-brand"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-brand"
          >
            CV
          </a>
        </div>
      </aside>
    </>
  );
}

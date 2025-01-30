"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToBody = () => {
    const bodySection = document.getElementById("body-section");
    if (bodySection) {
      bodySection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile
    }
  };

  const downloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jeet_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow-md fixed w-full top-0 z-50 bg-background border-b border-border text-foreground">
      {/* Logo */}
      <div className="text-2xl font-bold">Jeet's Portfolio</div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Nav Links (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <button className="hover:scale-105 transition-all duration-300" onClick={scrollToBody}>
          About Me
        </button>
        <button className="hover:scale-105 transition-all duration-300" onClick={downloadResume}>
          Resume
        </button>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={scrollToContact}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Me
          </span>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-md flex flex-col items-center space-y-6 py-6">
          <button className="text-lg" onClick={scrollToBody}>About Me</button>
          <button className="text-lg" onClick={downloadResume}>Resume</button>
          <button className="text-lg" onClick={scrollToContact}>Contact Me</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

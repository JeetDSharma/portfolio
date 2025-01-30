"use client";
import React from "react";

const Navbar = () => {
  const scrollToBody = () => {
    const bodySection = document.getElementById("body-section");
    if (bodySection) {
      bodySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadResume = () => {
    const downloadResume = () => {
      const resumeUrl = "/resume.pdf"; // Ensure this file is in the `/public` folder
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Jeet_Sharma_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }
  const emailLink = `mailto:jeetsharma2112@gmail.com
    ?subject=Interested%20in%20Hiring%20You!
    &body=Hi%20Jeet,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0AThanks!`;


  return (
    <nav className="flex flex-row justify-between items-center px-6 py-2">
      <div className="text-2xl"> Jeet's Portfolio</div>
      <div className="flex space-x-8">
        <button onClick={scrollToBody}> About Me</button>
        <button onClick={downloadResume}> Resume</button>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" 
  >
    <a href={emailLink}>
    Contact Me
    </a>
  </span>

</button>
        
      </div>
    </nav>
  );
};

export default Navbar;

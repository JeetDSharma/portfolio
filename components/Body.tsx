"use client";

import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    title: "Software Developer @ Lab Systems Pvt. Ltd.",
    duration: "Aug 2023 – Aug 2024",
    description: [
      "Developed cryptocurrency forensic tools, improving processing speed by 30%.",
      "Led a team of 5, optimizing workflows and improving collaboration efficiency by 20%.",
      "Worked with Blockchain, Next.js, Python, SQL, Flask API, and Networking.",
    ],
  },
  {
    title: "Blockchain Research Intern @ Lab Systems Pvt. Ltd.",
    duration: "Aug 2022 – July 2023",
    description: [
      "Traced $20M+ worth of cryptocurrencies using OSINT & blockchain analytics.",
      "Deployed & maintained 10+ blockchain nodes for forensic research.",
      "Gained deep expertise in Blockchain Forensics & Crypto Investigation.",
    ],
  },
  {
    title: "Cloud Intern @ AWS (SLRTCE)",
    duration: "Jun 2022 – Jul 2022",
    description: ["Built secure cloud-based applications using AWS EC2, S3, and RDS."],
  },
];

const education = [
  {
    title: "M.S. in Computer Science",
    institution: "University of Massachusetts Amherst",
    duration: "Expected May 2026",
    gpa: "GPA: 3.9/4.0",
  },
  {
    title: "B.E. in Computer Engineering",
    institution: "University of Mumbai",
    duration: "May 2023",
    gpa: "GPA: 3.86/4.0",
  },
];

const BodySection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
      
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
          <Highlight>About Me</Highlight>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm a <strong>Software Developer, Blockchain Researcher, and Digital Forensics Expert</strong> with a strong background in 
          <strong> Next.js, AI, and Cloud Computing</strong>. Passionate about solving <strong>real-world forensic and cybersecurity challenges</strong>, 
          I have worked on projects related to <strong>blockchain tracing, AI-driven solutions, and enterprise security</strong>.
        </p>
      </motion.div>

      {/* Education Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={timelineVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
          <Highlight>Education</Highlight>
        </h2>
        <div className="mt-6 flex flex-col relative border-l-4 border-gray-300 dark:border-gray-600 pl-6 space-y-6">
          {education.map((edu, index) => (
            <motion.div key={index} className="relative" variants={timelineVariants}>
              <div className="absolute w-4 h-4 bg-gray-500 dark:bg-gray-300 rounded-full -left-[10px] top-2" />
              <h3 className="text-xl font-semibold dark:text-white">{edu.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-400">{edu.gpa}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={timelineVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
          <Highlight>Professional Experience</Highlight>
        </h2>
        <div className="mt-6 flex flex-col relative border-l-4 border-gray-300 dark:border-gray-600 pl-6 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div key={index} className="relative" variants={timelineVariants}>
              <div className="absolute w-4 h-4 bg-gray-500 dark:bg-gray-300 rounded-full -left-[10px] top-2" />
              <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact & Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
          <Highlight>Let's Connect</Highlight>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          📩 <strong>Email:</strong> jeetsharma2112@gmail.com | 🌐 <strong>Portfolio:</strong> 
          <a href="https://jeet-sharma.vercel.app/" target="_blank" className="underline"> Jeet Sharma</a>
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">
          Get in Touch <LucideArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>

    </section>
  );
};

export default BodySection;

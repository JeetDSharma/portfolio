"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import EmailWithCopy from "./EmailClipboard";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import GitHubActivity from "./GitHubActivity";
import ArchitectureModal from "./ArchitectureModal";
import CommandPalette from "./CommandPalette";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    title: "Full Stack Development Intern @ Karpuragaurai Technologies",
    duration: "May 2025 – Aug 2025",
    year: "2025",
    achievement:
      "Architected multi-tenant RAG backend for business customer support across chat, WhatsApp, and voice transcripts with semantic retrieval and event-driven orchestration",
    impact: [
      { metric: "5+", label: "Active Tenants" },
      { metric: "1K+", label: "Queries/Day" },
      { metric: "<2s", label: "Response Time" },
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "AWS EC2",
      "Docker",
    ],
  },
  {
    title: "Founding Full Stack Engineer @ Lab Systems Pvt. Ltd.",
    duration: "May 2023 – Aug 2024",
    year: "2023",
    achievement:
      "Architected AI-driven forensics platform from zero to production serving enterprise clients",
    impact: [
      { metric: "$20M+", label: "Revenue Impact" },
      { metric: "20+", label: "APIs Designed" },
      { metric: "0→1", label: "Founding Engineer" },
    ],
    techStack: [
      "Next.js",
      "Python",
      "C++",
      "Flask",
      "SQL/NoSQL",
      "Docker",
      "AWS",
      "Cloudflare",
    ],
  },
  {
    title: "Full Stack Software Engineer Intern @ Lab Systems Pvt. Ltd.",
    duration: "Aug 2022 – Apr 2023",
    year: "2022",
    achievement:
      "Built distributed graph database with sharded architecture and real-time streaming pipeline",
    impact: [
      { metric: "2B+", label: "Records Processed" },
      { metric: "70%", label: "Query Speed ↑" },
      { metric: "<1s", label: "Stream Latency" },
    ],
    techStack: ["Python", "Node.js", "MongoDB", "LevelDB", "Docker", "Linux"],
  },
];

const Skills = [
  {
    title: "Application Layer",
    skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Business Logic",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "C++",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Data Layer",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Neo4j",
      "Elasticsearch",
      "pgvector",
      "LevelDB",
    ],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "AWS", "Linux", "CI/CD", "Cloudflare", "WebSockets"],
  },
  {
    title: "Architecture Patterns",
    skills: [
      "Distributed Systems",
      "Event-Driven Architecture",
      "Microservices",
      "Data Pipelines",
      "System Design",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Massachusetts Amherst",
    duration: "Sep 2024 – May 2026",
    gpa: "GPA: 3.86/4.0",
    year: "2024",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Mumbai",
    duration: "Aug 2019 – May 2023",
    year: "2019",
    gpa: "GPA: 3.87/4.0",
  },
];

const projects = [
  {
    title: "myFrt: Digital Forensics Platform",
    description:
      "Production-grade digital forensics tool for processing and analyzing digital evidence. Enterprise platform handling large-scale forensic investigations with advanced data extraction and analysis capabilities.",
    techStack: [
      "Next.js",
      "Python",
      "C++",
      "MongoDB",
      "Elasticsearch",
      "Docker",
      "AWS",
    ],
    isEnterprise: true,
    links: {
      github: null,
      demo: "https://myfrt.com/",
      paperLink: null,
      patentLink: null,
    },
  },
  {
    title: "MediLog: Blockchain-Based Pharmaceutical Supply Chain System",
    description:
      "Designed and deployed an extensive end-to-end pharmaceutical supply chain solution leveraging blockchain technology, ensuring tamper-proof tracking of medical drugs and presented the solution to the Indian Medical Association.",
    techStack: ["Ethereum", "Solidity", "MERN Stack"],
    hasPatent: true,
    links: {
      github: null,
      demo: null,
      paperLink: null,
      patentLink:
        "https://register.dpma.de/DPMAregister/pat/register?AKZ=2020231028233&CURSOR=0",
    },
  },
  {
    title: "LLM-Router: Intelligent Model Selection",
    description:
      "Fine-tuned DistilBERT and CodeBERT classifiers to dynamically route LLM requests, reducing inference costs by ~70% while preserving output quality. Implemented guardrails and fallback mechanisms for predictable system behavior.",
    techStack: ["Python", "PyTorch", "HuggingFace", "FastAPI", "Docker"],
    links: {
      github: "https://github.com/JeetDSharma/LLM-Router",
      demo: null,
      paperLink: null,
      patentLink: null,
    },
  },
  {
    title: "AI-Powered Recipe App",
    description:
      "Built a full-stack AI-driven recipe generation platform enabling users to create personalized meals based on available ingredients, dietary preferences, and allergies, leading to a 40% reduction in recipe search time.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "GPT-4o",
      "JWT",
      "RESTful APIs",
    ],
    links: {
      github: "https://github.com/JeetDSharma/AI-Powered-Recipe-Social-App",
      demo: null,
    },
  },
  {
    title: "Covid-19 Detection using Chest X-RAY",
    description:
      "Developed a web app for Covid-19 detection from Chest X-ray images, achieving 90%+ accuracy in classification. Improved model performance by 30% using data augmentation and hyperparameter tuning.",
    techStack: ["PyTorch", "Flask", "SQLite", "OpenCV"],
    links: {
      github: null,
      demo: null,
      paperLink: "https://www.ijrar.org/papers/IJRAR22B1808.pdf",
    },
  },
];

const emailLink = `mailto:jeetsharma2112@gmail.com
?subject=Interested%20in%20Connecting%20with%20You!
&body=Hi%20Jeet,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0AThanks!`;

const BodySection = () => {
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] =
    React.useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);

  // Command Palette keyboard shortcut (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="max-w-5xl mx-auto px-6 py-20 space-y-16 overflow-hidden"
      id="body-section"
    >
      {/* About Me */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            About
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Founding engineer building production-grade distributed systems and AI
          platforms.
          <br />
          From zero to enterprise scale.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            System Architecture
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-1">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 border-l-4 border-gray-900 dark:border-gray-100 p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-gray-100">
                  {skill.title}
                </h3>
                <div className="h-px flex-1 mx-4 bg-gray-200 dark:bg-gray-800"></div>
                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-600">
                  LAYER {index + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] font-mono text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Project Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            Selected Work
          </span>
        </h2>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-100 transition-colors duration-300 p-8"
            >
              {/* Badges */}
              {(project.hasPatent || project.isEnterprise) && (
                <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800 flex gap-2">
                  {project.isEnterprise && (
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-2 py-1">
                      ENTERPRISE
                    </span>
                  )}
                  {project.hasPatent && (
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-2 py-1">
                      PATENT
                    </span>
                  )}
                </div>
              )}

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
                {project.links.paperLink && (
                  <a
                    href={project.links.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    Read Paper →
                  </a>
                )}
                {project.links.patentLink && (
                  <a
                    href={project.links.patentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    View Patent →
                  </a>
                )}
                {/* Show Architecture button for myFRT project */}
                {project.isEnterprise && (
                  <button
                    onClick={() => setIsArchitectureModalOpen(true)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    View Architecture →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Modal */}
      <ArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />

      {/* Education Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={timelineVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            Education
          </span>
        </h2>

        <div className="mt-10 flex flex-col relative space-y-16 max-w-4xl mx-auto">
          {education.map((edu, index) => {
            return (
              <div
                key={index}
                className="relative flex w-full justify-center items-center"
              >
                {/* Timeline Bar */}
                <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 h-full"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-sm rotate-45"></div>

                {/* Education Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative w-full max-w-2xl bg-white dark:bg-gray-950 p-8 border-l-4 border-gray-900 dark:border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  {/* Degree and Institution */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm font-mono text-gray-500 dark:text-gray-400 tracking-wide">
                        {edu.duration}
                      </p>
                      {edu.gpa && (
                        <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Professional Experience Timeline */}
      <motion.div
        id="experience"
        initial="hidden"
        whileInView="visible"
        variants={timelineVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            Professional Experience
          </span>
        </h2>

        <div className="mt-10 flex flex-col relative space-y-16 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex w-full justify-center items-center"
            >
              {/* Timeline Bar */}
              <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 h-full"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-sm rotate-45"></div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative w-full max-w-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-100 transition-colors duration-300 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {/* Year Badge */}
                <div className="absolute -left-px -top-px bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-4 py-1 text-[10px] font-mono uppercase tracking-widest">
                  {exp.year}
                </div>

                <div className="p-8 pt-12">
                  {/* Job Title & Company */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Achievement Context */}
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.achievement}
                  </p>

                  {/* Visual Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {exp.impact.map((item, i) => (
                      <div
                        key={i}
                        className="text-center p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
                      >
                        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                          {item.metric}
                        </div>
                        <div className="text-[9px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 border-t border-gray-100 dark:border-gray-900">
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <GitHubActivity />
      </motion.div>

      {/* /* Contact & Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto py-16"
        id="contact"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            Let's Connect
          </span>
        </h2>

        {/* Contact Info */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <a
                  href="mailto:jeetsharma2112@gmail.com"
                  className="text-sm font-mono text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  jeetsharma2112@gmail.com
                </a>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                  +1 (413) 466 5844
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  GitHub
                </p>
                <a
                  href="https://github.com/JeetDSharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  github.com/JeetDSharma
                </a>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/jeet-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/jeet-sharma
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-sm font-mono uppercase tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                  View Resume
                </button>
              </a>
              <a href={emailLink} className="flex-1">
                <button className="w-full px-6 py-3 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 text-sm font-mono uppercase tracking-wider hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-colors">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
      >
        {/* Build Info Badge */}
        <div className="mb-6 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                PRODUCTION
              </span>
            </div>
            <div className="h-3 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-500">Built</span>{" "}
              <span className="text-gray-900 dark:text-white">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="h-3 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-500">Commit</span>{" "}
              <a
                href={`https://github.com/JeetDSharma/portfolio/commit/${
                  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono"
              >
                {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ||
                  "dev"}
              </a>
            </div>
            <div className="h-3 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-500">Deploy</span>{" "}
              <span className="text-gray-900 dark:text-white">Vercel Edge</span>
            </div>
            <div className="h-3 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
            <div className="text-gray-500 dark:text-gray-400">
              <span className="text-gray-400 dark:text-gray-500">Region</span>{" "}
              <span className="text-gray-900 dark:text-white">
                {process.env.NEXT_PUBLIC_VERCEL_REGION || "Global"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <span>© 2026 Jeet Sharma</span>
            <span className="hidden md:inline">Built with Next.js 14</span>
          </div>
          <div className="flex items-center gap-6">
            {/* Performance score from Lighthouse audit: Jan 2026 (Desktop)
                Re-test if major dependencies change */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Performance: 98/100</span>
            </div>
            <a
              href="https://github.com/JeetDSharma/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              View Source Code →
            </a>
          </div>
        </div>
      </motion.div>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Architecture Modal */}
      <ArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />
    </section>
  );
};

export default BodySection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import EmailWithCopy from "./EmailClipboard";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    title: "Full Stack Development Intern @ Karpuragaurai Technologies",
    duration: "May 2025 – Aug 2025",
    year: "2025",
    description: [
      "Integrated vector-based semantic search (Pinecone) achieving 95%+ accuracy in RAG-based responses.",
      "Architected event-driven backend enabling sub-second latency across 7+ real-time integrations (WhatsApp, SMS, Gmail, Twilio).",
      "Built robust validation and error-handling layers ensuring reliable data flow across asynchronous workflows.",
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "Pinecone",
      "WebSockets",
      "Docker",
    ],
    highlight: "95%+ Accuracy",
  },
  {
    title: "Founding Full Stack Engineer @ Lab Systems Pvt. Ltd.",
    duration: "May 2023 – Aug 2024",
    year: "2023",
    description: [
      "Founding engineer architecting AI-driven forensics platform from zero to production serving enterprise clients.",
      "Designed scalable data pipelines and 20+ REST APIs supporting high-volume investigative workflows.",
      "Built enterprise-grade UIs optimized for large datasets and complex forensic analysis tasks.",
      "Led engineering team establishing Git workflows, code reviews, and release practices maintaining delivery velocity.",
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
    highlight: "Founding Engineer",
  },
  {
    title: "Full Stack Software Engineer Intern @ Lab Systems Pvt. Ltd.",
    duration: "Aug 2022 – Apr 2023",
    year: "2022",
    description: [
      "Developed cryptocurrency forensics solutions reducing manual processing time by 70%.",
      "Designed hybrid MongoDB-LevelDB storage enabling fast lookups across 2B+ transaction records.",
      "Contributed to investigations involving global clients with $20M+ financial exposure.",
    ],
    techStack: ["Python", "Node.js", "MongoDB", "LevelDB", "Docker", "Linux"],
    highlight: "70% Faster",
  },
];

const Skills = [
  {
    title: "Languages & Databases",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "SQL",
      "NoSQL",
      "GraphQL",
      "Bash",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Express.js",
      "Flask",
      "Node.js",
      "Pandas",
      "Polars",
      "PyTorch",
      "TailwindCSS",
    ],
  },
  {
    title: "Systems & Infrastructure",
    skills: [
      "Docker",
      "AWS",
      "Cloudflare",
      "Linux",
      "CI/CD",
      "Redis",
      "Elasticsearch",
      "Neo4j",
      "MongoDB",
    ],
  },
  {
    title: "Core Expertise",
    skills: [
      "Backend Engineering",
      "Distributed Systems",
      "Event-Driven Architecture",
      "REST APIs",
      "Data Pipelines",
      "System Design",
    ],
  },
];

const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of Massachusetts Amherst",
    duration: "Sep 2024 – May 2026",
    gpa: "GPA: 3.86/4.0",
    courses: [
      "Neural Networks",
      "Applied Statistics",
      "Software Engineering",
      "Scalable Data Systems",
    ],
    year: "2024",
  },
  {
    degree: "B.E. in Computer Engineering",
    institution: "University of Mumbai",
    duration: "Aug 2019 – May 2023",
    gpa: "GPA: 3.87/4.0",
    courses: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Database Management",
    ],
    year: "2019",
  },
];

const projects = [
  {
    title: "LLM-Router: Intelligent Model Selection",
    description:
      "Fine-tuned DistilBERT and CodeBERT classifiers to dynamically route LLM requests, reducing inference costs by ~70% while preserving output quality. Implemented guardrails and fallback mechanisms for predictable system behavior.",
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "DistilBERT",
      "CodeBERT",
    ],
    links: {
      github: null,
      demo: null,
      paperLink:
        "https://drive.google.com/file/d/1sT_glWXGqHPYoWQDw0jpKA6_r_wKf13G/view?usp=drive_link",
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
    title: "MediLog: Blockchain-Based Pharmaceutical Supply Chain System",
    description:
      "Designed and deployed an extensive end-to-end pharmaceutical supply chain solution leveraging blockchain technology, ensuring tamper-proof tracking of medical drugs and presented the solution to the Indian Medical Association.",
    techStack: ["Ethereum", "Solidity", "MERN Stack"],
    links: {
      github: null,
      demo: null,
      patentLink:
        "https://register.dpma.de/DPMAregister/pat/register?AKZ=2020231028233&CURSOR=0",
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
  return (
    <section
      className="max-w-5xl mx-auto px-6 py-20 space-y-16 overflow-hidden"
      id="body-section"
    >
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          <span className="border-b-4 border-gray-900 dark:border-gray-100 pb-2">
            About Me
          </span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          <strong className="text-gray-800 dark:text-white">
            Founding software engineer
          </strong>{" "}
          specializing in{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            backend systems, distributed architecture, and production AI
          </strong>
          . Proven track record architecting{" "}
          <strong className="text-gray-800 dark:text-white">
            zero-to-production platforms
          </strong>{" "}
          serving enterprise clients, with expertise in{" "}
          <strong className="text-blue-600 dark:text-blue-400">
            scalable data pipelines handling billions of records
          </strong>{" "}
          and
          <strong className="text-gray-800 dark:text-white">
            event-driven systems achieving sub-second latency
          </strong>
          .
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Currently pursuing{" "}
          <strong className="text-gray-800 dark:text-white">
            MS in Computer Science at UMass Amherst
          </strong>{" "}
          (GPA: 3.86) with focus on scalable data systems and applied machine
          learning.
          <strong className="text-blue-600 dark:text-blue-400">
            Reduced costs by 70%
          </strong>{" "}
          through intelligent system design,
          <strong className="text-blue-600 dark:text-blue-400">
            improved processing speeds by 70%
          </strong>
          , and delivered systems supporting{" "}
          <strong className="text-gray-800 dark:text-white">
            $20M+ in enterprise operations
          </strong>
          .
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
            Technical Stack
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-950 p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-gray-100 transition-colors duration-300"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
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

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-8 hover:border-gray-900 dark:hover:border-gray-100 transition-colors duration-300"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links Section */}
              <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    View Code →
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
                {project.links.paperLink && (
                  <a
                    href={project.links.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Read Paper →
                  </a>
                )}
                {project.links.patentLink && (
                  <a
                    href={project.links.patentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    View Patent →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
                  <div className="mb-3">
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
                      <p className="text-sm font-mono text-gray-900 dark:text-gray-100">
                        {edu.gpa}
                      </p>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-xs font-mono border border-gray-200 dark:border-gray-800"
                        >
                          {course}
                        </span>
                      ))}
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Impact Highlights */}
                  <div className="mb-6 space-y-3">
                    {exp.description.map((desc, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-1 h-1 bg-gray-900 dark:bg-gray-100 mt-2 flex-shrink-0 group-hover:w-4 transition-all duration-200"></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {desc}
                        </p>
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

      {/* /* Contact & Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto py-16"
        id="contact-section"
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
    </section>
  );
};

export default BodySection;

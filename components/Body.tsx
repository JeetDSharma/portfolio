"use client";

import React from "react";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import { CACHE_ONE_YEAR } from "next/dist/lib/constants";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    title: "Software Developer @ Lab Systems Pvt. Ltd.",
    duration: "Aug 2023 – Aug 2024",
    year: "2023",
    description: [
      "Developed cryptocurrency forensic tools, improving processing speed by 30%.",
      "Led a team of 5, optimizing workflows and improving collaboration efficiency by 20%.",
      "Worked with Blockchain, Next.js, Python, SQL, Flask API, and Networking.",
    ],
    techStack: ["Python", "MongoDB", "Elasticearch", "Cloudflare", ],
  },
  {
    title: "Blockchain Research Intern @ Lab Systems Pvt. Ltd.",
    duration: "Aug 2022 – July 2023",
    year: "2022",
    description: [
      "Traced $20M+ worth of cryptocurrencies using OSINT & blockchain analytics.",
      "Deployed & maintained 10+ blockchain nodes for forensic research.",
      "Gained deep expertise in Blockchain Forensics & Crypto Investigation.",
    ],
    techStack: ["Blockchain", "OSINT", "Forensics"]

  },
  {
    title: "Cloud Intern @ AWS (SLRTCE)",
    duration: "Jun 2022 – Jul 2022",
    year: "2022",
    description: ["Built secure cloud-based applications using AWS EC2, S3, and RDS."],
    techStack: ["AWS", "EC2", "S3", "RDS"],
  },
];

const Skills = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "Java", "C++", "SQL"],
    },
    {
        title: "Frameworks",
        skills: ["Next.js", "React.js", "Flask", "Express", "Node.js"],
    },
    {
        title: "Tools",
        skills: ["Git", "Docker", "Postman", "Wireshark", "Jupyter"],
    },
    {
        title: "Cloud",
        skills: ["AWS", "GCP", "Azure", "Heroku", "Vercel"],
    },
    ];

const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "University of Massachusetts Amherst",
    duration: "Expected May 2026",
    gpa: "GPA: 3.9/4.0",
    courses: [
        "Neural Networks",
        "Applied Statistics",
        "Software Engineering", 
    ],
    year: "2024",
  },
  {
    degree: "B.E. in Computer Engineering",
    institution: "University of Mumbai",
    duration: "May 2023",
    gpa: "GPA: 3.86/4.0",
    courses: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Database Management",
    ],
    year: "2019",

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

      {/* Skills */}
      <motion.div
    initial="hidden"
    whileInView="visible"
    variants={timelineVariants}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-center"
>
    <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
        <Highlight>Skills</Highlight>
    </h2>
    <div className="mt-6 flex flex-col space-y-6">
        {Skills.map((skill, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -250 : 250 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false }}
                className="text-center"
            >
                <h3 className="text-xl font-semibold dark:text-white">{skill.title}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {skill.skills.map((s, i) => (
                        <motion.span 
                            key={i} 
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 shadow-sm  hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {s}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
</motion.div>


            

      {/* Education Timeline
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
      </motion.div> */}
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

    <div className="mt-10 flex flex-col relative space-y-16 max-w-4xl mx-auto">
        {education.map((edu, index) => {
            // const showYear = index === 0 || edu.year !== education[index - 1].year; // Display year only if it's different from the previous one
            const showYear = false;
            const isYearLeft = index % 2 === 0; // Alternate year position

            return (
                <div key={index} className="relative flex w-full">
                    {/* Alternating Year Labels */}
                    {showYear && (
                        <motion.div
                            initial={{ opacity: 0, x: isYearLeft ? -100 : 100 }} // Left for even, Right for odd
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`absolute top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700 dark:text-gray-300 
                                        ${isYearLeft ? "-left-24" : "-right-24 text-right"}`}
                        >
                            {edu.year}
                        </motion.div>
                    )}

                    {/* Timeline Bar & Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-green-500 dark:bg-green-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold">
                        🎓
                    </div>

                    {/* Education Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 200, 0, 0.3)" }}
                        className={`relative max-w-[45%] bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                    >
                        {/* University & Degree */}
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-green-500 dark:bg-green-400 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                                🎓
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold dark:text-white">{edu.degree}</h3>
                        </div>

                        {/* Institution & Duration */}
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{edu.institution}</p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{edu.duration}</p>
                        
                        {/* GPA */}
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-400">{edu.gpa}</p>

                        {/* Relevant Courses */}
                        <div className="border-t border-gray-300 dark:border-gray-700 mt-2 pt-2">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                Relevant Coursework:
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {edu.courses.map((course, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-md"
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

    <div className="mt-10 flex flex-col relative space-y-16 max-w-4xl mx-auto">
        {experiences.map((exp, index) => {
            // const showYear = index === 0 || exp.year !== experiences[index - 1].year; // Display year only if it's different from the previous one
            const showYear = true; // Always show year
            const isYearLeft = index % 2 === 1; // Alternate year position

            return (
                <div key={index} className="relative flex w-full">
                    {/* Alternating Year Labels */}
                    {showYear && (
                        <motion.div
                            initial={{ opacity: 0, x: isYearLeft ? -100 : 100 }} // Alternate from left & right
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`absolute top-1/2 -translate-y-1/2 text-xl font-bold text-gray-700 dark:text-gray-300 
                                        ${isYearLeft ? "-left-24" : "-right-24 text-right"}`}
                        >
                            {exp.year}
                        </motion.div>
                    )}

                    {/* Timeline Bar & Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                    </div>

                    {/* Experience Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(0, 132, 255, 0.3)" }}
                        className={`relative max-w-[45%] bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
                    >
                        {/* Job Title & Company */}
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-blue-500 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                                {index + 1}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold dark:text-white">{exp.title}</h3>
                        </div>

                        {/* Experience Duration (Inside Card) */}
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>

                        {/* Work Responsibilities */}
                        <div className="border-t border-gray-300 dark:border-gray-700 mt-2 pt-2">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                Responsibilities:
                            </h4>
                            <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside text-left space-y-1">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="border-t border-gray-300 dark:border-gray-700 mt-3 pt-2">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                Tech Stack:
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {exp.techStack.map((tech, i) => (
                                    <span 
                                        key={i} 
                                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-md"
                                    >
                                        {tech}
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

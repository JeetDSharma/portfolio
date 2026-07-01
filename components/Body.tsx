"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectCover from "@/components/ProjectCover";
import LazyGitHubActivity from "@/components/LazyGitHubActivity";
import ArchitectureModal from "@/components/ArchitectureModal";
import {
  founderProjects,
  experiencesFounder,
  education,
} from "@/lib/founderContent";

const emailLink = `mailto:jeetsharma2112@gmail.com
?subject=Interested%20in%20Connecting%20with%20You!
&body=Hi%20Jeet,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20potential%20opportunities.%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0AThanks!`;

const BodySection = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [phoneCopied, setPhoneCopied] = React.useState(false);
  const [architectureOpen, setArchitectureOpen] = React.useState(false);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      className="mx-auto max-w-5xl space-y-20 overflow-hidden px-6 py-16 md:py-24"
      id="body-section"
    >
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Selected work
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {founderProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "50px" }}
              className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm"
            >
              <ProjectCover media={project.media} title={project.title} />
              <div className="space-y-3 p-5 md:p-6">
                {/* header row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                    {project.category}
                  </span>
                  {project.badges?.includes("enterprise") && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Enterprise
                    </span>
                  )}
                  {project.badges?.includes("patent") && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Patent
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.story}
                </p>

                {/* stat highlight */}
                {project.stat && (
                  <div className="inline-flex items-baseline gap-1.5 rounded-lg bg-brand/10 px-3 py-1.5">
                    <span className="text-lg font-bold text-brand">{project.stat.value}</span>
                    <span className="text-xs text-brand/80">{project.stat.label}</span>
                  </div>
                )}

                {/* client logos */}
                {project.clientLogos && project.clientLogos.length > 0 && (
                  <div className="border-t border-border/60 pt-3">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Trusted by
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {project.clientLogos.map((logo) => (
                        <div key={logo.src} className="relative h-6 w-16">
                          <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="64px" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* links */}
                <div className="flex flex-wrap items-center gap-4 border-t border-border/60 pt-3 text-sm font-medium">
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-brand underline-offset-4 hover:underline">
                      Live site →
                    </a>
                  )}
                  {project.hasArchitecture && (
                    <button
                      type="button"
                      onClick={() => setArchitectureOpen(true)}
                      className="text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline"
                    >
                      View architecture
                    </button>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline">
                      GitHub
                    </a>
                  )}
                  {project.links.paperLink && (
                    <a href={project.links.paperLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline">
                      Paper
                    </a>
                  )}
                  {project.links.patentLink && (
                    <a href={project.links.patentLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline">
                      Patent
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <motion.div
        id="experience"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Experience
        </h2>

        {/* Timeline rail + feature cards */}
        <div className="relative pl-8 md:pl-12">
          {/* vertical rail */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/60 via-border to-transparent md:left-[11px]"
          />
          {experiencesFounder.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* node marker */}
              <span
                aria-hidden
                className="absolute -left-8 top-6 flex h-4 w-4 items-center justify-center md:-left-12"
              >
                <span className="h-3.5 w-3.5 rounded-full border-2 border-brand bg-background" />
              </span>

              <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 text-left md:p-8">
                {/* Header: year · role · company — duration */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                      {exp.year}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                      {exp.role}
                    </h3>
                    <span className="text-base text-muted-foreground">· {exp.company}</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {exp.duration}
                  </span>
                </div>

                {/* Achievement */}
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {exp.achievement}
                </p>

                {/* Metric tiles */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {exp.impact.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border/60 bg-background/40 px-3 py-4 text-center"
                    >
                      <div className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {item.metric}
                      </div>
                      <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-6 space-y-2.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand/70"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/70 bg-background/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Education
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm"
            >
              <h3 className="text-base font-bold tracking-tight text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>{edu.duration}</span>
                {edu.gpa && (
                  <span className="font-medium text-foreground">{edu.gpa}</span>
                )}
              </div>
              {edu.context && (
                <p className="mt-4 border-t border-border/60 pt-4 text-xs italic leading-relaxed text-muted-foreground">
                  {edu.context}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div id="github">
        <LazyGitHubActivity />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl py-12 text-center"
        id="contact"
      >
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Let&apos;s connect
        </h2>
        <p className="mt-4 text-muted-foreground">
          Building something ambitious? I&apos;d love to hear what you&apos;re working on.
        </p>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border/80 bg-card p-8 shadow-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2 text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <button
                type="button"
                onClick={() => copyToClipboard("jeetsharma2112@gmail.com", "email")}
                className="relative text-left text-sm font-medium text-foreground transition hover:text-brand"
              >
                jeetsharma2112@gmail.com
                {emailCopied && (
                  <span className="absolute -top-7 left-0 rounded bg-brand px-2 py-0.5 text-xs text-brand-foreground">
                    Copied
                  </span>
                )}
              </button>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Phone
              </p>
              <button
                type="button"
                onClick={() => copyToClipboard("+1 (413) 466 5844", "phone")}
                className="relative text-left text-sm font-medium text-foreground transition hover:text-brand"
              >
                +1 (413) 466 5844
                {phoneCopied && (
                  <span className="absolute -top-7 left-0 rounded bg-brand px-2 py-0.5 text-xs text-brand-foreground">
                    Copied
                  </span>
                )}
              </button>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                GitHub
              </p>
              <a
                href="https://github.com/JeetDSharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground transition hover:text-brand"
              >
                github.com/JeetDSharma
              </a>
            </div>
            <div className="space-y-2 text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/jeet-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground transition hover:text-brand"
              >
                linkedin.com/in/jeet-sharma
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1">
              <span className="block w-full rounded-xl bg-foreground py-3.5 text-center text-sm font-semibold text-background transition hover:opacity-90">
                View resume
              </span>
            </a>
            <a href={emailLink} className="flex-1">
              <span className="block w-full rounded-xl border border-border py-3.5 text-center text-sm font-semibold text-foreground transition hover:border-brand hover:text-brand">
                Get in touch
              </span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 border-t border-border/60 pt-8"
      >
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Jeet Sharma</span>
          <a
            href="https://github.com/JeetDSharma/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            Source
          </a>
        </div>
      </motion.footer>

      <ArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />
    </section>
  );
};

export default BodySection;

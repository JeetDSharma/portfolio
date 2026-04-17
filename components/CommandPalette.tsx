"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Briefcase,
  Code,
  Mail,
  Github,
  FileText,
} from "lucide-react";
import { founderProjects } from "@/lib/founderContent";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
    }
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose();
    }
  };

  const navigateToExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jeetsharma2112@gmail.com");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[20vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl mx-4"
            >
              <Command
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
                shouldFilter={true}
              >
                <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4">
                  <Search className="w-5 h-5 text-gray-400 dark:text-gray-600 mr-3" />
                  <Command.Input
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Search projects, skills, sections..."
                    className="flex-1 py-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none text-sm"
                    autoFocus
                  />
                  <kbd
                    onClick={onClose}
                    className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  >
                    ESC
                  </kbd>
                </div>

                <Command.List className="max-h-[400px] overflow-y-auto p-2">
                  <Command.Empty className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    No results found.
                  </Command.Empty>

                  <Command.Group
                    heading="Navigation"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2 pt-2 pb-1"
                  >
                    <Command.Item
                      onSelect={() => scrollToSection("projects")}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <Code className="w-4 h-4 text-gray-400" />
                      <span>Projects</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => scrollToSection("experience")}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span>Experience</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => scrollToSection("github")}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-400" />
                      <span>GitHub activity</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => scrollToSection("contact")}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>Contact</span>
                    </Command.Item>
                  </Command.Group>

                  <Command.Group
                    heading="Projects"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2 pt-3 pb-1"
                  >
                    {founderProjects.map((project) => (
                      <Command.Item
                        key={project.title}
                        keywords={[
                          project.title,
                          project.category,
                          ...(project.techStack ?? []),
                          ...(project.badges ?? []),
                        ]}
                        onSelect={() => {
                          if (project.links.demo) {
                            navigateToExternal(project.links.demo);
                          } else {
                            scrollToSection("projects");
                          }
                        }}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                      >
                        <Code className="w-4 h-4 text-gray-400" />
                        <div className="flex-1">
                          <div className="font-medium">
                            {project.title} · {project.category}
                          </div>
                          {project.techStack && project.techStack.length > 0 && (
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {project.techStack.slice(0, 5).join(", ")}
                            </div>
                          )}
                        </div>
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group
                    heading="Actions"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 px-2 pt-3 pb-1"
                  >
                    <Command.Item
                      onSelect={() =>
                        navigateToExternal("https://github.com/JeetDSharma")
                      }
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-400" />
                      <span>Open GitHub Profile</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={copyEmail}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>Copy Email Address</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => navigateToExternal("https://myfrt.com/")}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 dark:text-white rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-900 transition-colors"
                    >
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span>View myFrt Demo</span>
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

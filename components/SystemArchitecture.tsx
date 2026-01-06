"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Component {
  id: string;
  name: string;
  shortName: string;
  techStack: string[];
  x: number;
  y: number;
}

const components: Component[] = [
  // Left: Client
  {
    id: "client",
    name: "Next.js Portal",
    shortName: "Next.js\nEvidence Portal",
    techStack: ["React", "TypeScript", "Case Upload", "Report Generation"],
    x: 50,
    y: 200,
  },

  // Middle: API + Cache
  {
    id: "api",
    name: "Flask API Gateway",
    shortName: "Flask API\nGateway",
    techStack: ["Python", "JWT Auth", "Rate Limiting", "Request Routing"],
    x: 250,
    y: 150,
  },
  {
    id: "cache",
    name: "Redis Cache",
    shortName: "Redis\nSession Cache",
    techStack: ["In-Memory Store", "Session Management", "Fast Lookup"],
    x: 250,
    y: 250,
  },

  // Right-Middle: Processing
  {
    id: "engine",
    name: "Python Analysis Engine",
    shortName: "Python\nAnalysis Engine",
    techStack: ["Pattern Detection", "ML Models", "Timeline Builder"],
    x: 450,
    y: 150,
  },
  {
    id: "parser",
    name: "C++ Evidence Parser",
    shortName: "C++ Parser\nEvidence Extract",
    techStack: ["File Parsing", "Metadata Extraction", "Format Detection"],
    x: 450,
    y: 250,
  },

  // Far Right: Data
  {
    id: "mongo",
    name: "MongoDB",
    shortName: "MongoDB\nCase Records",
    techStack: ["Document Store", "Case Data", "User Sessions", "Metadata"],
    x: 650,
    y: 150,
  },
  {
    id: "elastic",
    name: "Elasticsearch",
    shortName: "Elasticsearch\nSearch Index",
    techStack: ["Full-text Search", "Evidence Query", "Fast Retrieval"],
    x: 650,
    y: 230,
  },
];

const connections = [
  { from: "client", to: "api" },
  { from: "api", to: "cache" },
  { from: "api", to: "engine" },
  { from: "api", to: "parser" },
  { from: "engine", to: "mongo" },
  { from: "engine", to: "elastic" },
  { from: "parser", to: "mongo" },
  { from: "cache", to: "mongo" },
];

const SystemArchitecture = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  return (
    <div className="w-full h-[500px] relative">
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            className="fill-gray-400 dark:fill-gray-600"
          >
            <polygon points="0 0, 10 3, 0 6" />
          </marker>
        </defs>
        {connections.map((conn, i) => {
          const from = components.find((c) => c.id === conn.from);
          const to = components.find((c) => c.id === conn.to);
          if (!from || !to) return null;

          const isActive =
            hoveredComponent === conn.from || hoveredComponent === conn.to;

          return (
            <motion.line
              key={i}
              x1={from.x + 60}
              y1={from.y + 30}
              x2={to.x}
              y2={to.y + 30}
              stroke={isActive ? "#6b7280" : "#d1d5db"}
              strokeWidth={isActive ? 3 : 2}
              markerEnd="url(#arrowhead)"
              className="dark:stroke-gray-700"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Component boxes */}
      {components.map((component) => {
        const isHovered = hoveredComponent === component.id;

        return (
          <motion.div
            key={component.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              left: `${component.x}px`,
              top: `${component.y}px`,
              zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => setHoveredComponent(component.id)}
            onMouseLeave={() => setHoveredComponent(null)}
            className="cursor-pointer"
          >
            {/* Component Box */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative w-40 h-20 flex items-center justify-center border-2 transition-all duration-200 ${
                isHovered
                  ? "border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-900 shadow-lg"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 shadow-md"
              }`}
            >
              <div className="text-center px-2">
                <div className="text-[11px] font-bold text-gray-900 dark:text-white tracking-tight leading-tight whitespace-pre-line">
                  {component.shortName}
                </div>
              </div>
            </motion.div>

            {/* Hover Detail Popup */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 w-48 p-4 bg-white dark:bg-gray-950 border-2 border-gray-900 dark:border-gray-100 shadow-2xl z-30"
              >
                <div className="text-xs font-bold text-gray-900 dark:text-white mb-2">
                  {component.name}
                </div>
                <div className="text-[10px] font-mono text-gray-600 dark:text-gray-400 space-y-1">
                  {component.techStack.map((tech, i) => (
                    <div key={i}>• {tech}</div>
                  ))}
                </div>
                {/* Arrow pointing down */}
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900 dark:border-t-gray-100"></div>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Layer Labels */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-500 dark:text-gray-400">
        ← Client | API | Processing | Data →
      </div>
    </div>
  );
};

export default SystemArchitecture;

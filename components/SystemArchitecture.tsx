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
    x: 30,
    y: 200,
  },

  // Middle: API + Cache
  {
    id: "api",
    name: "Flask API Gateway",
    shortName: "Flask API\nGateway",
    techStack: ["Python", "JWT Auth", "Rate Limiting", "Request Routing"],
    x: 200,
    y: 150,
  },
  {
    id: "cache",
    name: "Redis Cache",
    shortName: "Redis\nSession Cache",
    techStack: ["In-Memory Store", "Session Management", "Fast Lookup"],
    x: 200,
    y: 260,
  },

  // Right-Middle: Processing
  {
    id: "engine",
    name: "Python Analysis Engine",
    shortName: "Python\nAnalysis Engine",
    techStack: ["Pattern Detection", "ML Models", "Timeline Builder"],
    x: 370,
    y: 120,
  },
  {
    id: "parser",
    name: "C++ Evidence Parser",
    shortName: "C++ Parser\nEvidence Extract",
    techStack: ["File Parsing", "Metadata Extraction", "Format Detection"],
    x: 370,
    y: 220,
  },
  {
    id: "llm",
    name: "LLM Server",
    shortName: "LLM Server\nAI Analysis",
    techStack: [
      "OpenAI GPT",
      "Evidence Summary",
      "Pattern Recognition",
      "Report Generation",
    ],
    x: 370,
    y: 320,
  },

  // Far Right: Data
  {
    id: "mongo",
    name: "MongoDB",
    shortName: "MongoDB\nCase Records",
    techStack: ["Document Store", "Case Data", "User Sessions", "Metadata"],
    x: 540,
    y: 150,
  },
  {
    id: "elastic",
    name: "Elasticsearch",
    shortName: "Elasticsearch\nSearch Index",
    techStack: ["Full-text Search", "Evidence Query", "Fast Retrieval"],
    x: 540,
    y: 250,
  },
];

const connections = [
  { from: "client", to: "api" },
  { from: "api", to: "cache" },
  { from: "api", to: "engine" },
  { from: "api", to: "parser" },
  { from: "api", to: "llm" },
  { from: "engine", to: "mongo" },
  { from: "engine", to: "elastic" },
  { from: "parser", to: "mongo" },
  { from: "llm", to: "mongo" },
  { from: "cache", to: "mongo" },
];

const SystemArchitecture = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  // Calculate connected nodes for selected component
  const getConnectedNodes = (nodeId: string | null): string[] => {
    if (!nodeId) return [];
    const connected = new Set<string>([nodeId]);
    connections.forEach((conn) => {
      if (conn.from === nodeId) connected.add(conn.to);
      if (conn.to === nodeId) connected.add(conn.from);
    });
    return Array.from(connected);
  };

  const connectedNodes = getConnectedNodes(hoveredComponent);
  const hoveredDetails = components.find((c) => c.id === hoveredComponent);

  return (
    <div className="w-full h-full flex gap-6">
      {/* Left: Diagram (70%) */}
      <div className="flex-[7] relative border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
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

            const isHighlighted =
              hoveredComponent === conn.from || hoveredComponent === conn.to;

            return (
              <motion.line
                key={i}
                x1={from.x + 80}
                y1={from.y + 40}
                x2={to.x}
                y2={to.y + 40}
                stroke={isHighlighted ? "#4b5563" : "#d1d5db"}
                strokeWidth={isHighlighted ? 3 : 2}
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
          const isConnected = connectedNodes.includes(component.id);
          const isDimmed = hoveredComponent && !isConnected;

          return (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isDimmed ? 0.3 : 1,
                scale: 1,
              }}
              transition={{ duration: 0.2 }}
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
                    ? "border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 shadow-lg"
                    : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 shadow-md"
                }`}
              >
                <div className="text-center px-2">
                  <div className="text-[11px] font-bold text-gray-900 dark:text-white tracking-tight leading-tight whitespace-pre-line">
                    {component.shortName}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Right: Info Panel (30%) */}
      <div className="flex-[3] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 overflow-y-auto">
        {hoveredDetails ? (
          <motion.div
            key={hoveredDetails.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {hoveredDetails.name}
              </h3>
              <div className="h-1 w-12 bg-gray-900 dark:bg-gray-100"></div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
                Technology Stack
              </div>
              <div className="space-y-2">
                {hoveredDetails.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-gray-400 dark:text-gray-600">→</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <div className="text-4xl mb-4 text-gray-300 dark:text-gray-700">
                ←
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hover over any component
                <br />
                to view details
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemArchitecture;

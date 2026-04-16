export interface PipelineLayer {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  zDepth: number; // translateZ value for 3D positioning
}

export const pipelineLayers: PipelineLayer[] = [
  {
    id: "application",
    number: "01",
    title: "Application Layer",
    description: "Where the user touches the system.",
    technologies: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
    zDepth: 0,
  },
  {
    id: "business",
    number: "02",
    title: "Business Logic",
    description: "Where data becomes decisions.",
    technologies: ["Node.js", "Express.js", "Python", "Flask", "C++", "REST APIs", "GraphQL"],
    zDepth: -500,
  },
  {
    id: "data",
    number: "03",
    title: "Data Layer",
    description: "Where truth is stored.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Neo4j", "Elasticsearch", "pgvector", "LevelDB"],
    zDepth: -1000,
  },
  {
    id: "infrastructure",
    number: "04",
    title: "Infrastructure",
    description: "Where everything runs.",
    technologies: ["Docker", "AWS", "Linux", "CI/CD", "Cloudflare", "WebSockets"],
    zDepth: -1500,
  },
  {
    id: "architecture",
    number: "05",
    title: "Architecture Patterns",
    description: "How it all connects.",
    technologies: ["Distributed Systems", "Data Pipelines", "System Design", "Event-Driven"],
    zDepth: -2000,
  },
];

// Scroll ranges for each stage (when each layer is the focus)
export const stageRanges = {
  overview: [0, 0.12] as [number, number],
  application: [0.12, 0.30] as [number, number],
  business: [0.30, 0.48] as [number, number],
  data: [0.48, 0.66] as [number, number],
  infrastructure: [0.66, 0.80] as [number, number],
  architecture: [0.80, 0.90] as [number, number],
  pullback: [0.90, 1.0] as [number, number],
};

/**
 * Founder-facing copy and media paths. Drop assets under /public to match;
 * missing images fall back to gradients in components (no broken Image srcs).
 */

export type ProjectLinks = {
  github?: string | null;
  demo?: string | null;
  paperLink?: string | null;
  patentLink?: string | null;
};

export type ProjectMedia =
  | { kind: "video"; src: string; poster?: string }
  | {
      kind: "images";
      items: { src: string; alt: string }[];
    };

export type FounderProject = {
  title: string;
  category: string;
  tagline: string;
  story: string;
  stat?: { value: string; label: string };
  meta?: { year?: string; client?: string; duration?: string };
  media: ProjectMedia;
  clientLogos?: { src: string; alt: string }[];
  techStack?: string[];
  badges?: ("enterprise" | "patent")[];
  hasArchitecture?: boolean;
  links: ProjectLinks;
};

export const founderProjects: FounderProject[] = [
  {
    title: "myFRT",
    category: "Enterprise platform",
    tagline: "Digital forensics platform for real investigations.",
    story: "Built for real investigations. Processes digital evidence at scale, trusted by law enforcement and government clients to help close over 1,000 cases every month.",
    stat: { value: "1,000+", label: "cases solved / month" },
    meta: { year: "2023–present", client: "Lab Systems" },
    media: {
      kind: "video",
      src: "/projects/myfrt/myfrt.mp4",
    },
    clientLogos: [
      { src: "/projects/myfrt/logo1.png", alt: "Client 1" },
      { src: "/projects/myfrt/logo2.png", alt: "Client 2" },
      { src: "/projects/myfrt/logo3.png", alt: "Client 3" },
      { src: "/projects/myfrt/logo4.png", alt: "Client 4" },
    ],
    techStack: ["Next.js", "Python", "C++", "MongoDB", "Elasticsearch", "Docker", "AWS"],
    badges: ["enterprise"],
    hasArchitecture: true,
    links: {
      github: null,
      demo: "https://myfrt.com/",
    },
  },
  {
    title: "Coinspector",
    category: "Forensics · Blockchain",
    tagline: "Cryptocurrency investigation tool.",
    story: "Follows the money across crypto wallets, flags suspicious activity, and gives investigators a clear trail to follow.",
    stat: { value: "$20M+", label: "traced on-chain" },
    meta: { year: "2023–present", client: "Lab Systems" },
    media: {
      kind: "video",
      src: "/projects/coinspector/coinspector.mp4",
    },
    techStack: ["Python", "Next.js", "Neo4j", "Blockchain APIs", "Docker", "AWS"],
    badges: ["enterprise"],
    links: {
      github: null,
      demo: "https://www.karpuragaur.ai/Coinspector/index.html",
    },
  },
  {
    title: "MediLog",
    category: "Blockchain · Trust",
    tagline: "Pharmaceutical supply chain on-chain.",
    story: "Tracks medication from factory to patient so nothing gets swapped, faked, or lost. Evaluated by the Indian Medical Association.",
    meta: { year: "2020", duration: "Research → pilot" },
    media: {
      kind: "video",
      src: "/projects/medilog_video.mp4",
    },
    techStack: ["Ethereum", "Solidity", "MERN Stack"],
    badges: ["patent"],
    links: {
      github: "https://github.com/JeetDSharma/medilog",
      demo: null,
      patentLink:
        "https://register.dpma.de/DPMAregister/pat/register?AKZ=2020231028233&CURSOR=0",
    },
  },
  {
    title: "LLM Router",
    category: "AI product",
    tagline: "Smarter routing, ~70% lower inference cost.",
    story: "Automatically picks the right AI model for each task. Same quality, fraction of the cost.",
    media: {
      kind: "images",
      items: [
        {
          src: "/projects/llm-router/difficulty-router.png",
          alt: "RouteLLM difficulty router UI: local classifier and routing hints",
        },
      ],
    },
    techStack: ["Python", "PyTorch", "HuggingFace", "FastAPI", "Docker"],
    links: {
      github: "https://github.com/JeetDSharma/RouteLLM",
      demo: null,
      paperLink: "https://drive.google.com/file/d/1sT_glWXGqHPYoWQDw0jpKA6_r_wKf13G/view",
    },
  },
  /*
  {
    title: "AI recipe app",
    category: "Consumer · AI",
    tagline: "Personalized meals from what you already have.",
    story: "Turns ingredients and preferences into recipes people actually cook — faster discovery, less scrolling.",
    media: {
      kind: "images",
      items: [] as { src: string; alt: string }[],
    },
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "GPT-4o",
    ],
    links: {
      github: "https://github.com/JeetDSharma/AI-Powered-Recipe-Social-App",
      demo: null,
    },
  },
  {
    title: "Chest X-ray screening",
    category: "Research · Health",
    tagline: "Assistive screening with clear accuracy gains.",
    story: "Triage-style X-ray insights for clinicians — usability first, not leaderboard metrics.",
    meta: { year: "2022" },
    media: {
      kind: "images",
      items: [] as { src: string; alt: string }[],
    },
    techStack: ["PyTorch", "Flask", "SQLite", "OpenCV"],
    links: {
      github: null,
      demo: null,
      paperLink: "https://www.ijrar.org/papers/IJRAR22B1808.pdf",
    },
  },
  */
];

export type ShowcaseConfig = {
  mode: "video" | "images";
  videoSrc?: string;
  poster?: string;
  images: { src: string; alt: string }[];
  /** Seconds between slides when mode is images */
  intervalSec?: number;
};

export const showcaseConfig: ShowcaseConfig = {
  mode: "images",
  videoSrc: "/showcase.mp4",
  poster: "/showcase-poster.jpg",
  /** Add files under public/showcase/ and list them here, or switch mode to "video". */
  images: [] as { src: string; alt: string }[],
  intervalSec: 5,
};

export type HeroStat = { value: string; label: string; context?: string };

export const heroStats: HeroStat[] = [
  { value: "1,000+", label: "cases solved / month", context: "myFRT" },
  { value: "$20M+", label: "traced on-chain", context: "Coinspector" },
  { value: "2B+", label: "records handled", context: "Lab Systems" },
  { value: "~70%", label: "lower AI costs", context: "LLM Router" },
];

export const experiencesFounder = [
  {
    role: "Software Engineer (contract)",
    company: "Karpuragaurai Technologies",
    duration: "May 2025 – Aug 2025",
    year: "2025",
    achievement:
      "Built customer-support AI that pulls the right context across channels so answers stay grounded and fast for multiple business tenants.",
    impact: [
      { metric: "5+", label: "Active tenants" },
      { metric: "30%", label: "Faster responses" },
      { metric: "<2s", label: "Typical reply" },
    ],
    techStack: [
      "Python",
      "Redis",
      "REST",
      "AWS",
      "Docker",
      "Celery",
      "PostgreSQL",
      "pgvector",
    ],
  },
  {
    role: "Founding Full Stack Engineer",
    company: "Lab Systems",
    duration: "May 2023 – Aug 2024",
    year: "2023",
    achievement:
      "Took an AI-driven forensics product from zero to production for enterprise teams. Cases solved, not slide decks.",
    impact: [
      { metric: "50+", label: "Cases supported" },
      { metric: "20+", label: "API surfaces" },
      { metric: "0→1", label: "Founding role" },
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
    role: "Full Stack Engineer Intern",
    company: "Lab Systems",
    duration: "Aug 2022 – Apr 2023",
    year: "2022",
    achievement:
      "Built data pipelines and graph-backed workflows so huge evidence sets stayed searchable in near real time.",
    impact: [
      { metric: "2B+", label: "Records handled" },
      { metric: "70%", label: "Faster queries" },
      { metric: "<1s", label: "Stream latency" },
    ],
    techStack: ["Python", "Node.js", "MongoDB", "LevelDB", "Docker", "Linux"],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Massachusetts Amherst",
    duration: "Sep 2024 – May 2026",
    gpa: "GPA: 3.86 / 4.0",
    year: "2024",
    context: "Building LLM Router and shipping production AI infrastructure while in school.",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Mumbai",
    duration: "Aug 2019 – May 2023",
    gpa: "GPA: 3.87 / 4.0",
    year: "2019",
    context: "Shipped MediLog (patent) and joined Lab Systems as a founding engineer before graduating.",
  },
];

import type { Achievement } from "./types";

export const achievements: Achievement[] = [
  {
    id: "production-deployment-architect",
    title: "Production Deployment Architect",
    description: "Explore the GitHub Readme Stats production deployment.",
    xp: 150,
    projectSlug: "github-readme-stats-deployment",
    rarity: "core",
  },
  {
    id: "ai-forensics-builder",
    title: "AI Forensics Builder",
    description: "Explore the Sentinel AI case study.",
    xp: 200,
    projectSlug: "sentinel-ai",
    rarity: "advanced",
  },
  {
    id: "grounded-retrieval-engineer",
    title: "Grounded Retrieval Engineer",
    description: "Explore the Production RAG Agent case study.",
    xp: 200,
    projectSlug: "production-rag-agent",
    rarity: "advanced",
  },
  {
    id: "architecture-explorer",
    title: "Architecture Explorer",
    description: "Explore the architecture of a flagship project.",
    xp: 100,
    rarity: "core",
  },
  {
    id: "systems-builder",
    title: "Systems Builder",
    description: "Explore multiple engineering domains across the portfolio.",
    xp: 150,
    rarity: "milestone",
  },
  {
    id: "cloud-systems-architect",
    title: "Cloud Systems Architect",
    description: "Explore deployment and cloud engineering evidence.",
    xp: 150,
    rarity: "advanced",
  },
];

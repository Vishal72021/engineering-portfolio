import type { TimelineEntry } from "./types";

export const timeline: TimelineEntry[] = [
  {
    id: "vm-foundations",
    period: "01",
    title: "VM setup",
    description: "Started building practical infrastructure fundamentals around Linux and self-hosted environments.",
    xp: 250,
    technologies: ["Linux", "VMs", "Networking"],
  },
  {
    id: "container-deployments",
    period: "02",
    title: "Docker deployments",
    description: "Moved from manually configured environments toward reproducible containerized workloads.",
    xp: 250,
    technologies: ["Docker", "Docker Compose"],
  },
  {
    id: "production-boundaries",
    period: "03",
    title: "Reverse proxy + TLS",
    description: "Learned to operate services behind a controlled public boundary with DNS, Nginx and HTTPS.",
    xp: 250,
    technologies: ["Nginx", "TLS", "DNS", "Oracle Cloud"],
  },
  {
    id: "ai-pipelines",
    period: "04",
    title: "AI pipelines",
    description: "Expanded from infrastructure into architecture-first AI and backend systems.",
    xp: 300,
    technologies: ["Python", "FastAPI", "AI/ML", "PostgreSQL"],
  },
];

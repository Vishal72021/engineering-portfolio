import type { Profile } from "./types";

export const profile: Profile = {
  name: "Vishal Tripathy",
  role: "AI Software Engineer",
  tagline: "Engineer • Builder • AI Innovator",
  shortBio:
    "I build reliable software systems where AI, backend engineering and infrastructure meet.",
  longBio:
    "I am an engineer focused on turning complex technical ideas into dependable software. My work spans AI/ML, backend systems, cloud infrastructure, deployment and full-stack product engineering, with a strong preference for architecture-first development and production-minded execution.",
  location: "India",
  availability: "Open to high-impact engineering opportunities",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  links: {
    github: "https://github.com/Vishal72021",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
  capabilities: [
    "AI / ML",
    "Backend Systems",
    "Cloud Infrastructure",
    "System Design",
    "Full-Stack Engineering",
    "Production Deployment",
  ],
  technologyGroups: [
    {
      name: "AI / ML",
      technologies: ["Python", "Machine Learning", "GenAI", "AI Pipelines"],
    },
    {
      name: "Backend",
      technologies: ["FastAPI", "Node.js", "SQL", "PostgreSQL", "SQLAlchemy"],
    },
    {
      name: "Infrastructure",
      technologies: ["Docker", "Nginx", "Linux", "CI/CD"],
    },
    {
      name: "Cloud",
      technologies: ["Azure", "Oracle Cloud", "Vercel"],
    },
    {
      name: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
  ],
};

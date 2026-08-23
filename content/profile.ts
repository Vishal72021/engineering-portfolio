import type { Profile } from "./types";

export const profile: Profile = {
  name: "Vishal Tripathy",
  role: "AI Engineer · Software Engineer",
  tagline: "Engineer • Builder • AI Innovator",
  shortBio:
    "I build production AI and data systems across RAG, backend engineering, cloud infrastructure and automation.",
  longBio:
    "I am an AI Engineer and Azure Data Engineer at Tata Consultancy Services, building production AI systems, Azure data pipelines, backend services, CI/CD automation and cloud tooling in the BFSI domain. Outside work, I build independently deployed systems such as a production-oriented RAG Agent and architecture-first platforms such as Sentinel AI, with a strong preference for measurable outcomes and production-minded engineering.",
  location: "Bhubaneswar, Odisha, India",
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

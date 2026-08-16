import type { Metadata } from "next";
import type { Project } from "@/content/types";

const siteName = "Vishal Tripathy";
const siteDescription =
  "Engineering portfolio of Vishal Tripathy — production systems, AI platforms, cloud infrastructure and reliable software.";

export function createProjectMetadata(project: Project): Metadata {
  return {
    title: `${project.title} — ${siteName}`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — ${siteName}`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} — ${siteName}`,
      description: project.description,
    },
  };
}

export { siteName, siteDescription };

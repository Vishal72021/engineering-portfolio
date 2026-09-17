import type { Metadata } from "next";
import type { Project } from "@/content/types";
import { getSiteUrlString, isProductionDeployment } from "@/lib/site-url";

const siteName = "Vishal Tripathy";
const siteDescription =
  "Engineering portfolio of Vishal Tripathy — AI software systems, production backends, cloud infrastructure and reliable engineering.";

export function createProjectMetadata(project: Project): Metadata {
  const canonicalUrl = `${getSiteUrlString()}/projects/${project.slug}`;
  const production = isProductionDeployment();

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: production
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
    openGraph: {
      title: project.title,
      description: project.description,
      url: canonicalUrl,
      type: "article",
      siteName,
      images: [
        {
          url: "/images/profile/vishal-tripathy.png",
          width: 1200,
          height: 1200,
          alt: `${project.title} — Vishal Tripathy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${siteName}`,
      description: project.description,
      images: ["/images/profile/vishal-tripathy.png"],
    },
  };
}

export { siteName, siteDescription };

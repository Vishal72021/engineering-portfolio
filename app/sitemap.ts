import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = ["/", "/projects", ...getProjectSlugs().map((slug) => `/projects/${slug}`)];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/projects" ? 0.8 : 0.7,
  }));
}

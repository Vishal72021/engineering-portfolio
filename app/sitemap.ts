import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";
import { getSiteUrlString } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrlString();
  const routes = ["/", "/projects", ...getProjectSlugs().map((slug) => `/projects/${slug}`)];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/projects" ? 0.8 : 0.7,
  }));
}

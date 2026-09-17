import type { MetadataRoute } from "next";
import { getSiteUrlString, isProductionDeployment } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrlString();
  const production = isProductionDeployment();

  return {
    rules: {
      userAgent: "*",
      allow: production ? "/" : [],
      disallow: production ? undefined : "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

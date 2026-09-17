import type { MetadataRoute } from "next";
import { getSiteUrlString } from "@/lib/site-url";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vishal Tripathy — AI Software Engineer",
    short_name: "Vishal Tripathy",
    description:
      "Engineering portfolio of Vishal Tripathy — AI software systems, production backends and cloud engineering.",
    start_url: getSiteUrlString(),
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

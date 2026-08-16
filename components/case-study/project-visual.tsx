import type { Project } from "@/content/types";
import { ArchitectureDiagram } from "@/components/media/architecture-diagram";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "github-readme-stats-deployment") {
    return (
      <ArchitectureDiagram
        title="Public request → container"
        caption="Current deployment boundary represented from the documented production setup."
        columns={[
          [{ label: "Internet", detail: "HTTPS request", tone: "neutral" }],
          [{ label: "DNS", detail: "DuckDNS", tone: "neutral" }],
          [{ label: "Nginx", detail: "TLS + reverse proxy", tone: "accent" }],
          [{ label: "Docker", detail: "Application runtime", tone: "success" }],
        ]}
      />
    );
  }

  if (project.slug === "sentinel-ai") {
    return (
      <ArchitectureDiagram
        title="API → persistence → intelligence"
        caption="Current backend foundation and intended extension boundaries for Sentinel AI."
        columns={[
          [{ label: "Client", detail: "API consumer", tone: "neutral" }],
          [{ label: "FastAPI", detail: "HTTP boundary", tone: "accent" }],
          [{ label: "Application", detail: "Typed domain logic", tone: "accent" }],
          [
            { label: "SQLAlchemy", detail: "Persistence layer", tone: "neutral" },
            { label: "AI / ML", detail: "Extensible analysis", tone: "success" },
          ],
          [{ label: "PostgreSQL", detail: "Durable data", tone: "success" }],
        ]}
      />
    );
  }

  return null;
}

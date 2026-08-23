import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/badge";

const statusLabels: Record<Project["status"], string> = {
  shipped: "SHIPPED",
  "in-progress": "IN PROGRESS",
  planned: "PLANNED",
  archived: "ARCHIVED",
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <div className="project-card__top">
        <span className="project-card__number">{project.year ?? "—"}</span>
        <span className={`project-card__status project-card__status--${project.status}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="project-card__body">
        <div>
          <div className="project-card__categories">
            {project.category.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <h3>{project.title}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
          <p className="body-sm muted">{project.description}</p>
        </div>

        <div className="project-card__footer">
          <div className="project-card__technologies">
            {project.technologies.slice(0, featured ? 5 : 4).map((technology) => (
              <span key={technology.name}>{technology.name}</span>
            ))}
          </div>

          {project.badge ? <Badge tone={project.status === "shipped" ? "success" : "accent"}>{project.badge}</Badge> : null}

          {project.status !== "planned" ? (
            <Link className="project-card__link" href={`/projects/${project.slug}`}>
              Case study <ArrowUpRight size={15} />
            </Link>
          ) : project.caseStudy ? (
            <Link className="project-card__link" href={`/projects/${project.slug}`}>
              Architecture <ArrowUpRight size={15} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/badge";

const statusLabels: Record<Project["status"], string> = {
  shipped: "SHIPPED",
  "in-progress": "IN PROGRESS",
  planned: "PLANNED",
  archived: "ARCHIVED",
};

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="case-study-header">
      <div className="container">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={15} />
          All projects
        </Link>

        <div className="case-study-header__meta">
          <span className="label">{project.category.join(" / ")}</span>
          <span className={`project-card__status project-card__status--${project.status}`}>
            {statusLabels[project.status]}
          </span>
        </div>

        <h1 className="display-lg">{project.title}</h1>
        <p className="case-study-header__subtitle">{project.subtitle}</p>
        <p className="case-study-header__description body-lg muted">
          {project.description}
        </p>

        <div className="case-study-header__actions">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="ui-button ui-button--secondary ui-button--md"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
              {link.external ? <ArrowUpRight size={14} /> : null}
            </a>
          ))}
          {project.badge ? <Badge tone="accent">{project.badge}</Badge> : null}
        </div>
      </div>
    </header>
  );
}

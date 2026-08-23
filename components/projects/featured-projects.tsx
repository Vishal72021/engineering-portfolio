import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="work" className="section-space projects-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">03 / Selected work</span>
            <h2 className="heading-xl">Systems worth talking about.</h2>
          </div>
          <p className="body-sm muted">
            Production work, active builds and architecture explorations are presented as
            engineering case studies—not just screenshots and technology lists.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>

        <div className="projects-section__more">
          <Link className="ui-button ui-button--secondary ui-button--md" href="/projects">
            View all projects
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

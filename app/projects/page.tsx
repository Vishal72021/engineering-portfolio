import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Flagship engineering projects by Vishal Tripathy across AI, backend systems, cloud infrastructure and security.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="projects-hub">
        <section className="projects-hub__hero">
          <div className="container">
            <Link className="back-link" href="/">
              <ArrowLeft size={15} />
              Back home
            </Link>

            <span className="label">Selected systems / 01</span>
            <h1 className="display-lg">Projects built to be inspected.</h1>
            <p className="body-lg muted">
              A growing collection of engineering work across AI, backend
              systems, infrastructure, cloud and security. Each flagship project
              is documented around the decisions that made it work.
            </p>
          </div>
        </section>

        <section className="section-space projects-hub__list">
          <div className="container">
            <div className="projects-hub__meta">
              <span className="mono-label muted">{projects.length} systems in portfolio</span>
              <span className="mono-label muted">Data-driven collection</span>
            </div>

            <div className="projects-hub__grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </SiteShell>
  );
}

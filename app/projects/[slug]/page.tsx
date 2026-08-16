import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { Footer } from "@/components/layout/footer";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { CaseStudyBody } from "@/components/case-study/case-study-body";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { createProjectMetadata } from "@/lib/metadata";
import { XPTracker } from "@/components/gamification/xp-tracker";
import { ProjectAchievementTracker } from "@/components/gamification/project-achievement-tracker";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createProjectMetadata(project);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <main className="case-study-page">
        <XPTracker event="open-project" storageKey={`open-project:${project.slug}`} />
        <ProjectAchievementTracker projectSlug={project.slug} />
        <CaseStudyHeader project={project} />

        {project.caseStudy ? (
          <CaseStudyBody project={project} caseStudy={project.caseStudy} />
        ) : (
          <section className="section-space case-study-empty">
            <div className="container">
              <span className="label">Case study</span>
              <h2 className="heading-lg">This system is still taking shape.</h2>
              <p className="body-md muted">
                Detailed engineering documentation will be added when there is
                enough implementation evidence to support it.
              </p>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </SiteShell>
  );
}

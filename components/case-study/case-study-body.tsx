import { CaseStudySection } from "./case-study-section";
import { DecisionList } from "./decision-list";
import { EvidenceGrid } from "./evidence-grid";
import { ProjectVisual } from "./project-visual";
import type { CaseStudy, Project } from "@/content/types";

export function CaseStudyBody({
  project,
  caseStudy,
}: {
  project: Project;
  caseStudy: CaseStudy;
}) {
  return (
    <div className="case-study-body" data-achievement-trigger>
      <section className="case-study-section case-study-lead">
        <h2>Overview</h2>
        <p className="body-lg">{caseStudy.overview}</p>
      </section>

      <ProjectVisual project={project} />

      <section className="case-study-section">
        <h2>The problem</h2>
        <p className="body-md muted">{caseStudy.problem}</p>
      </section>

      <section className="case-study-section">
        <h2>Engineering challenges</h2>
        <ul>
          {caseStudy.challenges.map((challenge) => (
            <li className="body-md muted" key={challenge}>
              {challenge}
            </li>
          ))}
        </ul>
      </section>

      {caseStudy.architecture ? (
        <CaseStudySection section={caseStudy.architecture} />
      ) : null}

      {caseStudy.decisions?.length ? (
        <DecisionList decisions={caseStudy.decisions} />
      ) : null}

      {caseStudy.implementation?.map((section) => (
        <CaseStudySection key={section.title} section={section} />
      ))}

      {caseStudy.reliability ? (
        <CaseStudySection section={caseStudy.reliability} />
      ) : null}

      {caseStudy.security ? (
        <CaseStudySection section={caseStudy.security} />
      ) : null}

      {caseStudy.evidence?.length ? (
        <EvidenceGrid evidence={caseStudy.evidence} />
      ) : null}

      <section className="case-study-section">
        <h2>Lessons learned</h2>
        <ul>
          {caseStudy.lessonsLearned.map((lesson) => (
            <li className="body-md muted" key={lesson}>
              {lesson}
            </li>
          ))}
        </ul>
      </section>

      {caseStudy.futureWork?.length ? (
        <section className="case-study-section">
          <h2>What comes next</h2>
          <ul>
            {caseStudy.futureWork.map((item) => (
              <li className="body-md muted" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

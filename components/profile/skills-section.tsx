import { ArrowUpRight } from "lucide-react";
import { skills } from "@/content/skills";
import { engineeringExperiments } from "@/content/experiments";

export function SkillsSection() {
  const experiment = engineeringExperiments[0];

  return (
    <section id="skills" className="section-space skills-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">06 / Skills</span>
            <h2 className="heading-xl">A capability map, not a badge wall.</h2>
          </div>
          <p className="body-sm muted">
            The stack reflects technologies and engineering practices used across
            professional work, projects and ongoing learning.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <article key={group.category} className="skill-group surface">
              <span className="mono-label muted">{group.category}</span>
              <div className="skill-group__items">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="engineering-lab">
          <div>
            <span className="label">Engineering lab</span>
            <h3>{experiment.title}</h3>
            <p className="body-sm muted">{experiment.description}</p>
          </div>

          <div className="engineering-lab__meta">
            <div className="engineering-lab__evidence">
              {experiment.evidence.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a href={experiment.url} target="_blank" rel="noreferrer">
              View on Kaggle
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="engineering-lab__techniques">
            {experiment.techniques.map((technique) => (
              <span key={technique}>{technique}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

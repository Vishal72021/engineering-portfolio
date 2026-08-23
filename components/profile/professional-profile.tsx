import { ArrowUpRight, Download } from "lucide-react";
import { professionalProfile } from "@/content/professional-profile";
import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";

export function ProfessionalProfile() {
  const current = experience[0];

  return (
    <section id="experience" className="section-space professional-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">04 / Experience</span>
            <h2 className="heading-xl">
              Engineering with measurable impact.
            </h2>
          </div>

          <p className="body-sm muted">
            {professionalProfile.positioning}
          </p>
        </div>

        <div className="professional-profile surface">
          <div className="professional-profile__intro">
            <div>
              <span className="mono-label muted">
                {professionalProfile.title}
              </span>
              <span className="mono-label muted professional-profile__summary-label">
                Professional summary
              </span>

              <p className="body-lg">
                {professionalProfile.summary}
              </p>
            </div>

            <a
              className="ui-button ui-button--primary ui-button--md"
              href={professionalProfile.resumePath}
              download
            >
              <Download size={16} />
              {professionalProfile.resumeLabel}
            </a>
          </div>

          <div className="professional-profile__role">
            <div>
              <span className="mono-label muted">
                {current.domain}
              </span>

              <h3>{current.role}</h3>

              <p className="body-sm muted">
                {current.company} · {current.period} ·{" "}
                {current.location}
              </p>
            </div>

            <Badge tone="accent">
              Production engineering
            </Badge>
          </div>

          <div className="professional-impact-grid">
            {current.impacts.map((impact) => (
              <div key={impact.label} className="professional-impact">
                <strong>{impact.value}</strong>
                <span>{impact.label}</span>
              </div>
            ))}
          </div>

          <div className="professional-profile__focus">
            <div>
              <span className="mono-label muted">Current focus</span>
              <div className="professional-focus__items">
                {professionalProfile.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <span className="mono-label muted">Based in</span>
              <p className="body-sm">{professionalProfile.location}</p>
            </div>
          </div>

          <div className="professional-profile__highlights">
            <div>
              <span className="mono-label muted">
                Selected engineering evidence
              </span>

              <div className="professional-profile__list">
                {current.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </div>

            <div className="professional-profile__link">
              <span className="mono-label muted">
                Resume
              </span>

              <a
                href={professionalProfile.resumePath}
                target="_blank"
                rel="noreferrer"
              >
                View current baseline resume
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
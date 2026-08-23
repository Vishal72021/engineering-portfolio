import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { certifications } from "@/content/certifications";
import { education } from "@/content/education";

export function EducationLearning() {
  const completed = certifications.filter((item) => item.status === "completed");
  const inProgress = certifications.filter((item) => item.status === "in-progress");

  return (
    <section id="education" className="section-space education-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">08 / Education &amp; Learning</span>
            <h2 className="heading-xl">Foundations that support the build.</h2>
          </div>
          <p className="body-sm muted">
            Formal foundations, completed learning and current certification goals
            that support the engineering work shown above.
          </p>
        </div>

        <div className="education-learning-grid">
          <article className="education-card surface">
            <div className="education-card__icon">
              <GraduationCap size={18} />
            </div>
            <span className="mono-label muted">Education</span>
            <h3>{education.degree}</h3>
            <p className="body-sm">{education.field}</p>
            <p className="body-sm muted">
              {education.institution} · {education.location} · {education.completed}
            </p>

            <div className="education-practice">
              <span className="mono-label muted">Engineering practice</span>
              <div className="education-tags">
                {education.practice.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="education-coursework">
              <span className="mono-label muted">Relevant coursework</span>
              <div className="education-tags">
                {education.coursework.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="certifications-card surface">
            <div className="certifications-card__header">
              <div>
                <span className="mono-label muted">Learning record</span>
                <h3>Certifications &amp; learning</h3>
              </div>
              <Award size={18} />
            </div>

            <div className="certification-list">
              {completed.map((item) => (
                <div key={item.name} className="certification-item">
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.issuer}</span>
                  </div>
                  <div className="certification-item__meta">
                    <span className="certification-status certification-status--complete">
                      Completed{item.completed ? ` · ${item.completed}` : ""}
                    </span>
                    {item.href ? (
                      <a
                        className="certification-link"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${item.name} certificate`}
                      >
                        Certificate
                        <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="certifications-progress">
              <span className="mono-label muted">In progress</span>
              {inProgress.map((item) => (
                <div key={item.name} className="certification-item">
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.issuer}</span>
                  </div>
                  <span className="certification-status">
                    In progress{item.target ? ` · ${item.target}` : ""}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

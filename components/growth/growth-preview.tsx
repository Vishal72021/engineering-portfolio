import { timeline } from "@/content/timeline";
import { getLevel, getLevelProgress } from "@/lib/xp";
import { Progress } from "@/components/ui/progress";

const totalXP = timeline.reduce((sum, item) => sum + item.xp, 0);
const level = getLevel(totalXP);
const progress = getLevelProgress(totalXP);

export function GrowthPreview() {
  return (
    <section id="growth" className="section-space growth-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">04 / Growth</span>
            <h2 className="heading-xl">From infrastructure to intelligent systems.</h2>
          </div>
          <p className="body-sm muted">
            A progression built through increasingly complex engineering problems,
            from self-hosted infrastructure to architecture-first AI platforms.
          </p>
        </div>

        <div className="growth-grid">
          <div className="growth-level surface">
            <div className="growth-level__top">
              <div>
                <span className="mono-label muted">Current level</span>
                <h3>{level.title}</h3>
              </div>
              <strong>{totalXP.toLocaleString()} XP</strong>
            </div>
            <Progress value={progress} label={`${Math.round(progress)}% progression`} />
            <p className="body-sm muted">
              XP is a lightweight exploration layer. The engineering work itself is
              the real progression.
            </p>
          </div>

          <div className="growth-timeline">
            {timeline.map((item) => (
              <article className="growth-step" key={item.id}>
                <div className="growth-step__index">{item.period}</div>
                <div>
                  <span className="mono-label muted">{item.technologies.join(" · ")}</span>
                  <h3>{item.title}</h3>
                  <p className="body-sm muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

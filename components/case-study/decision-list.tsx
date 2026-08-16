import type { Decision } from "@/content/types";

export function DecisionList({ decisions }: { decisions: Decision[] }) {
  return (
    <section className="case-study-section">
      <h2>Engineering decisions</h2>
      <div className="decision-list">
        {decisions.map((decision, index) => (
          <article className="decision-card" key={decision.title}>
            <div className="decision-card__number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <h3>{decision.title}</h3>
              <div className="decision-card__block">
                <span className="mono-label muted">Context</span>
                <p className="body-sm muted">{decision.context}</p>
              </div>
              <div className="decision-card__block">
                <span className="mono-label muted">Decision</span>
                <p className="body-sm">{decision.decision}</p>
              </div>
              <div className="decision-card__block">
                <span className="mono-label muted">Rationale</span>
                <p className="body-sm muted">{decision.rationale}</p>
              </div>
              {decision.tradeoffs?.length ? (
                <div className="decision-card__block">
                  <span className="mono-label muted">Trade-offs</span>
                  <ul>
                    {decision.tradeoffs.map((tradeoff) => (
                      <li className="body-sm muted" key={tradeoff}>
                        {tradeoff}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

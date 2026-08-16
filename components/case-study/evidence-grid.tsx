import type { EvidenceItem } from "@/content/types";

export function EvidenceGrid({ evidence }: { evidence: EvidenceItem[] }) {
  return (
    <section className="case-study-evidence">
      <div className="case-study-section__heading">
        <span className="label">Evidence</span>
        <h2>What the project can prove.</h2>
      </div>

      <div className="evidence-grid">
        {evidence.map((item) => (
          <article className="evidence-card" key={item.label}>
            <span className="mono-label muted">{item.label}</span>
            <strong>{item.value}</strong>
            {item.detail ? <p className="body-sm muted">{item.detail}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

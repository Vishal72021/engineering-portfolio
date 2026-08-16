import type { ContentSection } from "@/content/types";

export function CaseStudySection({
  section,
}: {
  section: ContentSection;
}) {
  return (
    <section className="case-study-section">
      <h2>{section.title}</h2>
      <div>
        {section.paragraphs.map((paragraph) => (
          <p className="body-md muted" key={paragraph}>
            {paragraph}
          </p>
        ))}
        {section.bullets?.length ? (
          <ul>
            {section.bullets.map((bullet) => (
              <li className="body-sm muted" key={bullet}>
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

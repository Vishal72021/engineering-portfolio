import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="ui-section-heading">
      <div>
        <span className="label">{eyebrow}</span>
        <h2 className="heading-xl">{title}</h2>
      </div>
      {description ? <p className="body-sm muted">{description}</p> : null}
    </div>
  );
}

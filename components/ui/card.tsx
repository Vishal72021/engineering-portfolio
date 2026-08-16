import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  interactive?: boolean;
};

export function Card({
  children,
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <article
      className={`ui-card${interactive ? " ui-card--interactive" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </article>
  );
}

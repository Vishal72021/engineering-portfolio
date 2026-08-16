import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "accent" | "success";
  icon?: ReactNode;
};

export function Badge({ children, tone = "neutral", icon }: BadgeProps) {
  return (
    <span className={`ui-badge ui-badge--${tone}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}

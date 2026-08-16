"use client";

import type { ReactNode } from "react";

export function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`scroll-reveal ${className}`.trim()} data-reveal>
      {children}
    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { useXP } from "./xp-context";

export function ProjectAchievementTracker({
  projectSlug,
}: {
  projectSlug: string;
}) {
  const { visitProject } = useXP();
  const processed = useRef(false);

  useEffect(() => {
    if (processed.current) {
      return;
    }

    processed.current = true;

    /*
     * Entering a case-study route counts as project
     * exploration for V1.
     *
     * The XP provider owns all achievement rules.
     */
    visitProject(projectSlug);
  }, [projectSlug, visitProject]);

  return null;
}
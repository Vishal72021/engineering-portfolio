"use client";

import { Lock, Sparkles } from "lucide-react";
import type { Achievement } from "@/content/types";
import { useXP } from "./xp-context";

export function AchievementBadge({
  achievement,
}: {
  achievement: Achievement;
}) {
  const { unlocked } = useXP();
  const isUnlocked = unlocked.includes(achievement.id);

  return (
    <article
      className={`achievement-card ${isUnlocked ? "achievement-card--unlocked" : ""}`}
      aria-label={`${achievement.title}: ${isUnlocked ? "unlocked" : "locked"}`}
    >
      <div className="achievement-card__icon">
        {isUnlocked ? <Sparkles size={15} /> : <Lock size={14} />}
      </div>
      <div>
        <span className="mono-label muted">
          {isUnlocked ? "Unlocked" : "Locked"} · +{achievement.xp} XP
        </span>
        <h3>{achievement.title}</h3>
        <p className="body-sm muted">{achievement.description}</p>
      </div>
    </article>
  );
}
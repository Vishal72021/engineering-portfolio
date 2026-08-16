"use client";

import { Award, Zap } from "lucide-react";
import { achievements } from "@/content/achievements";
import { getLevelProgress, getLevel } from "@/lib/xp";
import { useXP } from "./xp-context";

export function ProgressWidget() {
  const { xp, unlocked } = useXP();
  const level = getLevel(xp);
  const progress = getLevelProgress(xp);
  const next = level.maximumXP;
  const unlockedCount = unlocked.length;

  return (
    <aside className="progress-widget" aria-label="Portfolio exploration progress">
      <div className="progress-widget__top">
        <span className="mono-label muted">
          <Zap size={12} /> Exploration XP
        </span>
        <strong>{xp.toLocaleString()}</strong>
      </div>

      <div className="progress-widget__level">
        <span>{level.title}</span>
        <span>{unlockedCount}/{achievements.length} badges</span>
      </div>

      <div className="progress-widget__bar">
        <span style={{ width: `${progress}%` }} />
      </div>

      {next ? (
        <span className="progress-widget__hint">
          {Math.max(0, next - xp).toLocaleString()} XP to next level
        </span>
      ) : (
        <span className="progress-widget__hint">Peak level reached</span>
      )}

      <Award className="progress-widget__icon" size={15} />
    </aside>
  );
}
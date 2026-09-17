import { Compass } from "lucide-react";
import type { Achievement } from "@/content/types";

export function AchievementBadge({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <article className="achievement-card" aria-label={achievement.title}>
      <div className="achievement-card__icon">
        <Compass size={15} aria-hidden="true" />
      </div>
      <div>
        <span className="mono-label muted">Engineering signal</span>
        <h3>{achievement.title}</h3>
        <p className="body-sm muted">{achievement.description}</p>
      </div>
    </article>
  );
}

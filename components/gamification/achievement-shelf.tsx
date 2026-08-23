import { achievements } from "@/content/achievements";
import { AchievementBadge } from "./achievement-badge";

export function AchievementShelf() {
  return (
    <section className="section-space achievement-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">09 / Engineering badges</span>
            <h2 className="heading-xl">Depth, not decoration.</h2>
          </div>
          <p className="body-sm muted">
            Explore the work to unlock lightweight recognition for engineering
            domains. The badges are a navigation aid—not a substitute for evidence.
          </p>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
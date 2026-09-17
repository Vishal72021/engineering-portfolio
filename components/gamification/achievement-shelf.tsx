import { achievements } from "@/content/achievements";
import { AchievementBadge } from "./achievement-badge";

export function AchievementShelf() {
  return (
    <section className="section-space achievement-section">
      <div className="container">
        <div className="ui-section-heading">
          <div>
            <span className="label">09 / Engineering exploration</span>
            <h2 className="heading-xl">Follow the engineering signals.</h2>
          </div>
          <p className="body-sm muted">
            These are navigation cues into real project evidence—not rankings,
            levels, or credentials.
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

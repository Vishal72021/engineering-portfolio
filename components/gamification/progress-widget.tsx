import { Compass } from "lucide-react";

export function ProgressWidget() {
  return (
    <aside className="progress-widget" aria-label="Engineering exploration">
      <div className="progress-widget__top">
        <span className="mono-label muted">
          <Compass size={12} aria-hidden="true" /> Engineering exploration
        </span>
      </div>
      <div className="progress-widget__level">
        <span>Explore the evidence</span>
        <span>Projects · Architecture · Decisions</span>
      </div>
      <span className="progress-widget__hint">
        Every section is accessible without unlocking anything.
      </span>
    </aside>
  );
}

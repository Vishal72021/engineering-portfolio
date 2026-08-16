import { profile } from "@/content/profile";
import { Badge } from "@/components/ui/badge";

export function EngineeringSignal() {
  return (
    <section className="signal-section">
      <div className="container">
        <div className="signal-panel">
          <div className="signal-panel__intro">
            <span className="label">02 / Engineering signal</span>
            <h2 className="heading-lg">Built across the stack, grounded in systems.</h2>
          </div>

          <div className="signal-panel__capabilities">
            {profile.capabilities.map((capability) => (
              <Badge key={capability} tone="neutral">
                {capability}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

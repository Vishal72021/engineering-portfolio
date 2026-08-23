import { ArrowDownRight, ArrowUpRight, Download, Github } from "lucide-react";
import { profile } from "@/content/profile";
import { professionalProfile } from "@/content/professional-profile";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__ambient" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__status-dot" />
            {profile.availability}
          </div>

          <h1 className="display-xl">
            Engineer.
            <br />
            <span>Builder.</span>
            <br />
            <em>AI Innovator.</em>
          </h1>

          <p className="hero__description body-lg">{profile.shortBio}</p>

          <div className="hero__actions">
            <a className="ui-button ui-button--primary ui-button--md" href="#work">
              Explore work
              <ArrowDownRight size={16} />
            </a>
            <a
              className="ui-button ui-button--secondary ui-button--md"
              href={professionalProfile.resumePath}
              download
            >
              <Download size={16} />
              Resume
            </a>
            <a
              className="ui-button ui-button--secondary ui-button--md"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <aside className="hero__signal surface" aria-label="Engineering profile">
          <div className="hero__signal-header">
            <span className="mono-label muted">ENGINEERING PROFILE</span>
            <span className="hero__signal-mark">VT / 01</span>
          </div>

          <div className="hero__signal-name">
            <span>{profile.role}</span>
            <strong>{profile.name}</strong>
          </div>

          <div className="hero__signal-line" />

          <div className="hero__signal-grid">
            {profile.technologyGroups.slice(0, 4).map((group) => (
              <div key={group.name} className="hero__signal-item">
                <span className="mono-label muted">{group.name}</span>
                <p>{group.technologies.slice(0, 3).join(" · ")}</p>
              </div>
            ))}
          </div>

          <div className="hero__badge">
            <Badge tone="accent">Architecture-first engineering</Badge>
          </div>
        </aside>
      </div>
    </section>
  );
}

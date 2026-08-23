import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-space about-section">
      <div className="container about-section__grid">
        <div>
          <span className="label">07 / About</span>
          <h2 className="heading-lg">Curious about systems that have to work.</h2>
        </div>
        <div>
          <p className="body-lg">{profile.longBio}</p>
          <p className="body-sm muted about-section__note">
            Professional engineering impact is separated from independently shipped
            work and from architecture-stage projects so the portfolio never presents
            planned systems as production software.
          </p>
          <div className="about-section__principles">
            <span>Architecture first.</span>
            <span>Evidence over hype.</span>
            <span>Build for evolution.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

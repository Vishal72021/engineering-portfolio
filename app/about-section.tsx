import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-space about-section">
      <div className="container about-section__grid">
        <div>
          <span className="label">05 / About</span>
          <h2 className="heading-lg">Curious about systems that have to work.</h2>
        </div>
        <div>
          <p className="body-lg">{profile.longBio}</p>
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

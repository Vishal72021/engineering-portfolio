import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" className="section-space contact-section">
      <div className="container contact-section__inner">
        <div>
          <span className="label">07 / Contact</span>
          <h2 className="display-lg">Have a hard problem? Let&apos;s build it.</h2>
          <p className="body-lg muted">
            I&apos;m interested in ambitious engineering problems across AI,
            backend systems, infrastructure and product engineering.
          </p>
        </div>

        <div className="contact-section__actions">
          {profile.email ? (
            <a
              className="ui-button ui-button--primary ui-button--md"
              href={`mailto:${profile.email}`}
            >
              <Mail size={17} />
              <span>Email Vishal</span>
              <span className="contact-section__button-spacer" aria-hidden="true" />
            </a>
          ) : null}

          {profile.links.linkedin ? (
            <a
              className="ui-button ui-button--secondary ui-button--md"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>
          ) : null}

          <a
            className="ui-button ui-button--secondary ui-button--md"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            <span>GitHub</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
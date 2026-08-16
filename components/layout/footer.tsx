import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.tagline}</span>
        </div>
        <div className="site-footer__links">
          {profile.email ? <a href={`mailto:${profile.email}`} aria-label="Email Vishal"><Mail size={16} /></a> : null}
          {profile.links.linkedin ? <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a> : null}
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

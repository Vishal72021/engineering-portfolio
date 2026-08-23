import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#growth", label: "Growth" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <Link href="/" className="site-nav__brand" aria-label="Vishal Tripathy home">
          <span className="site-nav__mark">
            <Image
              src="/images/profile/vishal-tripathy.png"
              alt="Vishal Tripathy"
              width={40}
              height={40}
              priority
            />
          </span>
          <span className="site-nav__name">Vishal Tripathy</span>
        </Link>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav__actions">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

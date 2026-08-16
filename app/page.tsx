import { SiteShell } from "@/components/layout/site-shell";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero/hero";
import { EngineeringSignal } from "@/components/signal/engineering-signal";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { GrowthPreview } from "@/components/growth/growth-preview";
import { AboutSection } from "./about-section";
import { Contact } from "@/components/contact/contact";
import { AchievementShelf } from "@/components/gamification/achievement-shelf";
import { XPTracker } from "@/components/gamification/xp-tracker";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <XPTracker event="explore-home" />
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal><EngineeringSignal /></ScrollReveal>
        <ScrollReveal><FeaturedProjects /></ScrollReveal>
        <ScrollReveal><GrowthPreview /></ScrollReveal>
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><AchievementShelf /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>
      </main>
      <Footer />
    </SiteShell>
  );
}

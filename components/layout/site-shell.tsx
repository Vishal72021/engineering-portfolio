import type { ReactNode } from "react";
import { Navigation } from "@/components/navigation/navigation";
import { XPProvider } from "@/components/gamification/xp-context";
import { ProgressWidget } from "@/components/gamification/progress-widget";
import { XPToast } from "@/components/gamification/xp-toast";
import { RevealObserver } from "@/components/motion/reveal-observer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <XPProvider>
      <Navigation />
      <ProgressWidget />
      <XPToast />
      <RevealObserver />
      {children}
    </XPProvider>
  );
}
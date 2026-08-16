"use client";

import { useEffect, useRef } from "react";
import type { XPEvent } from "@/lib/xp";
import { useXP } from "./xp-context";

export function XPTracker({
  event,
  once = true,
  storageKey,
}: {
  event: XPEvent;
  once?: boolean;
  storageKey?: string;
}) {
  const { record } = useXP();
  const recorded = useRef(false);

  useEffect(() => {
    if (once && recorded.current) return;

    const key = `xp-event:${storageKey ?? event}`;
    if (once && window.sessionStorage.getItem(key)) {
      recorded.current = true;
      return;
    }

    record(event);
    recorded.current = true;

    if (once) {
      window.sessionStorage.setItem(key, "1");
    }
  }, [event, once, record, storageKey]);

  return null;
}
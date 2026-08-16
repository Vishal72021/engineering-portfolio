"use client";

import { Zap, X } from "lucide-react";
import { useEffect, useState } from "react";

const XP_TOAST_EVENT = "portfolio-xp-toast";

type Toast = {
  id: number;
  xp: number;
  title?: string;
  message?: string;
};

export function XPToast() {
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const detail = (event as CustomEvent<{
        xp: number;
        title?: string;
        message?: string;
      }>).detail;

      setToast({
        id: Date.now(),
        xp: detail.xp,
        title: detail.title,
        message: detail.message,
      });
    };

    window.addEventListener(XP_TOAST_EVENT, handleToast);

    return () => window.removeEventListener(XP_TOAST_EVENT, handleToast);
  }, []);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  if (!toast) return null;

  return (
    <div className="xp-toast" role="status" aria-live="polite">
      <div className="xp-toast__icon" aria-hidden="true">
        <Zap size={15} />
      </div>
      <div className="xp-toast__content">
        <strong>+{toast.xp.toLocaleString()} XP</strong>
        <span>{toast.title ?? "Exploration XP"}</span>
        {toast.message ? <small>{toast.message}</small> : null}
      </div>
      <button
        type="button"
        className="xp-toast__close"
        onClick={() => setToast(null)}
        aria-label="Dismiss XP notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}
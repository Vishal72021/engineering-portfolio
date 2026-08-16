"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function getStoredTheme(): Theme | null {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "light" || saved === "dark" ? saved : null;
}

function getClientTheme(): Theme {
  const saved = getStoredTheme();

  if (saved) {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getServerTheme(): Theme {
  return "dark";
}

function subscribe(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      callback();
    }
  };

  const handleThemeEvent = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(THEME_EVENT, handleThemeEvent);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(THEME_EVENT, handleThemeEvent);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getClientTheme,
    getServerTheme,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.dataset.theme = next;
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="theme-toggle__label">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
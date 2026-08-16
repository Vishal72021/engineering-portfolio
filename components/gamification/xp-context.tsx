"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  XP_VALUES,
  getLevel,
  getLevelProgress,
  type XPEvent,
} from "@/lib/xp";
import { achievements } from "@/content/achievements";
import { getProjectBySlug } from "@/lib/projects";

type XPState = {
  xp: number;
  unlocked: string[];
  visitedProjects: string[];
  record: (event: XPEvent) => void;
  unlock: (achievementId: string) => void;
  visitProject: (projectSlug: string) => void;
};

type PersistedState = {
  xp: number;
  unlocked: string[];
  visitedProjects: string[];
};

type XPToastDetail = {
  xp: number;
  title?: string;
  message?: string;
};

const XPContext = createContext<XPState | null>(null);

const STORAGE_KEY = "vishal-portfolio-progression";
const XP_EVENT = "portfolio-xp-change";
const XP_TOAST_EVENT = "portfolio-xp-toast";

const EMPTY_STATE: PersistedState = {
  xp: 0,
  unlocked: [],
  visitedProjects: [],
};

let clientSnapshot: PersistedState | null = null;

function readState(): PersistedState {
  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return EMPTY_STATE;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<PersistedState>;

    return {
      xp: typeof parsed.xp === "number" ? Math.max(0, parsed.xp) : 0,
      unlocked: Array.isArray(parsed.unlocked) ? parsed.unlocked : [],
      visitedProjects: Array.isArray(parsed.visitedProjects)
        ? parsed.visitedProjects
        : [],
    };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return EMPTY_STATE;
  }
}

function getClientSnapshot(): PersistedState {
  if (clientSnapshot === null) {
    clientSnapshot = readState();
  }

  return clientSnapshot;
}

function getServerSnapshot(): PersistedState {
  return EMPTY_STATE;
}

function subscribe(callback: () => void) {
  const refresh = () => {
    clientSnapshot = readState();
    callback();
  };

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      refresh();
    }
  };

  const handleXPEvent = () => {
    refresh();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(XP_EVENT, handleXPEvent);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(XP_EVENT, handleXPEvent);
  };
}

function writeState(state: PersistedState) {
  clientSnapshot = state;

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state),
  );

  window.dispatchEvent(new Event(XP_EVENT));
}

function emitToast(detail: XPToastDetail) {
  window.dispatchEvent(
    new CustomEvent<XPToastDetail>(XP_TOAST_EVENT, {
      detail,
    }),
  );
}

function awardXP(
  state: PersistedState,
  amount: number,
  title?: string,
  message?: string,
): PersistedState {
  if (amount <= 0) {
    return state;
  }

  const nextState: PersistedState = {
    ...state,
    xp: state.xp + amount,
  };

  writeState(nextState);

  emitToast({
    xp: amount,
    title,
    message,
  });

  return nextState;
}

export function XPProvider({
  children,
}: {
  children: ReactNode;
}) {
  const state = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const record = useCallback((event: XPEvent) => {
    const current = readState();

    awardXP(
      current,
      XP_VALUES[event],
      "Exploration XP",
    );
  }, []);

  const unlock = useCallback((achievementId: string) => {
    const achievement = achievements.find(
      (candidate) => candidate.id === achievementId,
    );

    if (!achievement) {
      return;
    }

    const current = readState();

    if (current.unlocked.includes(achievementId)) {
      return;
    }

    const nextState: PersistedState = {
      xp: current.xp + achievement.xp,
      unlocked: [
        ...current.unlocked,
        achievementId,
      ],
      visitedProjects: current.visitedProjects,
    };

    writeState(nextState);

    emitToast({
      xp: achievement.xp,
      title: achievement.title,
      message: "Achievement unlocked",
    });
  }, []);

  const visitProject = useCallback(
    (projectSlug: string) => {
      const project = getProjectBySlug(projectSlug);

      if (!project) {
        return;
      }

      let current = readState();

      /*
       * A project should only contribute progression the
       * first time it is visited.
       */
      if (current.visitedProjects.includes(projectSlug)) {
        return;
      }

      current = {
        ...current,
        visitedProjects: [
          ...current.visitedProjects,
          projectSlug,
        ],
      };

      writeState(current);

      /*
       * Unlock helper used only inside this project-visit
       * transaction flow.
       */
      const unlockIfEligible = (
        achievementId: string,
      ) => {
        const achievement = achievements.find(
          (candidate) => candidate.id === achievementId,
        );

        if (!achievement) {
          return;
        }

        if (current.unlocked.includes(achievementId)) {
          return;
        }

        current = {
          xp: current.xp + achievement.xp,
          unlocked: [
            ...current.unlocked,
            achievementId,
          ],
          visitedProjects: current.visitedProjects,
        };

        writeState(current);

        emitToast({
          xp: achievement.xp,
          title: achievement.title,
          message: "Achievement unlocked",
        });
      };

      /*
       * 1. Project-specific achievement.
       *
       * Example:
       * github-readme-stats-deployment
       * -> Production Deployment Architect
       *
       * sentinel-ai
       * -> AI Forensics Builder
       */
      const projectAchievement = achievements.find(
        (achievement) =>
          achievement.projectSlug === projectSlug,
      );

      if (projectAchievement) {
        unlockIfEligible(projectAchievement.id);
      }

      /*
       * 2. Architecture exploration.
       *
       * Any flagship case study demonstrates architecture
       * exploration.
       */
      unlockIfEligible("architecture-explorer");

      /*
       * 3. Cloud architecture.
       *
       * Only cloud-oriented projects unlock this badge.
       */
      if (project.category.includes("Cloud")) {
        unlockIfEligible("cloud-systems-architect");
      }

      /*
       * 4. Systems Builder.
       *
       * Requires two DISTINCT project visits.
       */
      if (current.visitedProjects.length >= 2) {
        unlockIfEligible("systems-builder");
      }
    },
    [],
  );

  const value = useMemo<XPState>(
    () => ({
      xp: state.xp,
      unlocked: state.unlocked,
      visitedProjects: state.visitedProjects,
      record,
      unlock,
      visitProject,
    }),
    [
      state,
      record,
      unlock,
      visitProject,
    ],
  );

  return (
    <XPContext.Provider value={value}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  const context = useContext(XPContext);

  if (!context) {
    throw new Error(
      "useXP must be used within XPProvider",
    );
  }

  return context;
}

export function getProgressSnapshot(xp: number) {
  return {
    level: getLevel(xp),
    progress: getLevelProgress(xp),
  };
}
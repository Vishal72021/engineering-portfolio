export type XPEvent =
  | "explore-home"
  | "open-project"
  | "explore-case-study"
  | "explore-architecture"
  | "explore-growth";

export const XP_VALUES: Record<XPEvent, number> = {
  "explore-home": 50,
  "open-project": 150,
  "explore-case-study": 200,
  "explore-architecture": 100,
  "explore-growth": 50,
};

export type Level = {
  title: string;
  minimumXP: number;
  maximumXP?: number;
};

export const LEVELS: Level[] = [
  { title: "Engineering Apprentice", minimumXP: 0, maximumXP: 999 },
  { title: "Systems Builder", minimumXP: 1000, maximumXP: 2999 },
  { title: "Senior Engineer", minimumXP: 3000 },
];

export function getLevel(xp: number): Level {
  return [...LEVELS]
    .reverse()
    .find((level) => xp >= level.minimumXP) ?? LEVELS[0];
}

export function getLevelProgress(xp: number): number {
  const level = getLevel(xp);
  const next = LEVELS.find((candidate) => candidate.minimumXP > level.minimumXP);

  if (!next) {
    return 100;
  }

  const range = next.minimumXP - level.minimumXP;
  return Math.min(100, Math.max(0, ((xp - level.minimumXP) / range) * 100));
}

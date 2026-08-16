import { achievements } from "@/content/achievements";

export function getAchievementById(id: string) {
  return achievements.find((achievement) => achievement.id === id);
}

export function getProjectAchievement(projectSlug: string) {
  return achievements.find(
    (achievement) => achievement.projectSlug === projectSlug,
  );
}

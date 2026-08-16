export type ProjectStatus = "shipped" | "in-progress" | "planned" | "archived";

export type ProjectCategory =
  | "AI / ML"
  | "Backend"
  | "Infrastructure"
  | "Cloud"
  | "Developer Tools"
  | "Full Stack"
  | "Security";

export type Technology = {
  name: string;
  category?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  kind?: "image" | "diagram" | "screenshot";
};

export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Decision = {
  title: string;
  context: string;
  decision: string;
  rationale: string;
  tradeoffs?: string[];
};

export type EvidenceItem = {
  label: string;
  value: string;
  detail?: string;
};

export type CaseStudy = {
  overview: string;
  problem: string;
  challenges: string[];
  architecture?: ContentSection;
  decisions?: Decision[];
  implementation?: ContentSection[];
  reliability?: ContentSection;
  security?: ContentSection;
  evidence?: EvidenceItem[];
  lessonsLearned: string[];
  futureWork?: string[];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  featured: boolean;
  category: ProjectCategory[];
  year?: string;
  technologies: Technology[];
  links: ProjectLink[];
  badge?: string;
  xp?: number;
  hero?: ProjectMedia;
  gallery?: ProjectMedia[];
  caseStudy?: CaseStudy;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  xp: number;
  projectSlug?: string;
  rarity: "core" | "advanced" | "milestone";
};

export type TimelineEntry = {
  id: string;
  title: string;
  description: string;
  period: string;
  xp: number;
  technologies: string[];
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location: string;
  availability: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  capabilities: string[];
  technologyGroups: {
    name: string;
    technologies: string[];
  }[];
};

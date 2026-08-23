export type CertificationStatus = "completed" | "in-progress";

export type Certification = {
  name: string;
  issuer: string;
  status: CertificationStatus;
  completed?: string;
  target?: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    status: "completed",
    completed: "May 2026",
    href: "https://www.kaggle.com/learn/certification/vishaltripathy2023/intro-to-machine-learning",
  },
  {
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    status: "completed",
    completed: "May 2026",
    href: "https://www.kaggle.com/learn/certification/vishaltripathy2023/intermediate-machine-learning",
  },
  {
    name: "Practical Deep Learning for Coders",
    issuer: "fast.ai",
    status: "completed",
  },
  {
    name: "NLP Course",
    issuer: "Hugging Face",
    status: "completed",
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    status: "in-progress",
    target: "Month 6",
  },
  {
    name: "AWS Certified Machine Learning — Specialty",
    issuer: "AWS",
    status: "in-progress",
    target: "Month 9",
  },
  {
    name: "Microsoft Certified: Azure Administrator (AZ-104)",
    issuer: "Microsoft",
    status: "in-progress",
  },
];

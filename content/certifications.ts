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
    name: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    status: "completed",
    completed: "September 2026",
    href: "https://www.credly.com/badges/1dda75a1-456a-4b2c-acc0-530e1c6ea488/",
  },
  {
    name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    status: "completed",
    completed: "September 2026",
    href: "https://www.linkedin.com/learning/certificates/9785f5faf7f67340749ded46a8c08e2e2ddc93e16c1bff32ac9b65192cc58479",
  },
  {
    name: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    status: "completed",
    completed: "September 2026",
    href: "https://www.linkedin.com/learning/certificates/0676efd301e6400b94ba9a42d67422fed1bc0639d034058302bcb4e12c0decac",
  },
  {
    name: "Introduction to AI and Machine Learning on Google Cloud",
    issuer: "Google Cloud Skills Boost",
    status: "completed",
    completed: "August 2026",
    href: "https://www.skills.google/public_profiles/68e14a19-46b9-4f24-8af7-8abe897d3763/badges/27468978",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    status: "completed",
    completed: "August 2026",
    href: "https://www.skills.google/public_profiles/68e14a19-46b9-4f24-8af7-8abe897d3763/badges/27459532",
  },
  {
    name: "AI Capabilities and Limitations",
    issuer: "Anthropic — Claude Academy",
    status: "completed",
    completed: "August 2026",
    href: "https://academy.claude.com/verify/f23f80a9e7e8aa469d56d61c3feb2467",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic — Claude Academy",
    status: "completed",
    completed: "August 2026",
    href: "https://academy.claude.com/verify/3d15b169734823bb0e809d14f67e5778",
  },
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
];

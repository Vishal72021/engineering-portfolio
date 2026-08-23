export type ExperienceImpact = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  summary: string;
  highlights: string[];
  impacts: ExperienceImpact[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "AI Engineer / Azure Data Engineer",
    period: "September 2024 — Present",
    location: "Bhubaneswar, Odisha",
    domain: "CIBC — CCDWM · BFSI",
    summary:
      "Building production AI systems, Azure data pipelines, ETL workflows, CI/CD automation and backend services for enterprise engineering teams.",
    highlights: [
      "Built and deployed a document-aware RAG knowledge assistant using Python, FastAPI, LangChain, Azure AI Search, text-embedding-3-large, Docker, Kubernetes and Azure Functions.",
      "Built 12 production-ready Azure Databricks notebooks covering data ingestion, ETL, QA validation, ML preprocessing and deployment checks across four teams.",
      "Engineered Azure Data Factory pipelines for data movement, orchestration, transformation and validation across three projects.",
      "Built Azure DevOps CI/CD pipelines with automated testing, linting, static analysis, Docker builds, artifact publishing, environment promotion and rollback.",
      "Streamlined QA regression testing with Python and Bash and developed Linux/Bash automation for connectivity, logs and service management.",
      "Orchestrated Azure environment provisioning with ARM Templates and Azure CLI and systematized routine cloud operations with Python and Azure CLI.",
    ],
    impacts: [
      { value: "15 min → 30 sec", label: "document lookup time" },
      { value: "90%", label: "daily RAG adoption" },
      { value: "~90%", label: "retrieval accuracy" },
      { value: "12", label: "production Databricks notebooks" },
      { value: "2 wk → 3 days", label: "engineer onboarding" },
      { value: "~70%", label: "pipeline maintenance reduction" },
      { value: "1 hr → 10 min", label: "deployment effort" },
      { value: "~4 hrs", label: "regression time saved / release" },
      { value: "2 days → 2 hrs", label: "Azure provisioning" },
    ],
  },
];

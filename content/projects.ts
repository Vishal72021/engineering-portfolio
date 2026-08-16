import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "github-readme-stats-deployment",
    title: "GitHub Readme Stats Deployment",
    shortTitle: "GitHub Stats",
    subtitle: "Production infrastructure & self-hosting",
    description:
      "A production-style deployment of GitHub Readme Stats, hardened behind Nginx with TLS and hosted on Oracle Cloud.",
    status: "shipped",
    featured: true,
    category: ["Infrastructure", "Cloud", "Developer Tools"],
    year: "2026",
    technologies: [
      { name: "Docker", category: "Infrastructure" },
      { name: "Nginx", category: "Networking" },
      { name: "TLS", category: "Security" },
      { name: "Oracle Cloud", category: "Cloud" },
      { name: "Linux", category: "Infrastructure" },
    ],
    links: [
      {
        label: "Live demo",
        href: "https://vishal-github-stats.duckdns.org/api?username=Vishal72021",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Vishal72021/github-readme-stats-deployment",
        external: true,
      },
    ],
    badge: "Production Deployment Architect",
    xp: 900,
    caseStudy: {
      overview:
        "A real-world self-hosting project used to demonstrate the complete path from an application container to a publicly accessible production service.",
      problem:
        "The goal was to run GitHub Readme Stats under personal infrastructure while making the service reproducible, externally reachable and protected by a proper reverse-proxy and TLS setup.",
      challenges: [
        "Packaging the upstream application for repeatable execution.",
        "Exposing the service safely through a reverse proxy.",
        "Configuring DNS and HTTPS for a public endpoint.",
        "Operating the service on Oracle Cloud rather than relying on a managed application platform.",
      ],
      architecture: {
        title: "Deployment architecture",
        paragraphs: [
          "The service is containerized and placed behind Nginx. Nginx provides the public HTTP boundary while the application remains isolated behind the reverse proxy.",
          "The deployment separates application execution from public traffic handling, creating a foundation that can be extended with additional services later.",
        ],
        bullets: [
          "Client → DNS → TLS endpoint",
          "TLS endpoint → Nginx reverse proxy",
          "Nginx → containerized application",
          "Oracle Cloud provides the host infrastructure",
        ],
      },
      decisions: [
        {
          title: "Dockerized deployment",
          context:
            "The upstream application needed to run consistently across development and deployment environments.",
          decision: "Package the service as a Docker workload.",
          rationale:
            "Containerization makes the runtime reproducible and isolates application dependencies from the host.",
          tradeoffs: [
            "Adds container operational overhead.",
            "Requires basic image and container lifecycle management.",
          ],
        },
        {
          title: "Nginx as the public boundary",
          context:
            "The application should not directly own the public HTTP boundary.",
          decision: "Place Nginx in front of the application.",
          rationale:
            "A reverse proxy creates a clear boundary for routing, TLS termination and future service expansion.",
        },
      ],
      implementation: [
        {
          title: "Deployment workflow",
          paragraphs: [
            "The project was built around the practical sequence of containerization, host configuration, reverse proxy setup, DNS and HTTPS rather than treating deployment as an afterthought.",
          ],
        },
      ],
      reliability: {
        title: "Operational thinking",
        paragraphs: [
          "The project demonstrates the ability to reason about the complete deployment path rather than stopping at a locally working application.",
        ],
      },
      security: {
        title: "Security boundary",
        paragraphs: [
          "Public traffic terminates at the reverse-proxy layer with TLS. The application is kept behind the proxy instead of being exposed directly.",
        ],
      },
      evidence: [
        {
          label: "Deployment",
          value: "Oracle Cloud",
          detail: "Self-hosted production-style environment",
        },
        {
          label: "Public endpoint",
          value: "HTTPS",
          detail: "TLS-protected external service",
        },
        {
          label: "Infrastructure",
          value: "Docker + Nginx",
          detail: "Containerized application behind reverse proxy",
        },
      ],
      lessonsLearned: [
        "Deployment is part of the product, not a final checkbox.",
        "A clear network boundary simplifies future infrastructure evolution.",
        "Reproducibility matters even for a small service.",
      ],
      futureWork: [
        "Automate more of the deployment lifecycle.",
        "Add deeper service monitoring and alerting.",
        "Document recovery and rollback procedures.",
      ],
    },
  },
  {
    slug: "sentinel-ai",
    title: "Sentinel AI",
    shortTitle: "Sentinel AI",
    subtitle: "AI digital media forensics platform",
    description:
      "An architecture-first forensic platform designed to analyze digital media with production-grade APIs, persistence and extensible AI pipelines.",
    status: "in-progress",
    featured: true,
    category: ["AI / ML", "Backend", "Security"],
    year: "2026",
    technologies: [
      { name: "FastAPI", category: "Backend" },
      { name: "Python", category: "Language" },
      { name: "SQLAlchemy", category: "Persistence" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Docker", category: "Infrastructure" },
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Vishal72021/ai-digital-media-forensics-platform",
        external: true,
      },
    ],
    badge: "AI Forensics Builder",
    xp: 1200,
    caseStudy: {
      overview:
        "Sentinel AI is being developed as an enterprise-grade AI digital media forensics platform with architecture and operational concerns treated as first-class requirements.",
      problem:
        "Digital media analysis can require multiple AI capabilities, persistent evidence, asynchronous processing and clear auditability. The platform needs an architecture that can grow without turning model experimentation into an unmaintainable backend.",
      challenges: [
        "Establishing boundaries before implementation grows.",
        "Designing persistence around structured forensic data.",
        "Creating a backend foundation suitable for asynchronous AI workloads.",
        "Keeping the repository maintainable as additional forensic capabilities are introduced.",
      ],
      architecture: {
        title: "Architecture-first backend",
        paragraphs: [
          "The backend is centered on FastAPI with typed application boundaries and SQLAlchemy-backed persistence. PostgreSQL provides the relational foundation for durable application data.",
          "The architecture is intentionally designed to accommodate background jobs, storage, vector search and AI/ML models as the platform evolves.",
        ],
        bullets: [
          "API layer → FastAPI",
          "Application/domain boundaries → typed Python modules",
          "Persistence → SQLAlchemy + PostgreSQL",
          "Future processing → background job architecture",
          "Future intelligence → modular AI/ML pipelines",
        ],
      },
      decisions: [
        {
          title: "Architecture before feature volume",
          context:
            "A forensic platform can quickly accumulate models and endpoints without a stable foundation.",
          decision: "Define repository structure and architectural boundaries before expanding functionality.",
          rationale:
            "Early architectural discipline reduces coupling and makes future capabilities easier to integrate.",
          tradeoffs: [
            "Initial development is slower than rapidly adding isolated endpoints.",
            "Some abstractions are designed before all future workloads are known.",
          ],
        },
        {
          title: "PostgreSQL as the relational foundation",
          context:
            "Forensic workflows need durable, queryable structured data.",
          decision: "Use PostgreSQL through SQLAlchemy.",
          rationale:
            "A mature relational database provides strong consistency, expressive querying and a clear persistence model for core application data.",
        },
      ],
      implementation: [
        {
          title: "Backend foundation",
          paragraphs: [
            "The repository is being built with modern Python tooling, strict typing, FastAPI, SQLAlchemy and migration-ready persistence.",
            "Implementation is intentionally incremental so each architectural layer can be validated before the next layer is introduced.",
          ],
        },
      ],
      reliability: {
        title: "Production mindset",
        paragraphs: [
          "Reliability is being addressed through explicit boundaries, validation, migrations, typed code and a roadmap toward background processing rather than placing every workload directly inside request handling.",
        ],
      },
      security: {
        title: "Forensic context",
        paragraphs: [
          "The platform is designed around evidence-oriented processing, which makes traceability, controlled data handling and explicit service boundaries important architectural concerns.",
        ],
      },
      lessonsLearned: [
        "Architecture-first development is most valuable when a system is expected to evolve for years.",
        "AI systems still need conventional software engineering discipline around APIs, persistence and operations.",
        "A clean foundation makes experimentation safer rather than slower in the long run.",
      ],
      futureWork: [
        "Introduce asynchronous processing for expensive analysis.",
        "Integrate object storage and vector search where justified.",
        "Add model orchestration and forensic evidence workflows.",
        "Deploy the platform through a production cloud architecture.",
      ],
    },
  },
  {
    slug: "ledgerguard",
    title: "LedgerGuard",
    shortTitle: "LedgerGuard",
    subtitle: "Real-time financial fraud detection platform",
    description:
      "Planned flagship system for real-time fraud detection, risk scoring and event-driven financial intelligence.",
    status: "planned",
    featured: false,
    category: ["AI / ML", "Backend", "Security"],
    technologies: [
      { name: "Python" },
      { name: "Streaming" },
      { name: "Machine Learning" },
      { name: "PostgreSQL" },
    ],
    links: [],
    badge: "Future Flagship",
    xp: 0,
  },
  {
    slug: "pulseops",
    title: "PulseOps",
    shortTitle: "PulseOps",
    subtitle: "AI observability & incident intelligence platform",
    description:
      "Planned flagship system for turning operational signals into incident intelligence, prioritization and actionable context.",
    status: "planned",
    featured: false,
    category: ["AI / ML", "Backend", "Infrastructure"],
    technologies: [
      { name: "Python" },
      { name: "Observability" },
      { name: "AI Agents" },
      { name: "Cloud" },
    ],
    links: [],
    badge: "Future Flagship",
    xp: 0,
  },
  {
    slug: "aegis-iam",
    title: "Aegis IAM",
    shortTitle: "Aegis IAM",
    subtitle: "Enterprise identity & access management platform",
    description:
      "Planned flagship system focused on identity, authentication, authorization and enterprise access controls.",
    status: "planned",
    featured: false,
    category: ["Security", "Backend", "Full Stack"],
    technologies: [
      { name: "TypeScript" },
      { name: "Identity" },
      { name: "Authorization" },
      { name: "PostgreSQL" },
    ],
    links: [],
    badge: "Future Flagship",
    xp: 0,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

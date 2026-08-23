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
    slug: "production-rag-agent",
    title: "Production RAG Agent",
    shortTitle: "RAG Agent",
    subtitle: "Hybrid retrieval, reranking & grounded generation",
    description:
      "A production-oriented retrieval-augmented generation system built around hybrid search, reranking, grounded answers and a publicly deployed demo.",
    status: "shipped",
    featured: true,
    category: ["AI / ML", "Backend", "Developer Tools"],
    year: "2026",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "FastAPI", category: "Backend" },
      { name: "FAISS", category: "Vector Search" },
      { name: "SentenceTransformers", category: "Embeddings" },
      { name: "BM25", category: "Retrieval" },
      { name: "Reranking", category: "Retrieval" },
      { name: "Hugging Face", category: "Inference" },
    ],
    links: [
      {
        label: "Live demo",
        href: "https://huggingface.co/spaces/Vishal0072026/production-rag-agent",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/Vishal72021/production-rag-agent",
        external: true,
      },
    ],
    badge: "Grounded Retrieval Engineer",
    xp: 1100,
    caseStudy: {
      overview:
        "A production-oriented RAG application designed to demonstrate that useful LLM systems depend on retrieval quality, evidence handling and predictable backend behavior—not generation alone. The project includes a public Hugging Face demo and a reusable FastAPI backend.",
      problem:
        "Naive semantic retrieval can miss exact terminology while keyword search can miss semantic intent. The system therefore needed a retrieval pipeline that could combine complementary signals, improve ranking quality and keep generated answers grounded in retrieved evidence.",
      challenges: [
        "Supporting both semantic and lexical retrieval without coupling the application to one retrieval strategy.",
        "Combining retrieval results into a stable candidate set before generation.",
        "Improving candidate ordering with a dedicated reranking stage.",
        "Preventing unsupported generation when retrieval evidence is weak.",
        "Keeping runtime initialization predictable so the public demo does not repeatedly rebuild expensive resources.",
      ],
      architecture: {
        title: "Hybrid retrieval → reranking → grounded generation",
        paragraphs: [
          "The backend uses FastAPI as the application boundary. Documents are transformed into searchable chunks and represented through dense embeddings for semantic retrieval while BM25 provides lexical retrieval for exact terms and identifiers.",
          "Results from the complementary retrievers are combined using Reciprocal Rank Fusion before a cross-encoder reranking stage produces the final evidence candidates. Generation is then constrained by the retrieved context, with an extractive fallback available when generation is not appropriate.",
        ],
        bullets: [
          "Documents → parsing → chunking",
          "Chunks → SentenceTransformers embeddings → FAISS",
          "Chunks → BM25 lexical index",
          "Dense + lexical candidates → Reciprocal Rank Fusion",
          "Fused candidates → cross-encoder reranking",
          "Ranked evidence → grounded answer generation",
          "Weak/unsupported generation → extractive fallback",
        ],
      },
      decisions: [
        {
          title: "Hybrid retrieval instead of vector search alone",
          context:
            "Semantic retrieval is strong for meaning but can miss exact identifiers, names and terminology.",
          decision:
            "Use dense FAISS retrieval alongside BM25 lexical retrieval.",
          rationale:
            "The two retrieval signals fail differently, so combining them improves recall across both semantic and exact-match queries.",
          tradeoffs: [
            "Requires maintaining two indexes.",
            "Adds retrieval orchestration and fusion logic.",
          ],
        },
        {
          title: "Reciprocal Rank Fusion before reranking",
          context:
            "Independent retrievers produce candidate lists with different scoring semantics.",
          decision:
            "Fuse rankings rather than comparing raw scores directly.",
          rationale:
            "RRF provides a simple score-independent way to combine complementary ranked lists before more expensive reranking.",
        },
        {
          title: "Rerank before generation",
          context:
            "Retrieval recall alone does not guarantee that the most useful evidence appears first.",
          decision:
            "Use a cross-encoder reranking stage on the fused candidate set.",
          rationale:
            "A second-stage relevance model can spend more computation on a smaller candidate set and improve evidence ordering before generation.",
        },
        {
          title: "Grounding with an extractive fallback",
          context:
            "A generative model should not invent an answer when the retrieved context is insufficient.",
          decision:
            "Keep an extractive response path for cases where generation is weak or unavailable.",
          rationale:
            "The fallback provides deterministic evidence-oriented behavior and makes the system more resilient to inference constraints.",
        },
      ],
      implementation: [
        {
          title: "Backend and retrieval stack",
          paragraphs: [
            "The reusable backend is implemented with FastAPI, SentenceTransformers, FAISS and BM25-based retrieval. The repository separates ingestion, retrieval and generation concerns so retrieval strategies can evolve independently.",
          ],
        },
        {
          title: "Public demo",
          paragraphs: [
            "A sanitized demo corpus is exposed through a Hugging Face Space so the system can be evaluated interactively without requiring access to private data or infrastructure.",
          ],
        },
      ],
      reliability: {
        title: "Predictable runtime behavior",
        paragraphs: [
          "The application is designed to initialize retrieval resources once and reuse them rather than rebuilding indexes or models for every request. This keeps the demo responsive and makes the backend architecture closer to a deployable service than a notebook prototype.",
        ],
      },
      security: {
        title: "Grounded and sanitized by design",
        paragraphs: [
          "The public demonstration uses a sanitized corpus rather than exposing proprietary documents. The architecture also treats unsupported generation as a system behavior to control rather than an acceptable failure mode.",
        ],
      },
      evidence: [
        {
          label: "Deployment",
          value: "Hugging Face Space",
          detail: "Public interactive demonstration",
        },
        {
          label: "Backend",
          value: "FastAPI",
          detail: "Reusable API-oriented application layer",
        },
        {
          label: "Retrieval",
          value: "FAISS + BM25",
          detail: "Dense and lexical retrieval combined through RRF",
        },
        {
          label: "Ranking",
          value: "Cross-encoder",
          detail: "Second-stage relevance reranking",
        },
        {
          label: "Repository",
          value: "GitHub",
          detail: "Source and implementation evidence available publicly",
        },
      ],
      lessonsLearned: [
        "RAG quality is primarily a retrieval and evidence-engineering problem, not just a model-selection problem.",
        "Hybrid retrieval is valuable when a knowledge base contains both semantic concepts and exact technical terminology.",
        "A fallback path makes an AI system more predictable when generation or inference is unavailable.",
        "Separating ingestion, retrieval, ranking and generation makes the system easier to test and evolve.",
      ],
      futureWork: [
        "Add a formal retrieval evaluation suite with recall and ranking metrics.",
        "Expand observability around retrieval latency, reranking latency and generation failures.",
        "Add configurable chunking and retrieval strategies for different document domains.",
        "Introduce stronger evaluation and regression datasets before each release.",
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
    badge: "Architecture / Planning",
    xp: 0,
    caseStudy: {
      overview:
        "LedgerGuard is a proposed real-time fraud detection platform focused on low-latency transaction scoring, explainable risk signals and feedback-driven model improvement.",
      problem:
        "Fraud systems must make decisions quickly while balancing detection quality, false positives, explainability and changing transaction behavior.",
      challenges: [
        "Designing a streaming path that can score transactions with predictable latency.",
        "Combining rules, statistical signals and ML risk scores without creating an opaque decision layer.",
        "Handling model drift and feedback from confirmed fraud outcomes.",
      ],
      architecture: {
        title: "Proposed event-driven fraud architecture",
        paragraphs: [
          "The intended architecture separates ingestion, feature computation, risk scoring and decisioning so each layer can evolve independently.",
        ],
        bullets: [
          "Transaction events → streaming ingestion",
          "Events → feature enrichment → feature store",
          "Features → rules + ML scoring",
          "Scores → risk decision + explanation",
          "Outcomes → feedback and model evaluation",
        ],
      },
      decisions: [
        {
          title: "Keep decisioning explainable",
          context: "Financial risk decisions need actionable reasons, not only a probability score.",
          decision: "Return structured risk factors alongside the score.",
          rationale: "This makes decisions easier to investigate, audit and improve.",
        },
      ],
      evidence: [
        {
          label: "Status",
          value: "Architecture / Planning",
          detail: "Implementation has not yet started.",
        },
      ],
      lessonsLearned: [
        "Fraud detection is a systems problem as much as a modeling problem.",
        "Latency, explainability and feedback loops must be designed together.",
      ],
      futureWork: [
        "Implement streaming ingestion and transaction schemas.",
        "Build baseline rules and ML risk scoring.",
        "Add model evaluation, drift monitoring and feedback workflows.",
      ],
    },
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
    badge: "Architecture / Planning",
    xp: 0,
    caseStudy: {
      overview:
        "PulseOps is a proposed AI observability and incident intelligence platform that turns telemetry and operational context into prioritized, explainable incident workflows.",
      problem:
        "Modern systems generate more logs, metrics and alerts than engineers can efficiently triage during an incident. The challenge is reducing noise without hiding important signals.",
      challenges: [
        "Correlating signals across services and time windows.",
        "Separating symptoms from likely root causes.",
        "Using AI without allowing automated reasoning to become an untraceable source of operational risk.",
      ],
      architecture: {
        title: "Proposed incident-intelligence architecture",
        paragraphs: [
          "The platform is intended to keep telemetry collection deterministic while using AI primarily for correlation, summarization, prioritization and operator assistance.",
        ],
        bullets: [
          "Logs + metrics + traces → telemetry pipeline",
          "Telemetry → normalization + correlation",
          "Correlated signals → incident context",
          "Context → AI-assisted prioritization and summary",
          "Incident → operator workflow + feedback",
        ],
      },
      decisions: [
        {
          title: "AI assists operators; it does not silently change production",
          context: "Incident response is a high-impact environment for autonomous actions.",
          decision: "Keep remediation recommendations explicit and auditable.",
          rationale: "Human approval preserves operational control while still reducing investigation time.",
        },
      ],
      evidence: [
        {
          label: "Status",
          value: "Architecture / Planning",
          detail: "Implementation has not yet started.",
        },
      ],
      lessonsLearned: [
        "Observability becomes more useful when signals are connected to operational context.",
        "AI should reduce cognitive load while keeping operators in control.",
      ],
      futureWork: [
        "Build a telemetry ingestion and correlation layer.",
        "Add incident context generation and retrieval.",
        "Evaluate prioritization quality against historical incident patterns.",
      ],
    },
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
    badge: "Architecture / Planning",
    xp: 0,
    caseStudy: {
      overview:
        "Aegis IAM is a proposed enterprise identity and access management platform focused on authentication, authorization, policy enforcement and auditable access decisions.",
      problem:
        "Enterprise applications need consistent identity and authorization boundaries across services, while access decisions must remain understandable, testable and auditable.",
      challenges: [
        "Separating authentication from authorization and policy evaluation.",
        "Supporting role- and policy-based access without scattering checks across applications.",
        "Making privileged access and security-sensitive events auditable.",
      ],
      architecture: {
        title: "Proposed identity and policy architecture",
        paragraphs: [
          "The design centers identity and policy as shared platform capabilities exposed through explicit service boundaries.",
        ],
        bullets: [
          "Identity provider → authentication",
          "Identity + resource + action → policy evaluation",
          "Policy decision → service authorization",
          "Security events → audit trail",
          "Administrative changes → controlled policy lifecycle",
        ],
      },
      decisions: [
        {
          title: "Centralize policy evaluation",
          context: "Distributed authorization logic becomes inconsistent and difficult to audit.",
          decision: "Keep authorization policy in a dedicated policy boundary.",
          rationale: "A centralized model makes access behavior easier to test, review and evolve.",
        },
      ],
      evidence: [
        {
          label: "Status",
          value: "Architecture / Planning",
          detail: "Implementation has not yet started.",
        },
      ],
      lessonsLearned: [
        "Identity is a platform concern, not a collection of login screens.",
        "Authorization decisions need explicit policy boundaries and auditability.",
      ],
      futureWork: [
        "Implement authentication and token lifecycle.",
        "Build RBAC and policy evaluation.",
        "Add audit events and security-focused integration tests.",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

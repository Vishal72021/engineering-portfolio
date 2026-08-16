# Architecture — Vishal Tripathy Engineering Portfolio

**Status:** Architecture Freeze Candidate  
**Version:** 1.0  
**Depends on:** `docs/PROJECT.md` v1.0  
**Runtime:** Next.js / React / TypeScript  
**Deployment:** Vercel

---

# 1. Architecture Objective

The portfolio architecture must support four properties simultaneously:

1. **Recruiter-first presentation**
2. **Engineering depth**
3. **Long-term content scalability**
4. **Low operational complexity**

The architecture therefore favors a statically rendered, content-driven Next.js application over a database-backed portfolio platform.

The central principle is:

> **Content changes frequently; presentation architecture should not.**

Projects, achievements, timeline entries, profile information and case-study content belong in structured content modules. Components render that content.

---

# 2. Architectural Principles

## A1 — Server-first

Use React Server Components by default.

Client Components exist only where the browser must manage:

- interaction,
- animation state,
- theme switching,
- XP state,
- modal state,
- local exploration state.

## A2 — Content/presentation separation

Portfolio content must not be tightly coupled to JSX.

```text
Content
   ↓
Domain types
   ↓
Presentation components
```

## A3 — Static-first

Prefer static generation for public portfolio content.

The portfolio does not need a runtime database.

## A4 — Progressive enhancement

Core content remains usable if:

- JavaScript is delayed,
- animations are disabled,
- gamification is unavailable.

## A5 — Feature boundaries

Components should be organized by product capability rather than one giant component tree.

## A6 — Evidence over abstraction

Do not create abstractions merely to demonstrate architecture.

Abstractions must reduce duplication or clarify ownership.

## A7 — No unnecessary backend

A backend is introduced only when a concrete requirement requires server-side state or privileged integration.

---

# 3. High-Level System

```text
                         ┌─────────────────────────┐
                         │        Visitor          │
                         └────────────┬────────────┘
                                      │
                                      ▼
                         ┌─────────────────────────┐
                         │       Vercel Edge       │
                         │     Next.js Runtime     │
                         └────────────┬────────────┘
                                      │
                ┌─────────────────────┼─────────────────────┐
                │                     │                     │
                ▼                     ▼                     ▼
        ┌─────────────┐       ┌──────────────┐      ┌──────────────┐
        │ Static Pages│       │ Project Pages│      │ Interactive  │
        │   /         │       │ /projects/*  │      │   Client UI  │
        └──────┬──────┘       └──────┬───────┘      └──────┬───────┘
               │                     │                     │
               └─────────────────────┼─────────────────────┘
                                     ▼
                           ┌──────────────────┐
                           │ Structured       │
                           │ Content Modules  │
                           └────────┬─────────┘
                                    │
                ┌───────────────────┼────────────────────┐
                ▼                   ▼                    ▼
             Profile             Projects            Timeline
                │                   │                    │
                └───────────────────┼────────────────────┘
                                    ▼
                           ┌──────────────────┐
                           │ Domain Utilities │
                           │ XP / Metadata    │
                           └──────────────────┘
```

---

# 4. Repository Architecture

Target structure:

```text
engineering-portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── signal/
│   ├── projects/
│   ├── case-study/
│   ├── media/
│   ├── growth/
│   ├── gamification/
│   ├── contact/
│   └── ui/
│
├── content/
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── achievements.ts
│   └── timeline.ts
│
├── lib/
│   ├── achievements.ts
│   ├── xp.ts
│   ├── metadata.ts
│   └── utils.ts
│
├── public/
│   ├── projects/
│   └── assets/
│
├── docs/
│   ├── PROJECT.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN-SYSTEM.md
│   └── IMPLEMENTATION.md
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

The exact folder names may evolve during implementation if a clear improvement is found, but the boundaries must remain.

---

# 5. Application Routing

## `/`

Primary recruiter experience.

Contains:

- hero,
- engineering signal,
- selected flagship projects,
- growth,
- about/philosophy,
- contact.

## `/projects`

Complete project hub.

Must support an arbitrary number of projects.

## `/projects/[slug]`

Individual project case study.

Example:

```text
/projects/github-readme-stats-deployment
/projects/sentinel-ai
```

## `not-found`

Custom branded 404.

---

# 6. Rendering Strategy

## Homepage

Prefer Server Component.

Interactive subsections are isolated Client Components.

```text
page.tsx
├── Hero
├── EngineeringSignal
├── FeaturedProjects
│     └── ProjectCard
├── Growth
│     └── XPWidget [client]
├── About
└── Contact
```

## Projects index

Server-rendered from the project collection.

Filtering should only become client-side if filtering is actually required.

## Project detail

Statically generated from project content.

Use:

```text
generateStaticParams()
```

for known project slugs.

## Metadata

Generate metadata per project from the same content model.

---

# 7. Domain Model

The portfolio is fundamentally a content system.

## Project

Conceptual TypeScript shape:

```ts
type Project = {
  slug: string
  title: string
  shortTitle?: string
  subtitle: string
  description: string
  status: ProjectStatus
  featured: boolean
  category: ProjectCategory
  year?: string

  technologies: Technology[]
  links: ProjectLinks

  badge?: AchievementId
  xp?: number

  hero?: ProjectMedia
  gallery?: ProjectMedia[]

  caseStudy: CaseStudy
}
```

---

# 8. Project Status

Use a constrained enum rather than arbitrary strings.

```text
shipped
in-progress
archived
planned
```

Only real project state should be represented.

Do not use marketing statuses such as:

- world-class,
- revolutionary,
- elite,
- production-ready,

unless supported by actual evidence.

---

# 9. Project Categories

Initial categories:

```text
AI / ML
Backend
Infrastructure
Cloud
Developer Tools
Full Stack
Security
```

A project may support multiple categories if the data model requires it.

Categories are descriptive metadata, not skill ratings.

---

# 10. Project Links

Links should be explicit:

```ts
type ProjectLinks = {
  repository?: string
  liveDemo?: string
  documentation?: string
  additional?: ProjectLink[]
}
```

The UI must not render empty link controls.

External links should use safe attributes where appropriate.

---

# 11. Case Study Model

```ts
type CaseStudy = {
  overview: string
  problem: string
  challenges: string[]
  architecture?: ArchitectureSection
  decisions?: Decision[]
  implementation?: ContentSection[]
  reliability?: ContentSection[]
  security?: ContentSection[]
  results?: EvidenceItem[]
  lessonsLearned: string[]
  futureWork?: string[]
}
```

Not every project needs every section.

The model is flexible enough to represent both infrastructure and AI projects honestly.

---

# 12. Engineering Decision Model

Important architectural decisions should be represented explicitly.

```ts
type Decision = {
  title: string
  context: string
  decision: string
  rationale: string
  tradeoffs?: string[]
}
```

This is particularly important for flagship projects because it converts:

```text
"I used PostgreSQL."
```

into:

```text
"Why PostgreSQL?
What problem did it solve?
What alternatives existed?
What trade-off did I accept?"
```

---

# 13. Content Architecture

Content is stored locally in TypeScript modules.

Example:

```text
content/
├── profile.ts
├── projects.ts
├── experience.ts
├── achievements.ts
└── timeline.ts
```

Why TypeScript rather than JSON?

- type safety,
- editor support,
- easier composition,
- compile-time validation,
- no runtime parsing,
- straightforward static generation.

A CMS is deliberately deferred.

---

# 14. Content Access Pattern

Components should not directly import arbitrary content fragments from many locations.

Prefer:

```text
content/projects.ts
        ↓
project collection
        ↓
domain helper
        ↓
page/component
```

Example utilities:

```ts
getFeaturedProjects()
getProjectBySlug(slug)
getProjectsByCategory(category)
getProjectSlugs()
```

These helpers centralize collection behavior.

---

# 15. Featured Project Strategy

The homepage should contain a curated subset.

Use:

```ts
featured: true
```

rather than assuming:

```ts
projects.slice(0, 3)
```

This allows portfolio ordering and project maturity to evolve independently from implementation.

---

# 16. Dynamic Project Scaling

Adding a project must not require changing:

- grid CSS,
- route definitions,
- project card component,
- project page component,
- navigation,
- SEO generation.

The intended workflow:

```text
Create project data
      ↓
Add optional media
      ↓
Project automatically appears
      ↓
Slug automatically becomes routable
      ↓
Metadata generated
      ↓
Project card rendered
```

---

# 17. Component Architecture

## Layout

Responsible for:

- page shell,
- global spacing,
- footer,
- navigation placement.

## Navigation

Responsible for:

- desktop navigation,
- mobile navigation,
- theme control,
- active state where applicable.

## Hero

Responsible for:

- identity,
- positioning,
- primary CTA,
- initial engineering signal.

## Signal

Responsible for:

- capabilities,
- evidence-oriented technology presentation,
- high-level engineering identity.

## Projects

Responsible for:

- featured project presentation,
- project cards,
- project grid,
- project filters if justified.

## Case Study

Responsible for:

- project narrative,
- architecture,
- decisions,
- implementation,
- evidence,
- links.

## Growth

Responsible for:

- timeline,
- XP,
- achievements,
- progression visualization.

## UI

Contains reusable primitives:

- Button
- Badge
- Card
- SectionHeading
- Modal
- Progress
- IconButton
- LinkButton

UI primitives must remain visually neutral enough to support multiple product sections.

---

# 18. Client Component Boundaries

Use `"use client"` only when necessary.

Likely Client Components:

```text
ThemeToggle
MobileNavigation
XPSystem
AchievementToast
CaseStudyModal
InteractiveTimeline
Motion wrappers
```

Likely Server Components:

```text
Hero
ProjectGrid
ProjectCard
CaseStudy content
Footer
Static metadata
```

A component containing animation does not automatically require the entire parent page to become a Client Component.

Isolate client behavior.

---

# 19. State Architecture

No global state library is initially required.

Use local React state for:

- modal visibility,
- theme preference where required,
- exploration state,
- XP state.

If persistence is needed, use browser storage carefully.

Example:

```text
localStorage
├── portfolio-theme
└── portfolio-progress
```

Do not persist sensitive information.

Gamification state is purely local and non-authoritative.

Clearing storage must never affect access to content.

---

# 20. XP Architecture

XP is a derived interaction layer.

Define events centrally:

```ts
type XPEvent =
  | "explore-home"
  | "open-project"
  | "explore-case-study"
  | "explore-architecture"
  | "explore-growth"
```

Map events to XP centrally:

```text
XP rules
    ↓
event
    ↓
awardXP()
    ↓
local progress state
```

Do not scatter arbitrary XP mutations throughout UI components.

---

# 21. Achievement Architecture

Achievements are definitions plus unlock conditions.

Conceptually:

```ts
type Achievement = {
  id: string
  title: string
  description: string
  icon: Icon
  condition: AchievementCondition
  xp: number
}
```

Conditions may depend on:

- project exploration,
- case-study exploration,
- section exploration,
- specific project interactions.

Achievements must remain deterministic and locally reproducible.

---

# 22. Level Architecture

Levels are derived from XP thresholds.

Example:

```text
0–999       Engineering Apprentice
1000–2999   Systems Builder
3000+       Senior Engineer
```

Thresholds are product configuration, not professional certification.

The UI must not imply that the level is an externally recognized engineering rank.

---

# 23. Gamification UX Rule

Gamification is additive.

```text
Content
  ↓
still fully usable
  ↓
Gamification enriches exploration
```

Never:

```text
Gamification
  ↓
required interaction
  ↓
content
```

No important project information is hidden behind XP.

---

# 24. Theme Architecture

Use CSS variables as the primary theme abstraction.

Example conceptual tokens:

```text
--background
--surface
--surface-elevated
--text-primary
--text-secondary
--border
--accent
--success
--warning
```

Components consume tokens instead of hardcoded colors.

This enables:

- dark mode,
- light mode,
- consistent visual language,
- future theme refinement.

Theme preference should be resolved without an avoidable flash where practical.

---

# 25. Design Token Architecture

The design system should have explicit tokens for:

### Color

- background
- surfaces
- text
- muted text
- borders
- accent
- status

### Typography

- display
- heading
- body
- caption
- label

### Spacing

Use a consistent spacing scale.

### Radius

Use a small controlled set rather than arbitrary values.

### Motion

Define standard durations and easing categories.

These tokens will be documented in `DESIGN-SYSTEM.md`.

---

# 26. Animation Architecture

Framer Motion is used selectively.

Animation responsibilities should be isolated.

Examples:

```text
Reveal
Hover
Modal
Progress
Theme
Achievement
```

Prefer transform/opacity-based animation.

Avoid layout-heavy continuous animation.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduced-motion mode must preserve content and interaction.

---

# 27. Image Architecture

Use Next.js image optimization where appropriate.

Project media should live under:

```text
public/projects/<project-slug>/
```

Example:

```text
public/
└── projects/
    ├── github-readme-stats/
    └── sentinel-ai/
```

Images should be:

- optimized,
- appropriately sized,
- semantically named,
- supplied with meaningful alt text when informational.

Decorative imagery must not replace text content.

---

# 28. SEO Architecture

Global metadata is defined at the application level.

Project-specific metadata is derived from project content.

Conceptual flow:

```text
Project data
     ↓
metadata helper
     ↓
generateMetadata()
     ↓
project <head>
```

Required infrastructure:

```text
app/sitemap.ts
app/robots.ts
```

Structured metadata should be added only where it accurately represents the page.

---

# 29. Accessibility Architecture

Accessibility must exist at component level.

Examples:

```text
Button
  → keyboard + focus

Modal
  → focus management + escape

Navigation
  → semantic navigation + mobile controls

Theme toggle
  → accessible label

Project links
  → meaningful link names

Progress
  → accessible status where appropriate
```

Accessibility cannot be fixed only at the end.

---

# 30. Performance Architecture

Primary strategy:

```text
Server rendering
      ↓
minimal JS
      ↓
isolated interaction
      ↓
optimized media
      ↓
stable layout
```

Avoid:

- unnecessary client rendering,
- large dependency bundles,
- repeated API calls,
- giant animation libraries beyond actual use,
- unnecessary runtime computation.

---

# 31. External Integration Architecture

## GitHub

GitHub links are static by default.

GitHub API integration is optional.

If introduced later:

```text
Server-side fetch
       ↓
cached result
       ↓
presentation
```

Never expose private GitHub tokens to the browser.

## Live demos

External project URLs are treated as outbound links.

The portfolio must not depend on a live demo being available to render the core page.

---

# 32. Contact Architecture

Primary contact methods are static outbound links:

```text
mailto:
LinkedIn
GitHub
```

No contact database or API is required for V1.

A contact form should only be added if there is a concrete reason to introduce a secure server-side submission path.

---

# 33. Security Architecture

Baseline:

```text
No secrets in repository
No secrets in client bundles
No private credentials
Safe external links
Minimal visitor data
```

If future server-side integrations are added:

- secrets remain server-side,
- environment variables are used,
- input validation is mandatory,
- third-party failures must degrade gracefully.

---

# 34. Error Handling

The portfolio should fail gracefully.

Examples:

### Missing project

Render custom `not-found`.

### Missing optional media

Render the case study without the media.

### External link unavailable

The portfolio page itself remains functional.

### GitHub API failure

Do not block the page.

### Gamification failure

Core content remains fully usable.

---

# 35. Testing Strategy

Testing should match actual risk.

## Required

- TypeScript compilation
- lint
- production build
- route validation
- responsive manual validation
- accessibility checks
- link validation

## Recommended

Component tests for:

- project data rendering,
- project lookup,
- XP calculations,
- achievement conditions.

End-to-end tests may be introduced for:

- navigation,
- project opening,
- theme switching,
- mobile menu,
- contact links.

Do not create tests solely for trivial markup.

---

# 36. Build and Validation Pipeline

Target workflow:

```text
Developer
   ↓
Format / lint
   ↓
Type check
   ↓
Build
   ↓
Manual / automated validation
   ↓
Git commit
   ↓
GitHub
   ↓
Vercel preview
   ↓
Production
```

CI may be added once repository tooling is established.

---

# 37. Environment Configuration

V1 should require no secrets.

If environment variables become necessary:

```text
.env.local
.env.example
```

Rules:

- `.env.local` never committed,
- `.env.example` documents required keys,
- client-exposed variables must use the appropriate Next.js public prefix,
- secrets must never be exposed to client components.

---

# 38. Deployment Architecture

```text
                   GitHub
                      │
                      ▼
                 Vercel Build
                      │
             ┌────────┴────────┐
             │                 │
          Preview           Production
             │                 │
             └────────┬────────┘
                      ▼
                 Next.js App
```

The application should be deployable with standard Vercel Next.js detection.

No custom server is required.

---

# 39. Observability

V1 does not require custom observability infrastructure.

Production issues should primarily be handled through:

- Vercel deployment logs,
- browser diagnostics,
- optional privacy-conscious analytics,
- external service dashboards where applicable.

Do not introduce a logging backend for a static portfolio.

---

# 40. Architecture Decision Records

Only decisions that materially affect the system should become ADRs.

Initial architectural decisions are captured directly in this document.

Potential future ADRs may be created for:

- introducing a CMS,
- introducing a backend,
- adding GitHub API integration,
- adding a database,
- adding advanced 3D,
- changing deployment platform.

No ADR is needed for trivial component choices.

---

# 41. Architecture Boundaries

The following boundaries are frozen for V1:

```text
Content
  ≠
Presentation

Domain utilities
  ≠
UI components

Server content
  ≠
Client interaction

Gamification
  ≠
Core content

External integrations
  ≠
Core rendering dependency
```

Violating these boundaries requires a documented reason.

---

# 42. Dependency Policy

Every dependency must have a purpose.

Initial expected dependencies:

```text
next
react
react-dom
framer-motion
lucide-react
```

Development tooling should remain minimal.

Do not add libraries for functionality easily implemented with:

- CSS,
- React,
- Next.js,
- browser APIs.

---

# 43. Architecture Trade-offs

## Static content vs CMS

**Decision:** Static TypeScript content.

**Reason:**

- portfolio content changes relatively infrequently,
- no editor UI is needed,
- no database is needed,
- deployment is simpler,
- type safety is valuable.

## Backend vs no backend

**Decision:** No backend for V1.

**Reason:**

- no authentication,
- no private data,
- no form processing requirement,
- no database,
- no server-side business logic requirement.

## Global state vs local state

**Decision:** Local state.

**Reason:**

- interaction state is small,
- avoids unnecessary complexity,
- XP persistence is non-critical.

## 3D engine vs CSS / motion

**Decision:** CSS + Framer Motion initially.

**Reason:**

- lower bundle cost,
- easier accessibility,
- easier mobile behavior,
- sufficient for subtle futuristic visual language.

Advanced 3D remains P2 and requires evidence that it improves the product.

---

# 44. Architecture Acceptance Criteria

The architecture is considered frozen when:

- [ ] Route structure is defined.
- [ ] Server/client boundaries are defined.
- [ ] Content model is defined.
- [ ] Project scaling strategy is defined.
- [ ] Case-study model is defined.
- [ ] Component boundaries are defined.
- [ ] XP architecture is defined.
- [ ] Achievement architecture is defined.
- [ ] Theme architecture is defined.
- [ ] Animation boundaries are defined.
- [ ] SEO strategy is defined.
- [ ] Accessibility strategy is defined.
- [ ] Performance strategy is defined.
- [ ] Deployment architecture is defined.
- [ ] Security baseline is defined.
- [ ] Testing strategy is defined.
- [ ] No unnecessary backend dependency exists.

---

# 45. Architecture Freeze Statement

For V1:

> **The Vishal Tripathy Engineering Portfolio is a statically rendered, content-driven Next.js application deployed on Vercel. It uses structured TypeScript content, server-first rendering, isolated client-side interaction, a reusable design system, dynamic project routes, and a lightweight local gamification layer.**

The architecture deliberately avoids a database, CMS, custom backend, authentication system, and heavy 3D runtime.

The goal is to maximize:

**engineering signal + visual quality + performance + maintainability**

while minimizing:

**operational complexity + unnecessary dependencies + artificial architecture.**

---

## Status

**ARCHITECTURE FREEZE CANDIDATE — ready for implementation after design-system review.**

Next artifact:

`docs/DESIGN-SYSTEM.md`

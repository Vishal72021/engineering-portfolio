# Implementation Plan — Vishal Tripathy Engineering Portfolio

**Status:** Ready for Implementation  
**Version:** 1.0  
**Depends on:** `PROJECT.md`, `ARCHITECTURE.md`, `DESIGN-SYSTEM.md`

---

# 1. Execution Principle

Move quickly without sacrificing architecture.

Each phase must produce a working increment.

Do not build speculative features before the core recruiter experience works.

---

# 2. Phase 0 — Repository Foundation

## Deliver

- clean Next.js project
- TypeScript strict mode
- ESLint / formatting
- baseline folder structure
- global styles
- dependency setup
- Git hygiene

## Acceptance

- app starts locally
- production build succeeds
- no type errors
- no lint errors

---

# 3. Phase 1 — Design System

## Deliver

- semantic color tokens
- typography
- spacing
- radii
- borders
- buttons
- badges
- cards
- section headings
- responsive primitives
- theme system

## Acceptance

- dark theme works
- light theme works
- primitives are reusable
- mobile baseline works

---

# 4. Phase 2 — Content System

## Deliver

```text
content/
├── profile.ts
├── projects.ts
├── achievements.ts
└── timeline.ts
```

Create typed domain models and collection helpers.

## Acceptance

- project data is separated from UI
- project lookup works
- featured project selection works
- adding a project requires no layout changes

---

# 5. Phase 3 — Application Shell

## Deliver

- root layout
- navigation
- mobile navigation
- footer
- theme control
- global metadata

## Acceptance

- navigation works
- responsive behavior works
- keyboard navigation works
- theme persists appropriately

---

# 6. Phase 4 — Homepage

## Deliver

- hero
- engineering signal
- flagship projects
- growth preview
- about/philosophy
- contact

## Acceptance

A recruiter can understand:

- who Vishal is,
- engineering direction,
- flagship work,
- contact path

without scrolling excessively.

---

# 7. Phase 5 — Projects Hub

## Deliver

- `/projects`
- dynamic project grid
- project cards
- project metadata
- optional category filtering

## Acceptance

- arbitrary project count works
- responsive grid works
- featured projects are configurable
- cards link to correct case studies

---

# 8. Phase 6 — Case Study Visual Refinement

## Deliver

- `/projects/[slug]`
- project hero
- overview
- problem
- challenges
- architecture
- decisions
- implementation
- evidence
- lessons
- future work
- repository/demo links

## Acceptance

Each flagship project can support an interview conversation without requiring external documentation.

---

# 9. Phase 7 — Gamification

## Deliver

- XP engine
- achievements
- level progression
- unlock feedback
- local persistence if useful

## Acceptance

- gamification never blocks content
- XP is deterministic
- achievements are meaningful
- reduced motion remains usable

---

# 10. Phase 8 — Quality Assurance

## Validate

- responsive layout
- keyboard navigation
- reduced motion
- contrast
- external links
- metadata
- sitemap
- robots
- image optimization when media is introduced
- console errors
- production build
- all project slugs
- theme persistence
- mobile navigation
- 404 behavior
- contact configuration
- gamification persistence and non-blocking behavior

## Acceptance

No fabricated evidence.

Every visual communicates something useful.

The recruiter journey works without requiring gamification.

All production checks pass in the actual development environment.

---

# 11. Phase 9 — Production Validation

Run:

```bash
npm run check
npm start
```

Then validate production locally.

Check:

- all routes,
- project slugs,
- theme,
- mobile,
- case studies,
- contact links,
- 404,
- SEO,
- sitemap.xml,
- robots.txt.

---

# 12. Phase 10 — Vercel

## Deliver

- GitHub repository
- Vercel project
- preview deployment
- production deployment

## Acceptance

- production URL works
- all routes work
- no environment-specific failure
- metadata works
- external links work

---

# 14. Definition of Done

The portfolio is complete when the `PROJECT.md` definition of done passes and the production walkthrough feels coherent from:

```text
Landing
  ↓
Project
  ↓
Case study
  ↓
Engineering evidence
  ↓
Contact
```

---

# 15. Speed Rule

Do not pause implementation to document trivial details.

Documentation should only be updated when:

- architecture changes,
- a significant design decision changes,
- a new integration is introduced,
- a major scope decision is made.

The portfolio is the deliverable. Documentation is the guardrail.

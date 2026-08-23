# Phase 10 — Professional Identity & Engineering Profile

## Objective

Extend the stable V1 portfolio with a verified professional identity layer
without changing the existing visual direction. The phase covers the resume,
professional summary, experience evidence, skills, education, certifications,
and supporting ML work.

## Implemented

- Professional summary and positioning.
- Resume download and browser-view CTA.
- TCS experience with quantified engineering impact.
- Experience metrics are sourced from the experience content model.
- Current engineering focus and location are surfaced in the profile.
- Categorized technical skills.
- Education and relevant coursework.
- Completed certifications and learning.
- In-progress certification goals are explicitly labeled as in progress.
- Kaggle House Prices experiment with public notebook link and observed evidence.
- Sequential homepage section numbering.
- Updated desktop and mobile navigation anchors.
- Responsive styling for the profile layer.

## Source of truth

The baseline resume `Vishal_Tripathy_AI_Engineer.pdf` is the authoritative source
for professional experience, skills, education and certifications. The portfolio
does not present in-progress certifications as completed credentials.

The Kaggle House Prices notebook is treated as a supporting ML experiment, not a
flagship production project.

## Homepage structure

```text
01 Hero
02 Engineering Signal
03 Selected Work
04 Experience
05 Growth
06 Skills
07 About
08 Education & Learning
09 Engineering Badges
10 Contact
```

## Acceptance criteria

- Resume is available at `/resume/Vishal_Tripathy_AI_Engineer.pdf`.
- Hero exposes a Resume CTA.
- Experience exposes measurable engineering impact.
- Experience metrics have one source of truth.
- Professional focus and location are visible.
- Skills are grouped by engineering domain.
- Education and coursework are visible.
- Certifications are visible with completed/in-progress distinction.
- Kaggle experiment links to its public notebook.
- Section numbering is sequential.
- Existing V1 gamification and project navigation remain intact.
- `.env.local` and TypeScript build cache files are excluded from repository/distribution artifacts.
- `npm run check` passes before release.

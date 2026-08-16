# Design System — Vishal Tripathy Engineering Portfolio

**Status:** Design Freeze Candidate  
**Version:** 1.0  
**Depends on:** `docs/PROJECT.md`, `docs/ARCHITECTURE.md`

---

# 1. Design Objective

The portfolio must feel like a premium engineering product rather than a decorative personal website.

The visual system should communicate:

> **Precision, technical depth, confidence, restraint and curiosity.**

The design must be memorable enough to stand out while remaining credible enough for a senior engineer or hiring manager.

---

# 2. Design Personality

## Primary traits

- Premium
- Technical
- Minimal
- Editorial
- Futuristic
- Confident
- Precise
- Human

## Secondary traits

- Experimental
- Playful
- Interactive
- Gamified

Secondary traits must never overpower the primary identity.

---

# 3. Visual References

The design takes inspiration from qualities found in:

- Stripe — information hierarchy and product polish
- Linear — typography, density and interaction quality
- Vercel — restraint and technical confidence
- Raycast — polished developer-product interaction
- modern AI infrastructure products — technical atmosphere

These are **design principles**, not visual templates to copy.

---

# 4. Core Design Principle

## Credibility before spectacle

The visual hierarchy is:

```text
Engineering evidence
        ↓
Clear information
        ↓
Strong typography
        ↓
Interaction
        ↓
Decorative detail
```

If an effect competes with the content, the effect loses.

---

# 5. Color System

Use semantic CSS variables.

## Dark theme

The dark theme is the primary visual identity.

Conceptual tokens:

```css
--background: #08090A;
--surface: #101214;
--surface-elevated: #15181B;

--text-primary: #F5F3EE;
--text-secondary: #A0A29F;
--text-tertiary: #6E716E;

--border: rgba(255,255,255,0.10);
--border-strong: rgba(255,255,255,0.17);

--accent: #FF6A2B;
--accent-soft: rgba(255,106,43,0.12);

--success: #57C785;
--warning: #E7B84B;
--error: #E35D6A;
```

The exact accent may be refined during visual implementation, but the system should maintain one dominant accent rather than a rainbow palette.

## Light theme

```css
--background: #F6F5F1;
--surface: #FFFFFF;
--surface-elevated: #F0EFEA;

--text-primary: #151515;
--text-secondary: #656761;
--text-tertiary: #8B8D87;

--border: rgba(21,21,21,0.10);
--border-strong: rgba(21,21,21,0.16);

--accent: #E9531E;
--accent-soft: rgba(233,83,30,0.10);
```

The light theme is not simply an inverted dark theme. It must retain equivalent hierarchy and contrast.

---

# 6. Color Usage Rules

## Do

- Use neutral surfaces for most UI.
- Use the accent to identify important states.
- Use status colors sparingly.
- Use borders to create structure.
- Allow large areas of visual quiet.

## Do not

- use gradients everywhere,
- use multiple competing accent colors,
- make every card glow,
- color every badge differently,
- use color as the only communication mechanism.

The accent should feel valuable because it is relatively rare.

---

# 7. Typography

Typography is the primary visual system.

## Display

Use a strong modern sans-serif display treatment.

Desired characteristics:

- tight tracking,
- strong weight,
- large scale,
- compact line height.

Example:

```text
Engineer
Builder
AI Innovator
```

## Editorial emphasis

Use a restrained serif/italic treatment for emphasis where appropriate.

Example:

```text
Built for
production.
```

The serif treatment should be used as an accent, not for large bodies of text.

## Body

Body typography must prioritize:

- readability,
- comfortable line length,
- clear hierarchy.

## Labels

Use compact uppercase labels for:

- section identifiers,
- project status,
- metadata,
- system labels.

Example:

```text
01 / SELECTED WORK
```

---

# 8. Typography Scale

Initial scale:

```text
Display XL    clamp(3.5rem, 8vw, 7rem)
Display L     clamp(3rem, 6vw, 5rem)
Heading XL    clamp(2.5rem, 5vw, 4rem)
Heading L     clamp(2rem, 4vw, 3rem)
Heading M     1.5rem
Heading S     1.15rem

Body L        1.1rem
Body M        1rem
Body S        0.875rem

Label         0.65–0.75rem
Micro         0.55–0.65rem
```

Actual values may be tuned during implementation.

---

# 9. Spacing System

Use a consistent spacing scale.

Base unit:

```text
4px
```

Preferred scale:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
160
```

Large spacing should be used intentionally to create editorial rhythm.

---

# 10. Layout System

Primary content width:

```text
max-width: 1180–1240px
```

Desktop horizontal padding:

```text
24–40px
```

Mobile horizontal padding:

```text
16–20px
```

The portfolio should not feel edge-to-edge on desktop.

---

# 11. Grid System

Use CSS Grid for major page composition.

Common layouts:

```text
2-column
3-column
4-column
```

Avoid hardcoding project count into layout logic.

Example:

```css
grid-template-columns: repeat(auto-fit, minmax(...));
```

or equivalent responsive grid definitions.

The project grid must naturally accommodate future additions.

---

# 12. Border System

Borders are important to the visual language.

Use:

```text
1px subtle border
```

for:

- cards,
- navigation boundaries,
- inputs,
- project metadata,
- panels.

Strong borders should be reserved for:

- focus states,
- selected states,
- important controls.

Avoid heavy outlines around everything.

---

# 13. Radius System

Use restrained corner radii.

Suggested:

```text
Small      6px
Medium     8–10px
Large      12–16px
Pill       999px
```

Avoid excessive rounded-card aesthetics.

The visual language should remain architectural rather than playful.

---

# 14. Shadows

Shadows are optional and subtle.

Preferred:

- low-opacity,
- large blur,
- low contrast.

Avoid:

- dramatic neon shadows,
- multiple stacked shadows,
- constant glow.

Depth should primarily come from:

```text
surface contrast
border
spacing
```

rather than heavy shadows.

---

# 15. Navigation

The navigation should be:

- minimal,
- compact,
- persistent where appropriate,
- visually quiet.

Structure:

```text
[Vishal Tripathy]              Projects  Growth  Contact  [Theme]
```

On mobile:

```text
[VT]                            [Menu]
```

The navigation should not consume excessive vertical space.

---

# 16. Hero

The hero is the highest-value visual section.

Desired structure:

```text
small availability / positioning label

Engineer
Builder
AI Innovator

short positioning statement

[Explore Work] [Start Conversation]

engineering signal / profile module
```

The hero should answer:

> Who is this person and why should I continue?

within seconds.

---

# 17. Hero Animation

Allowed:

- subtle entrance reveal,
- text stagger,
- profile card reveal,
- restrained orbital / ambient detail,
- hover feedback.

Not allowed:

- dramatic cinematic intro,
- loading screen,
- animation before content appears,
- excessive particle systems.

---

# 18. Engineering Signal

This section should communicate capabilities through evidence.

Prefer:

```text
AI / ML
Backend Systems
Infrastructure
Cloud
System Design
Full Stack
```

paired with technologies and project evidence.

Avoid:

```text
Python      95%
Docker      88%
FastAPI     91%
```

Skill percentages are explicitly prohibited.

---

# 19. Project Card

Project cards are among the most important components.

Structure:

```text
project number                 status

project icon

project title
project subtitle

short engineering description

technology tags

achievement / evidence       open case study →
```

The card must communicate:

1. What is it?
2. Why does it matter?
3. What engineering domain does it demonstrate?
4. Where can I learn more?

---

# 20. Featured Project Treatment

Featured projects receive more visual weight.

A flagship project may use:

- larger card,
- architectural diagram,
- product screenshot,
- deployment visualization,
- evidence strip.

But visual weight should be proportional to actual project maturity.

Do not visually imply that an unfinished project is more complete than it is.

---

# 21. Project Case Study

The case-study page should feel closer to an engineering report than a blog.

Visual hierarchy:

```text
Project identity
        ↓
Executive summary
        ↓
Problem
        ↓
Architecture
        ↓
Engineering decisions
        ↓
Implementation
        ↓
Evidence
        ↓
Lessons
        ↓
Future work
        ↓
Repository / Demo
```

Large text should be reserved for key statements.

Detailed technical content should remain comfortable to read.

---

# 22. Architecture Visualization

Architecture diagrams should be:

- simple,
- readable,
- technically accurate,
- responsive.

Prefer:

```text
CSS / SVG
```

for static diagrams.

Do not use a heavy 3D engine for architecture diagrams.

The diagram must still make sense in grayscale or reduced motion.

---

# 23. Technology Tags

Tags should be quiet metadata.

Example:

```text
FastAPI
PostgreSQL
SQLAlchemy
Docker
Azure
```

Style:

- small text,
- subtle surface,
- restrained border,
- no rainbow colors.

---

# 24. Achievement Badge

Achievement badges should feel like premium system metadata rather than game stickers.

Example:

```text
[◆ Production Deployment Architect]
```

Visual characteristics:

- small,
- monochromatic or accent-led,
- subtle icon,
- no cartoon imagery.

Achievement UI should support:

```text
locked
unlocked
featured
```

states.

---

# 25. XP System

XP is an ambient progression layer.

Example:

```text
SYSTEMS BUILDER

2,140 XP
─────────────── 71%
3,000 XP
```

The progress bar should be elegant and restrained.

Avoid:

- rainbow progress bars,
- bouncing counters,
- excessive particle effects,
- huge "LEVEL UP!!!" screens.

---

# 26. XP Feedback

When XP changes:

Preferred:

```text
+150 XP
```

with a small fade/slide.

Optional:

```text
Achievement unlocked
Production Deployment Architect
```

The feedback should disappear naturally.

It must never interrupt the recruiter flow.

---

# 27. Growth Timeline

The growth timeline should tell a genuine engineering story.

Example:

```text
VM setup
   ↓
Docker deployments
   ↓
Reverse proxy + TLS
   ↓
AI pipelines
   ↓
Production systems
```

Each stage should connect to real work.

Do not invent milestones solely to fill the timeline.

---

# 28. Status Indicators

Use status labels consistently:

```text
SHIPPED
IN PROGRESS
PLANNED
ARCHIVED
```

Status should be visible but not visually dominant.

---

# 29. Buttons

## Primary

Used for:

- Explore work
- Contact
- key conversion actions.

Visual:

```text
dark/light solid
strong contrast
compact
```

## Secondary

Used for:

- GitHub
- live demo
- supporting navigation.

Visual:

```text
transparent / surface
subtle border
```

## Icon buttons

Used for:

- theme,
- close,
- menu.

Must always have accessible labels.

---

# 30. Links

Inline links should be recognizable through:

- color,
- underline where appropriate,
- hover transition.

Do not rely exclusively on hover.

---

# 31. Footer

Footer should be quiet.

Content:

```text
© Vishal Tripathy

Engineer • Builder • AI Innovator

GitHub / LinkedIn / Email
```

Avoid excessive footer navigation.

---

# 32. Contact Section

The contact section should be visually stronger than ordinary page sections.

Suggested message:

```text
Have a hard problem?
Let's build it.
```

Primary actions:

```text
Email Vishal
LinkedIn
GitHub
```

The contact section should not feel like an afterthought.

---

# 33. Background Treatment

Default background should be largely flat.

Allowed:

- subtle grid,
- fine noise,
- very low-opacity radial light,
- technical line motifs,
- sparse ambient elements.

These should be barely perceptible.

Avoid:

- giant gradient blobs,
- excessive glassmorphism,
- moving star fields,
- distracting particles.

---

# 34. Glassmorphism Policy

Glass effects are allowed only as a supporting treatment.

Use sparingly for:

- floating navigation,
- profile widgets,
- modal overlays.

Do not make the entire portfolio glassmorphic.

---

# 35. Iconography

Use one coherent icon family.

Preferred:

**Lucide**

Icons should be:

- small,
- functional,
- visually consistent.

Avoid decorative icon overload.

---

# 36. Photography / Portrait

If a portrait is used:

- it should feel editorial,
- lighting should match the brand,
- background should be restrained,
- no generic corporate headshot treatment.

A portrait is optional.

The portfolio must remain strong without one.

---

# 37. Project Media

Project visuals should prioritize authentic evidence:

1. real application screenshots,
2. real architecture diagrams,
3. real deployment views,
4. real terminal / infrastructure evidence,
5. carefully designed explanatory visuals.

Avoid stock imagery.

Avoid fabricated dashboards.

Avoid fake product screenshots.

---

# 38. Responsive Behavior

## Desktop

Use:

- generous whitespace,
- multi-column layouts,
- larger typography,
- richer project presentation.

## Tablet

Reduce:

- grid columns,
- spacing,
- display type scale.

## Mobile

Prioritize:

- readable typography,
- single-column flow,
- touch targets,
- concise metadata,
- minimal decorative elements.

The mobile experience must retain the same narrative hierarchy.

---

# 39. Breakpoints

Initial implementation:

```text
< 640px      Mobile
640–767px    Large mobile
768–1023px   Tablet
1024–1279px  Desktop
1280px+      Large desktop
```

Breakpoints should be driven by layout needs rather than device names when implementation begins.

---

# 40. Interaction States

Every interactive element should have:

```text
default
hover
focus
active
disabled
```

Where applicable:

```text
selected
locked
unlocked
```

Focus states must remain visible even when hover styles are absent.

---

# 41. Motion Tokens

Initial motion categories:

```text
micro     120–180ms
standard  200–300ms
emphasis  350–500ms
```

Use easing that feels smooth rather than elastic.

Avoid spring effects unless they communicate physical interaction.

---

# 42. Reduced Motion

When:

```text
prefers-reduced-motion: reduce
```

the application should:

- remove non-essential movement,
- shorten transitions,
- disable decorative motion,
- preserve content,
- preserve state changes.

Gamification must still work without animation.

---

# 43. Loading States

The portfolio should avoid unnecessary loading screens.

For content available at build time:

```text
render immediately
```

For future external data:

```text
quiet skeleton / fallback
```

Never show a fake loading experience just for visual effect.

---

# 44. Empty States

Future project slots should not appear as broken or unfinished cards.

If an actual empty state is needed:

```text
Next system
In development
```

It should be clearly intentional.

---

# 45. Error States

Error UI should use the same design system.

Example:

```text
Something went wrong.

Return to projects →
```

No generic browser-looking error pages.

---

# 46. Content Density

The portfolio should feel information-rich without feeling crowded.

Target:

```text
high signal
low noise
```

Use progressive disclosure when technical depth becomes large.

Examples:

- expandable decision details,
- architecture sections,
- tabs only if genuinely useful,
- secondary technical notes.

Do not hide core evidence.

---

# 47. Gamification Visual Rules

Gamification must look like an engineering system.

Preferred language:

```text
XP
LEVEL
ACHIEVEMENT
UNLOCKED
PROGRESS
SYSTEM
```

Avoid:

```text
PLAYER
MISSION!!!
COMBO!!!
POWER-UP!!!
BOSS FIGHT!!!
```

The user is an engineer, not a game avatar.

---

# 48. Accessibility Design Rules

Color is never the only signal.

Examples:

```text
SHIPPED
✓

IN PROGRESS
●

LOCKED
○
```

Progress bars should have textual values where meaningful.

Icon-only controls must have labels.

Text must remain readable at increased browser font sizes.

---

# 49. Design Anti-Patterns

Explicitly avoid:

- excessive neon,
- excessive gradients,
- excessive glass,
- skill percentage bars,
- giant technology logo walls,
- fake statistics,
- fake testimonials,
- fake awards,
- excessive carousels,
- auto-playing media,
- giant cursor effects,
- scroll-jacking,
- mandatory animation,
- huge 3D scenes,
- childish game UI,
- generic template hero sections.

---

# 50. Definition of Done

Design is considered frozen when:

- [ ] Color tokens defined.
- [ ] Typography hierarchy defined.
- [ ] Spacing scale defined.
- [ ] Layout system defined.
- [ ] Radius system defined.
- [ ] Border/shadow rules defined.
- [ ] Hero direction defined.
- [ ] Project card direction defined.
- [ ] Case-study direction defined.
- [ ] XP/achievement visual language defined.
- [ ] Responsive behavior defined.
- [ ] Interaction states defined.
- [ ] Motion rules defined.
- [ ] Reduced-motion behavior defined.
- [ ] Accessibility principles defined.
- [ ] Anti-patterns documented.

---

# 51. Design Freeze Statement

For V1:

> **The portfolio will use a premium, editorial engineering aesthetic built around neutral surfaces, strong typography, restrained accent color, structured grids, authentic project evidence and subtle motion.**

Gamification will behave like a sophisticated system layer rather than a game interface.

The design will prioritize:

**clarity + credibility + technical depth + polish**

over:

**visual novelty + animation volume + decorative complexity**.

---

## Status

**DESIGN FREEZE CANDIDATE — ready for implementation.**

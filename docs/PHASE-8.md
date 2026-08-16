# Phase 8 — Quality Assurance

**Status:** In progress / final gate
**Version:** 1.0

## Automated validation target

From `vishal-engineering-portfolio/`:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

## Static review completed

- [x] Dynamic project routes present
- [x] 404 route present
- [x] Sitemap route present
- [x] Robots route present
- [x] Theme persistence present
- [x] Reduced-motion CSS present
- [x] Keyboard focus-visible baseline present
- [x] External links use `target="_blank"` with `rel="noreferrer"` where appropriate
- [x] No fabricated project metrics or screenshots
- [x] Contact configuration no longer contains an invented personal email/LinkedIn URL
- [x] Project count is data-driven
- [x] Gamification remains optional and local-only
- [x] Project XP events are scoped per project
- [x] All defined achievement badges have a reachable unlock path

## Environment contract

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CONTACT_EMAIL
NEXT_PUBLIC_LINKEDIN_URL
```

The repository no longer hardcodes an unverified production domain or personal contact address.

## Validation limitation

The provided execution environment could not complete `npm install` because package retrieval timed out, so the final lint/typecheck/build gate must still be run in the actual development environment before production deployment.

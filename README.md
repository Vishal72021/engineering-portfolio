# Vishal Tripathy — Engineering Portfolio

Flagship engineering portfolio built with Next.js, React, TypeScript and Vercel.

## Product

The portfolio is designed as an engineering product rather than a conventional resume site. It emphasizes flagship project case studies, architecture evidence, production thinking, subtle gamification and recruiter-friendly storytelling.

## Architecture

- Next.js / React / TypeScript
- Server-first rendering
- Structured TypeScript content
- Dynamic project routes
- CSS-based motion with reduced-motion support
- Vercel deployment
- No backend or database required for V1

## Repository

```text
app/          Next.js routes and application shell
components/   Product UI and feature components
content/      Portfolio content and project data
lib/          Domain utilities
public/       Project media and static assets
docs/         Product and engineering source-of-truth documents
```

## Development

**Directory:** `vishal-engineering-portfolio/`

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production validation

**Directory:** `vishal-engineering-portfolio/`

```bash
npm run build
npm start
```

## Deployment

Push the repository to GitHub and import it into Vercel. Standard Next.js detection should be sufficient.

Set these Vercel environment variables before production deployment:

```text
NEXT_PUBLIC_SITE_URL=https://<your-production-domain>
NEXT_PUBLIC_CONTACT_EMAIL=<your-public-contact-email>
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/<your-profile>/
```

`NEXT_PUBLIC_SITE_URL` is used for canonical metadata, `sitemap.xml`, and `robots.txt`.


## Engineering documentation

The project intentionally keeps documentation small:

- `docs/PROJECT.md` — product charter and requirements
- `docs/ARCHITECTURE.md` — technical architecture and boundaries
- `docs/DESIGN-SYSTEM.md` — visual language
- `docs/IMPLEMENTATION.md` — execution and validation plan

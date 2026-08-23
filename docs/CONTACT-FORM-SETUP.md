# Contact Form Setup

The portfolio contact form submits to `/api/contact` and delivers messages through Resend. The visitor never needs to open a mail client or LinkedIn.

## Required Vercel environment variables

Set these as server-side environment variables in Vercel:

- `RESEND_API_KEY` — Resend API key.
- `CONTACT_TO_EMAIL` — inbox that should receive portfolio inquiries.
- `CONTACT_FROM_EMAIL` — verified sender, for example `Portfolio <contact@your-domain.com>`.
- `NEXT_PUBLIC_SITE_URL` — deployed portfolio origin, for example `https://your-domain.com`.

`NEXT_PUBLIC_CONTACT_EMAIL` remains the public fallback for the visible Email button.

## Local development

Copy the relevant values from `.env.example` into `.env.local` and restart `npm run dev` after changing environment variables.

## Security behavior

The API route validates name, email and message length, escapes message content before building HTML email content, checks the configured site origin, includes a honeypot field, and applies a lightweight per-instance rate limit.

For a high-traffic deployment, replace the in-memory rate limiter with a shared store such as Redis/Upstash so limits are consistent across serverless instances.

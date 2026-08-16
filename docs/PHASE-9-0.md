# Phase 9.0 — Hydration QA Fix

**Status:** Fix applied; browser validation pending

## Issue

The first local browser request exposed a real hydration mismatch in the theme toggle.

The server rendered the default dark theme while the browser immediately rendered the persisted light theme from `localStorage`.

The same underlying risk existed in the XP provider because persisted XP was read during the client render.

## Fix

Both browser-persistent systems now use `useSyncExternalStore`:

- Theme preference
- Portfolio exploration XP

This provides:

```text
Server snapshot
    ↓
Deterministic HTML
    ↓
Client snapshot
    ↓
Persisted browser state
```

without rendering different markup during hydration.

## Why this approach

- No hydration suppression.
- No ESLint rule suppression.
- No synchronous `setState` in effects.
- Server and client have explicit snapshots.
- Browser state remains persistent.
- Updates are propagated through explicit external-store events.

## Validation required

Restart the dev server and reload `/`.

The browser console must show:

```text
No hydration mismatch
No React hydration errors
```

Then test:

- theme persistence
- XP persistence
- project navigation
- achievement unlocking

Do not proceed to full Phase 9 visual QA until the console is clean.

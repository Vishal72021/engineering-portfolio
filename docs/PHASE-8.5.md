# Phase 8.5 — Pre-Production Hygiene

**Status:** Fix applied; local validation pending

## Issues found during local validation

### React `set-state-in-effect`

Two components initially triggered the React hooks lint rule:

- `components/gamification/xp-context.tsx`
- `components/navigation/theme-toggle.tsx`

State initialization was moved to lazy `useState` initializers so effects only synchronize external systems.

### React `exhaustive-deps`

The XP context then exposed one remaining warning because the memoized context value referenced `unlock` without declaring it as a dependency.

The final implementation now uses `useCallback` for the context actions and includes both callbacks in the `useMemo` dependency list.

This keeps function identity stable where possible and makes the dependency graph explicit.

## Next validation

From:

```text
vishal-engineering-portfolio/
```

run:

```bash
npm run check
```

The required gate is:

```text
0 errors
0 warnings
successful typecheck
successful production build
```

Do not start Phase 9 until this command is clean.

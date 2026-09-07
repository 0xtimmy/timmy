# Agent Guide

## Purpose

This repository contains Timmy's personal website. It should remain a small,
legible static site with a distinctive generative p5.js animation. Simplicity,
reproducibility, and long-term maintainability are more important than adding
framework abstractions.

The machine-level instructions supplied by the user remain authoritative. This
file adds repository-specific context.

## Current state

The site is one static HTML document built with TypeScript, Vite, and p5.js:

- `index.html` owns content and document structure.
- `src/main.ts` owns startup and development lifecycle cleanup.
- `src/sketch.ts` owns the p5 animation in instance mode.
- `src/styles.css` owns layout and presentation.
- `vite.config.ts` directs generated output to `out/`.
- Cloudflare Pages hosts the site from `master`; its build settings and runbook
  are not yet recorded.

## Design constraints

- Preserve the concept of a concise personal page with an animation beside it.
- Retain TypeScript for authored behavior.
- Retain p5.js unless the user explicitly changes direction.
- Minimize production and development dependencies.
- Do not introduce a framework, component system, CSS framework, state manager,
  or test framework without a concrete need.
- Do not split code merely to satisfy a preferred directory shape. Each file
  and directory must have a clear responsibility.
- Preserve the established status-card hierarchy and responsive animation
  regimes unless a design change is scoped with the user.

## Working rules

1. Discuss and document substantive changes before implementation. A user
   "godspeed" is the usual implementation signal.
2. Keep infrastructure changes separate from the visual redesign where
   practical.
3. Make migration steps reversible until the static TypeScript prototype passes
   the agreed checks.
4. Put temporary generated output under `out/`; do not commit it.
5. Add directories only when they have real contents and a documented purpose.
6. Use unit tests only for extracted source logic. Validate scripts, configs,
   assets, links, and deployment assumptions through preflight or smoke checks.
7. Update the README and relevant files under `docs/` whenever commands,
   architecture, external services, or deployment behavior change.

## Validation expectations

The final refresh should expose one documented check command that verifies, at
minimum:

- TypeScript compilation
- formatting and static analysis
- a clean production build into `out/`
- required local assets and configuration
- basic generated-page and link integrity

Browser validation should cover desktop and narrow layouts, keyboard use,
reduced-motion preferences, and animation cleanup.

## External boundaries

- p5.js is the sole runtime dependency and is pinned through npm.
- The rendered page intentionally contains no links, contact details, remote
  fonts, analytics, or API calls.

These boundaries must be documented and failure-tolerant. Do not alter or
deploy external services without explicit user direction.

## Documentation map

- `README.md`: human-facing cover page and current commands
- `docs/architecture.md`: architecture decision and dependency policy
- `docs/refresh-plan.md`: phased work and completion criteria

Update this map as durable documentation is added.

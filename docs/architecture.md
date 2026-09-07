# Architecture

## Purpose

This repository contains a deliberately small, mostly static personal website:
a concise status notice beside a generative p5 animation. It should remain easy
to understand, reproduce, maintain, and deploy.

## Priorities

1. Keep the site small.
2. Retain TypeScript and the p5 animation.
3. Minimize direct and transitive dependencies.
4. Produce static files that can be hosted anywhere.
5. Add structure only for a concrete need.

## Selected architecture

The site is one static HTML document built with TypeScript and Vite:

```text
.
├── docs/
├── src/
│   ├── main.ts
│   ├── sketch.ts
│   └── styles.css
├── out/                 # generated, never authored
├── index.html
├── README.md
├── AGENTS.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- `index.html` owns semantic document structure and status copy.
- `main.ts` owns startup and development lifecycle cleanup.
- `sketch.ts` owns p5 setup, drawing, and teardown.
- `styles.css` owns layout and presentation.
- `out/` contains the deployable site.

The page remains one document until repetition, lifecycle isolation, or reuse
demonstrates a useful extraction boundary.

## Toolchain and dependencies

The direct dependency contract is intentionally narrow:

- `p5`: the sole runtime dependency and an intentional part of the design
- `@types/p5`: compile-time declarations for the pinned p5 release
- `typescript`: authored language and strict type checker
- `vite`: local server and static production builder

All versions are exact in `package.json`. Formatting or lint tools should be
added only if they provide distinct value beyond strict TypeScript checks and a
production build.

p5 remains at version 1.5.0 for migration fidelity. Any p5 upgrade should be a
separate, visually verified change.

## Privacy and external boundaries

The rendered page intentionally has no personal name, contact details, links,
remote fonts, analytics, or API calls. Its organization and research references
are intentionally identifying enough for people with existing context.

The previous hello counter and its Cloudflare Worker dependency were removed.
The page must remain fully useful without network access after its bundled
assets load.

Search-engine indexing is discouraged with page metadata. Hosting-level crawler
policy remains a deployment decision.

## Animation boundary

The p5 animation is a core feature. Its migration preserves the original fixed
720 by 1200 backing canvas, palette, motion equation, and unusual boundary-reset
behavior. The TypeScript implementation:

- uses p5 instance mode and explicit typed arrays
- avoids implicit globals and p5 name collisions
- attaches the canvas to a known decorative element
- removes the instance during development hot reload
- cannot intercept input or obscure semantic content
- renders a single static frame when reduced motion is requested

Future animation tuning is a visual-design change, not infrastructure cleanup.

## Build contract

```sh
npm ci
npm run dev
npm run check
npm run build
```

`check` runs strict TypeScript checking and a production build. `build` writes
only deployable output to `out/`. The supported Node release is recorded in
`.nvmrc` and constrained in `package.json`.

## History and reversibility

Commit `ee34c83` is the known-good Nuxt 2/Vue 2 baseline from before the
refresh. The retired implementation remains recoverable there. Future
infrastructure changes should avoid incidental visual changes.

## Deployment boundary

Cloudflare Pages hosts the site and deploys from `master`. The Pages project,
live URL, build command, output-directory setting, preview behavior, and
rollback procedure remain to be recorded before this branch is merged.

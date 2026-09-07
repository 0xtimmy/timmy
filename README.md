# Timmy's Personal Website

A deliberately small static website: one concise status notice beside a
generative p5.js animation.

## Current development

Use the Node version recorded in `.nvmrc` and install the pinned npm dependency
graph:

```sh
npm ci
npm run dev
```

Available commands:

```sh
npm run check
npm run build
```

`check` runs strict TypeScript checking and a production build. `build` writes
the deployable site to the ignored `out/` directory.

## Project map

- `index.html`: document structure and status copy
- `src/main.ts`: page entry point and animation lifecycle
- `src/sketch.ts`: typed p5 animation
- `src/styles.css`: layout and presentation
- `docs/`: architecture and refresh documentation
- `AGENTS.md`: working conventions and project-specific context

## Status

The Nuxt implementation was replaced by a static TypeScript and Vite build. The
previous implementation remains recoverable at baseline commit `ee34c83`.

The site is hosted by Cloudflare Pages and deploys from `master`. The exact
Pages build settings, live URL, preview behavior, and rollback procedure still
need to be recorded before the refresh branch is merged.

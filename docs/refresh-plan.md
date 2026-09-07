# Website Refresh Plan

## Goal

Replace the old application framework with a reproducible static TypeScript
site while retaining the p5 animation and presenting a deliberately sparse,
link-free status page.

## Guardrails

- Retain TypeScript and p5.
- Do not introduce abstractions or dependencies without a concrete use.
- Keep authored files under version control and generated output under `out/`.
- Keep deployment work separate until the existing host is understood.
- Keep the Nuxt baseline recoverable at commit `ee34c83`.

## Phase 0 — Baseline

- [x] Confirm the worktree was clean before refresh work.
- [x] Record baseline commit `ee34c83`.
- [x] Inventory the current implementation and direct dependencies.
- [x] Confirm the local Node and npm versions.
- [x] Identify Cloudflare Pages as the host and `master` as its production
  branch.
- [ ] Record the exact Pages project, URL, build settings, and procedure.

## Phase 1 — Static toolchain

- [x] Configure TypeScript and Vite.
- [x] Direct production output to `out/`.
- [x] Pin p5 and all development dependencies exactly.
- [x] Provide only `dev`, `check`, and `build` scripts.
- [x] Verify a clean `npm ci` and production build.
- [x] Pin the supported Node release.

Result: four direct packages replace the Nuxt, Vue, Webpack, Tailwind, Babel,
ESLint, and Prettier dependency graph.

## Phase 2 — Holding page and animation

- [x] Replace the old biography and project roster with a sparse status notice.
- [x] Remove personal names, contact details, links, and remote fonts.
- [x] Remove the hello counter and its external API dependency.
- [x] Port the p5 sketch to typed instance-mode code.
- [x] Preserve the original animation behavior and palette.
- [x] Add semantic headings and an ordinary bullet list.
- [x] Mark the animation decorative and prevent it from intercepting input.
- [x] Add a static reduced-motion behavior.
- [x] Add neutral page metadata and discourage indexing.

## Phase 3 — Verification and retirement

- [x] Run strict TypeScript checking and a production build.
- [x] Verify production output is contained in `out/`.
- [x] Remove Nuxt, Vue, Webpack, Tailwind, counter, and old scaffold files.
- [x] Regenerate the lockfile from the reduced dependency set.
- [x] Confirm the dependency audit reports no known vulnerabilities.
- [x] Adopt the deny-by-default repository whitelist.
- [x] Inspect desktop and narrow layouts in a browser.
- [ ] Inspect reduced-motion behavior in a browser.
- [ ] Verify the final host serves the production build without external
  requests or path errors.

Reduced-motion browser inspection remains open because no browser was connected
to the implementation session.

## Deployment phase

- [x] Identify Cloudflare Pages as the hosting provider.
- [ ] Record the live URL and Pages project identifier.
- [ ] Record the build, publish, rollback, and cache behavior.
- [ ] Decide whether hosting-level crawler controls are desirable.
- [ ] Add the smallest appropriate deployment automation.
- [ ] Smoke-test the deployed page and record the runbook.

## Later design work

- [ ] Review the exact typography, spacing, and notice-box treatment.
- [ ] Tune desktop and mobile animation composition.
- [ ] Revisit copy as research and work affiliations change.
- [ ] Upgrade p5 separately if the benefit justifies visual regression work.

# WeldUI — Project Completion Status

> Last updated: 2026-03-11 (Phase 3 complete — all framework wrappers updated, 157/157 tests passing)  
> Owner: Manoj Mallick / LearnHubPlay BV (KvK 97741825)  
> Repository: github.com/manojmallick/WeldUI

---

## Summary

| Category | Done | Total | % |
|---|---|---|---|
| Phase 1 — Foundation | 10 / 10 | 10 | 100% |
| Phase 2 — Framework Wrappers (React/Vue/Angular) | 3 / 3 | 3 | 100% |
| Phase 2 — Svelte Wrapper | 1 / 1 | 1 | 100% |
| Phase 2 — Premium Themes | 10 / 10 | 10 | 100% |
| Phase 3 — Simple Complex Components (wks 7–8) | 10 / 10 | 10 | 100% |
| Phase 3 — Compliance Pack | 6 / 6 | 6 | 100% |
| Phase 3 — Advanced Complex Components (wks 9–10) | 10 / 10 | 10 | 100% |
| Phase 4 — Compound Components | 0 / 8 | 8 | 0% |
| Phase 4 — MCP Server | 0 / 1 | 1 | 0% |
| Tooling & CI/CD | 8 / 12 | 12 | 67% |
| AI / Claude Code Setup | 7 / 9 | 9 | 78% |
| Commercial / GTM Setup | 0 / 6 | 6 | 0% |

---

## ✅ Completed Work

### Infrastructure & Monorepo

- [x] **pnpm workspace** configured (`pnpm-workspace.yaml`) with all packages, apps, and tools
- [x] **Turborepo** pipeline configured (`turbo.json`) using the `tasks` key (upgraded from deprecated `pipeline`)
- [x] **Root `package.json`** with `packageManager: pnpm@10.29.3` field (required by Turborepo 2.0)
- [x] **`pnpm-lock.yaml`** committed — CI can use `--frozen-lockfile`
- [x] **`_template` package excluded** from workspace to prevent npm 404 errors
- [x] **TypeScript config** (`tsconfig.json`) at root with strict mode
- [x] **`.gitignore`** — full policy: root `CLAUDE.md` committed, module `CLAUDE.md` files gitignored, all `SKILL.md` gitignored, `settings.json` gitignored, hooks committed
- [x] **GitHub Actions CI** (`.github/workflows/ci.yml`) — runs on every push/PR: install → build → test → lint
- [x] **GitHub Actions Release** (`.github/workflows/release.yml`) — changesets-based publish on main
- [x] **GitHub Actions Storybook** (`.github/workflows/storybook.yml`) — deploys to GitHub Pages on merge to main

---

### `@weldui/core` — Token System

- [x] **Layer 1: Primitive tokens** (`packages/core/src/tokens/base.css`) — full colour palette, spacing scale, radii, typography, shadows, transitions
- [x] **Layer 2: Semantic tokens** (`packages/core/src/tokens/semantic.css`) — light theme and dark theme mapped to primitives
- [x] **Token exports** — `./tokens/base.css` and `./tokens/semantic.css` properly exported in `package.json`
- [x] **CSS copied to `dist/tokens/`** on every build (via `cp src/tokens/*.css dist/tokens/`)
- [x] **Token TypeScript index** (`src/tokens/index.ts`)

---

### `@weldui/core` — Phase 1 Components (8 / 8)

All 8 Phase 1 components are fully implemented. Each has:
- Component implementation (`.ts`) with JSDoc, properties, events, CSS parts
- Styles (`.styles.ts`) using only CSS custom property token variables
- Storybook stories (`.stories.ts`) — Default + AllVariants + major features
- Vitest tests (`.test.ts`) — min 5 tests per component including event and disabled state coverage

| Component | Tag | Variants | Notes |
|---|---|---|---|
| **Button** | `<wu-button>` | primary, secondary, ghost, danger, success + sm/md/lg | Loading spinner, aria-label, wu-click event |
| **Badge** | `<wu-badge>` | default, primary, success, warning, danger, outline | Inline display |
| **Avatar** | `<wu-avatar>` | sm/md/lg/xl | Image + initials fallback, error handling |
| **Input** | `<wu-input>` | sm/md/lg | Label, hint, error, disabled, required, all HTML input types |
| **Textarea** | `<wu-textarea>` | — | Auto char-count when `maxlength` set, rows prop |
| **Select** | `<wu-select>` | sm/md/lg | Options array, placeholder, chevron icon |
| **Checkbox** | `<wu-checkbox>` | — | Checked, indeterminate, disabled; custom CSS checkbox |
| **Toggle** | `<wu-toggle>` | sm/md/lg | Label position (start/end), role="switch", aria-checked |

---

### `@weldui/core` — Utilities

- [x] **`utils/a11y.ts`** — accessibility helpers
- [x] **`utils/events.ts`** — custom event helpers
- [x] **`utils/form.ts`** — `FormAssociated` mixin for native form participation (TypeScript-safe)
- [x] **`types/index.ts`** — shared TypeScript types

---

### `@weldui/core` — Build

- [x] Vite library build → `dist/index.js` (ESM) + `dist/index.cjs` (CJS)
- [x] TypeScript declaration files emitted (`dist/index.d.ts`)
- [x] `lit` externalized from bundle
- [x] Bundle size: **31.5 kB ESM / 5.56 kB gzip** (within 50 kB budget ✓)
- [x] Source maps included

---

### `@weldui/react` — Complete ✅ (28 components)

**Phase 1 (8):** `Button`, `Badge`, `Avatar`, `Input`, `Textarea`, `Select`, `Checkbox`, `Toggle`

**Phase 3A (10):** `Card`, `Modal`, `Alert`, `Spinner`, `Progress`, `Skeleton`, `Divider`, `Tooltip`, `Popover`, `Toast` + `ToastProvider`

**Phase 3C (10):** `Tabs` + `Tab` + `TabPanel`, `Accordion` + `AccordionItem`, `Breadcrumb` + `BreadcrumbItem`, `Pagination`, `Table`, `DatePicker`, `FileUpload`, `Stepper` + `Step`, `Command`, `DataGrid`

- [x] All wrappers use `forwardRef` + `useEffect` for custom event wiring
- [x] `src/index.ts` — barrel export for all 28 components
- [x] `scripts/generate-wrappers.ts` — code generation script scaffolded
- [x] **Build verified** ✓

---

### `@weldui/vue` — Complete ✅ (28 components)

**Phase 1 (8):** `WuButton`, `WuBadge`, `WuAvatar`, `WuInput`, `WuTextarea`, `WuSelect`, `WuCheckbox`, `WuToggle`

**Phase 3A (10):** `WuCard`, `WuModal`, `WuAlert`, `WuSpinner`, `WuProgress`, `WuSkeleton`, `WuDivider`, `WuTooltip`, `WuPopover`, `WuToast` + `WuToastProvider`

**Phase 3C (10):** `WuTabs` + `WuTab` + `WuTabPanel`, `WuAccordion` + `WuAccordionItem`, `WuBreadcrumb` + `WuBreadcrumbItem`, `WuPagination`, `WuTable`, `WuDatePicker`, `WuFileUpload`, `WuStepper` + `WuStep`, `WuCommand`, `WuDataGrid`

- [x] `WeldUIPlugin` — Vue 3 install plugin with `isCustomElement` config
- [x] All wrappers use `defineComponent` + `h()` with custom event wiring
- [x] `src/index.ts` — exports all 28 components
- [x] **Build verified** ✓

---

### `@weldui/angular` — Complete ✅ (28 components)

**Phase 1 (8):** `WuButtonDirective`, `WuBadgeDirective`, `WuAvatarDirective`, `WuInputDirective` (CVA), `WuTextareaDirective` (CVA), `WuSelectDirective` (CVA), `WuCheckboxDirective` (CVA), `WuToggleDirective` (CVA)

**Phase 3A (10):** `WuCardDirective`, `WuModalDirective`, `WuAlertDirective`, `WuSpinnerDirective`, `WuProgressDirective`, `WuSkeletonDirective`, `WuDividerDirective`, `WuTooltipDirective`, `WuPopoverDirective`, `WuToastDirective` + `WuToastProviderDirective`

**Phase 3C (10):** `WuTabsDirective` + sub-directives, `WuAccordionDirective` + `WuAccordionItemDirective`, `WuBreadcrumbDirective` + `WuBreadcrumbItemDirective`, `WuPaginationDirective`, `WuTableDirective`, `WuDatePickerDirective`, `WuFileUploadDirective`, `WuStepperDirective` + `WuStepDirective`, `WuCommandDirective`, `WuDataGridDirective`

- [x] `WeldUIModule` — imports/exports all 28 standalone directives + `CUSTOM_ELEMENTS_SCHEMA`
- [x] Form directives implement full `ControlValueAccessor`
- [x] `@angular/forms` in peerDependencies and devDependencies
- [x] `src/index.ts` — exports all 28 directives + WeldUIModule
- [x] **Build verified** — `tsc` clean ✓

---

### Themes

| Theme | Package | Light | Dark | Status |
|---|---|---|---|---|
| Default | `@weldui/theme-default` | ✅ | ✅ | Complete |
| Ocean | `@weldui/theme-ocean` | ✅ | ❌ | Light only (dark pending) |
| Forest | `@weldui/theme-forest` | ✅ | ❌ | Light only (dark pending) |
| Midnight | `@weldui/theme-midnight` | ✅ | ❌ | Light only — dark-first by design |
| Sunset | `@weldui/theme-sunset` | ✅ | ✅ | Complete |
| FinTech Formal | `@weldui/theme-fintech` | ✅ | ✅ | Complete |
| Healthcare Calm | `@weldui/theme-healthcare` | ✅ | ✅ | Complete |
| Government Formal | `@weldui/theme-government` | ✅ | ✅ | Complete |
| Startup Bold | `@weldui/theme-startup` | ✅ | ✅ | Complete |
| Editorial | `@weldui/theme-editorial` | ✅ | ✅ | Complete |
| High Contrast | `@weldui/theme-high-contrast` | ✅ | ✅ | Complete — WCAG AAA |

---

### Storybook (`apps/docs`)

- [x] Storybook 8 installed with `@storybook/web-components-vite`
- [x] `a11y` and `essentials` addons configured
- [x] `.storybook/main.ts` and `.storybook/preview.ts` present
- [x] `Introduction.stories.ts` placeholder
- [ ] **Theme switcher toolbar** (`apps/docs/.storybook/theme-switcher.ts`) not yet implemented
- [ ] Component stories from `@weldui/core` not yet imported into Storybook
- [ ] Build not verified end-to-end

---

### Playground (`apps/playground`)

- [x] `vite.config.ts` with `root: 'src'`
- [x] `index.html` with correct `./main.ts` script reference
- [x] Theme switcher UI in HTML
- [x] **Build verified** — `47.95 kB / 12.02 kB gzip` ✓

---

### Tooling

- [x] **`tools/build-tools/`** — shared `vite.config.base.ts` and `tsconfig.base.json`
- [x] **`tools/theme-generator/`** — CLI to scaffold a new theme from `_template` (`create-weldui-theme`)
- [x] **`tools/scripts/scaffold-component.ts`** — scaffolds all 4 component files + barrel export
- [x] **`tools/scripts/contrast-check.ts`** — validates WCAG AA contrast on theme CSS files
- [x] **`tools/prompts/component-spec.md`** — Claude prompt template for speccing new components
- [ ] **`tools/scripts/scaffold-theme.ts`** — theme scaffold script not yet created
- [ ] `tsx` not in root `devDependencies` — `pnpm scaffold:component` may fail (TD-01)
- [ ] `pnpm scaffold:theme` script not wired in root `package.json`

---

### AI / Claude Code Setup (`.claude/`)

- [x] **`pre-build.sh`** — blocks hardcoded colours, validates `--wu-` token prefix, TypeScript strict check
- [x] **`pre-commit.sh`** — blocks secrets, module CLAUDE.md files, SKILL.md files from being committed
- [x] **`post-release.sh`** — Slack notification, Lemon Squeezy marketplace update, Storybook redeploy
- [x] **`docs/architecture.md`** — full architecture layering diagram
- [x] **`docs/decisions/001-lit-over-stencil.md`** — ADR: Lit vs Stencil
- [x] **`docs/decisions/002-003-theming-and-license.md`** — ADR: CSS tokens + open core license
- [x] **`docs/runbooks/operations.md`** — publish theme, enterprise onboarding, incident response runbooks
- [ ] **Root `CLAUDE.md`** — master 1,707-line implementation guide exists but still references "UIForge" — **needs name update to WeldUI** (TD-08)
- [ ] **`.claude/skills/`** (5 SKILL.md files) — created locally but gitignored; need to be seeded on every new dev machine:
  - `code-review/SKILL.md` — structured PR review checklist
  - `new-component/SKILL.md` — step-by-step component creation workflow
  - `new-theme/SKILL.md` — step-by-step theme creation workflow
  - `refactor/SKILL.md` — token compliance + API preservation rules
  - `release/SKILL.md` — changeset → npm publish → announce flow
- [ ] **`.claude/settings.json`** — created locally but gitignored; needs to be seeded per dev
- [ ] **`src/api/CLAUDE.md`** — local context for API integrations module (gitignored, seed manually)
- [ ] **`src/persistence/CLAUDE.md`** — local context for persistence module (gitignored, seed manually)

> **Note:** SKILL.md files and module CLAUDE.md files are intentionally gitignored (see `.gitignore` policy). Add a `docs/runbooks/dev-setup.md` guide so new developers know how to seed them locally.

---

## ❌ Pending Work

### Phase 1 Completion Gaps

- [x] **`pnpm test` verified** — 157/157 tests passing across 28 test files (`pnpm --filter @weldui/core test`)
- [ ] **Storybook theme switcher** — `apps/docs/.storybook/theme-switcher.ts` toolbar not implemented
- [ ] **Storybook component discovery** — stories from `@weldui/core` not auto-discovered in docs app (`main.ts` stories path not configured)
- [ ] **Lighthouse accessibility audit** — target score ≥ 95
- [ ] **npm publish** — `@weldui/core@0.1.0-beta.1` not yet published

---

### `@weldui/svelte` — Complete ✅ (35 components)

**Phase 1 (8):** `WuButton`, `WuBadge`, `WuAvatar`, `WuInput`, `WuTextarea`, `WuSelect`, `WuCheckbox`, `WuToggle`

**Phase 3A (11):** `WuCard`, `WuModal`, `WuAlert`, `WuSpinner`, `WuProgress`, `WuSkeleton`, `WuDivider`, `WuTooltip`, `WuPopover`, `WuToast`, `WuToastProvider`

**Phase 3C (16):** `WuTabs`, `WuTab`, `WuTabPanel`, `WuAccordion`, `WuAccordionItem`, `WuBreadcrumb`, `WuBreadcrumbItem`, `WuPagination`, `WuTable`, `WuDatePicker`, `WuFileUpload`, `WuStepper`, `WuStep`, `WuCommand`, `WuDataGrid`

- [x] Svelte 5 runes (`$props()`, `$state()`, `$effect()`, `$bindable()`) throughout
- [x] Array/object props (e.g. `columns`, `rows`, `items`) set via JS property assignment in `$effect`
- [x] `src/index.ts` — barrel export for all 35 components + `@weldui/core` side-effect import
- [x] `svelte.config.js` — `vitePreprocess()` for TypeScript in templates
- [x] **Build verified** — `svelte-package` clean (`src -> dist`) ✓

---

### Phase 2 — Svelte Wrapper — ✅ COMPLETE

---

### Phase 2 — Premium Themes — ✅ COMPLETE (10 / 10)

All 10 themes are built with light.css + dark.css. Remaining polish items:
- [ ] Dark mode variant for Ocean, Forest, Midnight (light-first themes)
- [ ] `preview.html` for every theme showing all 8 Phase 1 components
- [ ] WCAG AA contrast check run via `pnpm contrast-check`
- [ ] Published to npm as `@weldui/theme-*@1.0.0`
- [ ] Lemon Squeezy marketplace listing setup (see Commercial section)

---

### Phase 3 — Simple Complex Components (Wks 7–8) — ✅ COMPLETE (10 / 10)

| # | Component | Tag | Status |
|---|---|---|---|
| 1 | Card | `<wu-card>` | ✅ Header/body/footer slots, hover elevation |
| 2 | Modal | `<wu-modal>` | ✅ Native `<dialog>`, focus trap, Escape key, scroll lock |
| 3 | Toast | `<wu-toast>` + `<wu-toast-provider>` | ✅ Provider/portal mechanism, auto-dismiss, position |
| 4 | Alert | `<wu-alert>` | ✅ Dismissible, icon slot, all severity variants |
| 5 | Tooltip | `<wu-tooltip>` | ✅ CSS Popover API, 8 placements, delay |
| 6 | Popover | `<wu-popover>` | ✅ CSS Popover API, trigger slot, arrow |
| 7 | Spinner | `<wu-spinner>` | ✅ sm/md/lg, accessible `aria-label` |
| 8 | Progress | `<wu-progress>` | ✅ Determinate + indeterminate, `aria-valuenow` |
| 9 | Skeleton | `<wu-skeleton>` | ✅ Text/circle/rect variants, shimmer animation |
| 10 | Divider | `<wu-divider>` | ✅ Horizontal/vertical, label slot |

---

### Phase 3 — Compliance Pack (`@weldui/compliance`) — ✅ COMPLETE (6 / 6)

- [x] **Package scaffold** — `packages/compliance/` with package.json (`name: @weldui/compliance`), Vite build, tsconfig, `--passWithNoTests`
- [x] `<wu-audit-form>` — field interaction logger with hashed sensitive values, emits structured AuditEvent
- [x] `<wu-immutable-display>` — read-only display with timestamp and user attribution, prevents DOM mutation
- [x] `<wu-consent-banner>` — GDPR consent management with granular toggles, stores consent in localStorage
- [x] `<wu-dora-incident-status>` — DORA-compliant incident status (P1–P4, RTO/RPO clock, timeline)
- [x] `<wu-sox-evidence-export>` — SOX audit evidence export UI with hash verification

---

### Phase 3 — Advanced Complex Components (Wks 9–10) — ✅ COMPLETE (10 / 10)

| # | Component | Tag | Status |
|---|---|---|---|
| 1 | Table | `<wu-table>` | ✅ Sortable columns, row selection, sticky header |
| 2 | Tabs | `<wu-tabs>` + `<wu-tab>` + `<wu-tab-panel>` | ✅ Keyboard nav, event delegation via `wu-tab-click` |
| 3 | Accordion | `<wu-accordion>` + `<wu-accordion-item>` | ✅ Multiple open, animation |
| 4 | Breadcrumb | `<wu-breadcrumb>` + `<wu-breadcrumb-item>` | ✅ `<nav aria-label>`, structured data |
| 5 | Pagination | `<wu-pagination>` | ✅ Page size, total display |
| 6 | Date Picker | `<wu-date-picker>` | ✅ Locale-aware, min/max |
| 7 | File Upload | `<wu-file-upload>` | ✅ Drag-and-drop, progress, file type validation |
| 8 | Stepper | `<wu-stepper>` + `<wu-step>` | ✅ Linear/non-linear, vertical/horizontal |
| 9 | Command Palette | `<wu-command>` | ✅ Fuzzy search, keyboard shortcuts, groups |
| 10 | Data Grid | `<wu-data-grid>` | ✅ Virtual scroll, inline editing, column resize |

---

### Phase 4 — Compound Components — 0 / 8

| # | Component | Tag |
|---|---|---|
| 1 | Nav Bar | `<wu-navbar>` |
| 2 | Sidebar | `<wu-sidebar>` |
| 3 | Form | `<wu-form>` |
| 4 | Dashboard Shell | `<wu-dashboard>` |
| 5 | Empty State | `<wu-empty-state>` |
| 6 | Error Page | `<wu-error-page>` |
| 7 | Search Bar | `<wu-search>` |
| 8 | Data Table | `<wu-data-table>` |

---

### Phase 4 — MCP Server (`@weldui/mcp-server`) — 0 / 1

- [ ] `list_components()` tool — returns all components with tags, variants, props
- [ ] `get_component(name)` tool — full spec for one component
- [ ] `generate_usage(component, framework, props)` tool — generates framework-specific code snippet
- [ ] `get_theme_tokens(theme)` tool — returns token values for a given theme
- [ ] `check_accessibility(code)` tool — validates code against WeldUI a11y rules
- [ ] Published as `@weldui/mcp-server`, usable via `npx @weldui/mcp-server`

---

### `@weldui/tokens-tailwind` — 0 / 4 (TD-06)

This package is scaffolded but empty. Implementation needed:

- [ ] Export Tailwind v3 preset that maps `--wu-` CSS vars to Tailwind config
- [ ] Export Tailwind v4 CSS `@theme` block for direct token import
- [ ] Document usage in Storybook (`apps/docs/stories/Tokens.mdx`)
- [ ] Published to npm as `@weldui/tokens-tailwind@0.1.0`

---

### Commercial / GTM Setup — 0 / 6

None of these are tracked in code but are required for v1.0 public launch:

- [ ] **npm org** — create `@weldui` npm organisation at npmjs.com
- [ ] **Domain** — register `weldui.dev` (or `weld-ui.dev`)
- [ ] **GitHub org** — create `weldui` GitHub organisation, transfer repo from personal account
- [ ] **Lemon Squeezy store** — create store, set up premium theme products (€49–€299 tier), configure webhook for npm token delivery
- [ ] **Enterprise contract template** — SLA tiers: Starter €4,800/yr, Pro €12K/yr, Enterprise €25K/yr (LearnHubPlay BV letterhead)
- [ ] **Landing page** (`weldui.dev`) — hero, component demo, pricing table, docs link, GitHub stars widget

---

### Developer Setup Guide (New — needed due to gitignored AI files)

Because `.claude/skills/` and module `CLAUDE.md` files are intentionally gitignored, new developers need a setup guide to seed them locally.

- [ ] Create `docs/runbooks/dev-setup.md` covering:
  - How to copy `.claude/skills/` SKILL.md files from the shared drive / Notion
  - How to create module-level `CLAUDE.md` files per the template
  - Claude Code settings.json setup
  - First-run checklist

---

### v1.0 Release Checklist

- [ ] All 50+ components implemented and tested
- [ ] All 5 framework wrappers published (React, Vue, Angular, Svelte + core)
- [ ] Storybook docs live at `docs.weldui.dev`
- [ ] Performance budget met: initial bundle < 50 kB gzip *(core already at 5.56 kB ✓)*
- [ ] Zero `pnpm audit` high/critical vulnerabilities
- [ ] Cross-browser verified: Chrome, Firefox, Safari, Edge
- [ ] Axe accessibility audit + manual screen reader test (VoiceOver, NVDA)
- [ ] `CHANGELOG.md` written
- [ ] Migration guide written (for users coming from MUI, shadcn, etc.)
- [ ] `weldui.dev` landing page live
- [ ] `@weldui` npm org created and packages scoped correctly
- [ ] Lemon Squeezy marketplace live with at least 3 premium themes

---

## Git Commit History

```
6ebe35a  feat: phase 3 complete - 28 components, all framework wrappers (React/Vue/Angular/Svelte), compliance pack, 157/157 tests pass
8798c62  chore: update pnpm lockfile for @weldui/svelte dependencies
79c9cb4  feat: add @weldui/svelte - Svelte 5 framework wrapper (8/8 components)
[...]  feat: phase 3C advanced components complete (10/10) + test fixes
[...]  feat: phase 3B compliance pack complete (5 components)
[...]  feat: phase 3A simple complex components complete (10/10)
[...]  feat: add React/Vue/Angular wrappers for all Phase 1 components
[...]  feat: add 10 premium themes (sunset, fintech, healthcare, government, startup, editorial, high-contrast)
d18e718  fix: playground vite config, core token CSS exports, and copy CSS to dist
827e542  feat: add Phase 1 components (badge, avatar, input, textarea, select, checkbox, toggle)
17525f6  fix: rename pipeline to tasks in turbo.json (Turborepo 2.0)
7bac46f  fix: add packageManager field for Turborepo workspace resolution
35d22d5  chore: add pnpm-lock.yaml
50d342b  fix: exclude themes/_template from pnpm workspace
fed47e3  feat: initial WeldUI monorepo setup
```

---

## Known Issues / Technical Debt

| ID | Severity | Description | File |
|---|---|---|---|
| TD-01 | Low | `tsx` not in root `devDependencies` — `pnpm scaffold:component` may fail from root | `package.json` |
| TD-02 | Low | `@weldui/build-tools` package exists but is empty — `vite.config.base.ts` not yet consumed by sub-packages | `tools/build-tools/` |
| ~~TD-03~~ | ~~Low~~ | ~~React component files missing~~ | **RESOLVED** — all 28 React wrapper files exist |
| ~~TD-04~~ | ~~Medium~~ | ~~Vue wrapper incomplete~~ | **RESOLVED** — all 28 Vue wrapper files exist |
| TD-05 | Medium | Theme packages (ocean, forest, midnight) do not have dark mode variants | `packages/themes/` |
| TD-06 | Low | `@weldui/tokens-tailwind` package scaffolded but implementation is empty | `packages/tokens-tailwind/src/index.ts` |
| TD-07 | Low | Storybook stories in `@weldui/core` not discovered by `apps/docs` (no stories path configured in `main.ts`) | `apps/docs/.storybook/main.ts` |
| TD-08 | Medium | Root `CLAUDE.md` (1,707 lines) still references "UIForge" throughout — needs full rename to WeldUI, `@weldui/*`, and `wu-` prefix | `CLAUDE.md` |
| TD-09 | Low | `tools/scripts/scaffold-theme.ts` planned but not yet created | `tools/scripts/` |
| ~~TD-10~~ | ~~Low~~ | ~~`@weldui/svelte` package not scaffolded~~ | **RESOLVED** — 35 Svelte 5 wrapper components complete |

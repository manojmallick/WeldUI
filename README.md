# WeldUI

**One component library. Any framework. Any brand. Compliance-ready.**

[![CI](https://github.com/manojmallick/WeldUI/actions/workflows/ci.yml/badge.svg)](https://github.com/manojmallick/WeldUI/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@weldui/core)](https://www.npmjs.com/package/@weldui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

WeldUI is a framework-agnostic component library built on **Web Components (Lit)** with a 3-layer CSS token theming system. Write once — use in React, Vue, Angular, Svelte, or plain HTML. Swap the entire visual identity with a single CSS file.

---

## Features

- **28 production-ready components** — Phase 1 foundations + Phase 3 complex + compliance pack
- **Framework wrappers** — React, Vue 3, Angular, Svelte 5
- **3-layer token theming** — primitive → semantic → component; theme with one CSS file
- **11 themes** — default, ocean, forest, midnight, sunset, fintech, healthcare, government, startup, editorial, high-contrast (WCAG AAA)
- **Compliance pack** — `@weldui/compliance` with GDPR, DORA, SOX components
- **Zero JavaScript theming** — 100% CSS custom properties
- **157 passing unit tests** — Vitest + happy-dom
- **WCAG 2.1 AA** minimum on every component

---

## Packages

| Package | Description | Version |
|---|---|---|
| `@weldui/core` | Web Components (Lit) — the source of truth | `0.1.0` |
| `@weldui/react` | React wrappers (28 components) | `0.1.0` |
| `@weldui/vue` | Vue 3 wrappers (28 components) | `0.1.0` |
| `@weldui/angular` | Angular directives (28 components) | `0.1.0` |
| `@weldui/svelte` | Svelte 5 wrappers (35 components) | `0.1.0` |
| `@weldui/theme-default` | Default light + dark theme | `1.0.0` |
| `@weldui/compliance` | Compliance-grade form & audit components | `0.1.0` |

---

## Quick Start

### Plain HTML

```html
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/@weldui/core/dist/index.js';
</script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@weldui/core/dist/tokens/base.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@weldui/core/dist/tokens/semantic.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@weldui/theme-default/light.css" />

<wu-button variant="primary">Hello WeldUI</wu-button>
```

### React

```bash
pnpm add @weldui/react @weldui/core @weldui/theme-default
```

```tsx
import { Button, Input, Badge } from '@weldui/react';
import '@weldui/core/dist/tokens/base.css';
import '@weldui/core/dist/tokens/semantic.css';
import '@weldui/theme-default/light.css';

export function App() {
  return (
    <div data-theme="light">
      <Button variant="primary" onWuClick={() => alert('clicked!')}>
        Get Started
      </Button>
    </div>
  );
}
```

### Vue 3

```bash
pnpm add @weldui/vue @weldui/core @weldui/theme-default
```

```ts
// main.ts
import { createApp } from 'vue';
import { WeldUIPlugin } from '@weldui/vue';
import '@weldui/core/dist/tokens/base.css';
import '@weldui/core/dist/tokens/semantic.css';
import '@weldui/theme-default/light.css';
import App from './App.vue';

createApp(App).use(WeldUIPlugin).mount('#app');
```

```vue
<template>
  <wu-button variant="primary" @wu-click="handleClick">Save</wu-button>
</template>
```

### Angular

```bash
pnpm add @weldui/angular @weldui/core @weldui/theme-default
```

```ts
// app.module.ts
import { WeldUIModule } from '@weldui/angular';

@NgModule({ imports: [WeldUIModule] })
export class AppModule {}
```

```html
<!-- app.component.html -->
<wu-button variant="primary" (wu-click)="handleClick()">Save</wu-button>
```

### Svelte 5

```bash
pnpm add @weldui/svelte @weldui/core @weldui/theme-default
```

```svelte
<script>
  import { WuButton } from '@weldui/svelte';
</script>

<WuButton variant="primary" onWuClick={() => alert('clicked!')}>
  Save
</WuButton>
```

---

## Components

### Phase 1 — Foundation

| Component | Tag | Description |
|---|---|---|
| Button | `<wu-button>` | Primary, secondary, ghost, danger, success · sm/md/lg · loading state |
| Badge | `<wu-badge>` | Status labels — default, primary, success, warning, danger, outline |
| Avatar | `<wu-avatar>` | Image with initials fallback · sm/md/lg/xl |
| Input | `<wu-input>` | Text, email, password, number, search — label, hint, error |
| Textarea | `<wu-textarea>` | Auto character count, resizable |
| Select | `<wu-select>` | Options array prop, placeholder, sizes |
| Checkbox | `<wu-checkbox>` | Checked, indeterminate, disabled |
| Toggle | `<wu-toggle>` | Switch with label position and size variants |

### Phase 3A — Complex

| Component | Tag | Description |
|---|---|---|
| Card | `<wu-card>` | Header/body/footer slots, interactive hover elevation |
| Modal | `<wu-modal>` | Native `<dialog>`, focus trap, scroll lock, Escape-to-close |
| Alert | `<wu-alert>` | Info/success/warning/danger · dismissible · icon slot |
| Spinner | `<wu-spinner>` | Animated loading indicator · sm/md/lg |
| Progress | `<wu-progress>` | Determinate + indeterminate · aria-valuenow |
| Skeleton | `<wu-skeleton>` | Text / rect / circle placeholders · shimmer |
| Divider | `<wu-divider>` | Horizontal/vertical + optional label slot |
| Tooltip | `<wu-tooltip>` | 8 placements · configurable delay · keyboard accessible |
| Popover | `<wu-popover>` | CSS Popover API · trigger slot · arrow |
| Toast | `<wu-toast>` + `<wu-toast-provider>` | Auto-dismiss notifications · 5 variants |

### Phase 3C — Advanced

| Component | Tag | Description |
|---|---|---|
| Tabs | `<wu-tabs>` + `<wu-tab>` + `<wu-tab-panel>` | Full keyboard navigation · horizontal/vertical |
| Accordion | `<wu-accordion>` + `<wu-accordion-item>` | Single or multiple open panels |
| Breadcrumb | `<wu-breadcrumb>` + `<wu-breadcrumb-item>` | `<nav aria-label>` landmark |
| Pagination | `<wu-pagination>` | Page size selector · sibling count |
| Table | `<wu-table>` | Sortable columns · row selection · sticky header |
| Date Picker | `<wu-date-picker>` | Locale-aware · min/max · keyboard accessible |
| File Upload | `<wu-file-upload>` | Drag-and-drop · progress · file type validation |
| Stepper | `<wu-stepper>` + `<wu-step>` | Linear/non-linear · horizontal/vertical |
| Command | `<wu-command>` | Fuzzy search · keyboard nav · groups · shortcuts |
| Data Grid | `<wu-data-grid>` | Virtual scroll · inline editing · column resize |

---

## Theming

WeldUI uses a 3-layer CSS custom property model. Apply a theme by setting `data-theme` on any ancestor element:

```html
<body data-theme="ocean">
  <!-- all wu-* elements inside pick up the ocean palette -->
</body>
```

### Available themes

```bash
# Default
@weldui/theme-default   # light + dark

# Premium
@weldui/theme-ocean
@weldui/theme-forest
@weldui/theme-midnight
@weldui/theme-sunset
@weldui/theme-fintech
@weldui/theme-healthcare
@weldui/theme-government
@weldui/theme-startup
@weldui/theme-editorial
@weldui/theme-high-contrast   # WCAG AAA
```

### Create a custom theme

Override only the semantic token layer — no framework JavaScript required:

```css
/* my-brand.css */
[data-theme="my-brand"] {
  --wu-color-primary:        #e11d48;
  --wu-color-primary-hover:  #be123c;
  --wu-color-primary-subtle: #fff1f2;
  --wu-color-primary-fg:     #ffffff;

  --wu-color-text:           #1c1917;
  --wu-color-text-secondary: #57534e;
  --wu-color-background:     #fffbf9;
  --wu-color-surface:        #fef2f2;

  --wu-focus-ring: 0 0 0 3px #fda4af;
}
```

---

## Development

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9

### Setup

```bash
git clone https://github.com/manojmallick/WeldUI.git
cd WeldUI
pnpm install
pnpm build
```

### Commands

```bash
pnpm build          # Build all packages
pnpm test           # Run all tests (157 tests)
pnpm dev            # Watch mode for all packages
pnpm storybook      # Start Storybook docs locally

# Filtered commands
pnpm --filter @weldui/core build
pnpm --filter @weldui/core test
pnpm --filter docs storybook
```

### Project structure

```
weldui/
├── packages/
│   ├── core/           @weldui/core          — Web Components (Lit)
│   ├── react/          @weldui/react         — React wrappers
│   ├── vue/            @weldui/vue           — Vue 3 wrappers
│   ├── angular/        @weldui/angular       — Angular directives
│   ├── svelte/         @weldui/svelte        — Svelte 5 wrappers
│   ├── themes/         @weldui/theme-*       — CSS theme packages
│   ├── compliance/     @weldui/compliance    — Compliance components
│   └── tokens-tailwind/ @weldui/tokens-tailwind
├── apps/
│   ├── docs/           Storybook documentation
│   └── playground/     Live theme sandbox
└── tools/
    ├── build-tools/    Shared Vite + TS configs
    ├── scripts/        scaffold-component, contrast-check
    └── theme-generator/ npx create-weldui-theme CLI
```

### Adding a new component

```bash
pnpm scaffold:component <name>
# Example: pnpm scaffold:component date-range-picker
```

This creates all 4 files (`wu-*.ts`, `.styles.ts`, `.stories.ts`, `.test.ts`) and registers the component in `packages/core/src/index.ts`.

---

## Compliance Pack

`@weldui/compliance` provides enterprise compliance components as a separate paid package:

| Component | Use case |
|---|---|
| `<wu-audit-form>` | Automatic field interaction logging with hashed sensitive values |
| `<wu-immutable-display>` | Read-only data display with timestamp + user attribution |
| `<wu-consent-banner>` | GDPR cookie/consent management with granular toggles |
| `<wu-dora-incident-status>` | DORA incident status, P1–P4 severity, RTO/RPO countdown |
| `<wu-sox-evidence-export>` | SOX audit evidence export with digital signature and chain of custody |

---

## Contributing

1. Fork the repository and create a feature branch
2. Follow the [component implementation standard](CLAUDE.md#component-implementation-standard)
3. All components must pass WCAG 2.1 AA accessibility
4. Run `pnpm test` and `pnpm build` before opening a PR
5. Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages

See [CLAUDE.md](CLAUDE.md) for the full architecture guide and coding standards.

---

## Architecture

- **Web Components (Lit 3)** — single implementation, works everywhere
- **3-layer CSS tokens** — primitive → semantic → component (see [CLAUDE.md](CLAUDE.md))
- **Shadow DOM** — style encapsulation without CSS-in-JS runtime
- **Zero runtime deps in core** — only `lit` as a peer dependency
- Detailed architecture decisions in [`docs/decisions/`](docs/decisions/)

---

## License

Core library: **MIT** — free for personal and commercial use.  
Premium themes and compliance pack: **Commercial license** — see [LearnHubPlay BV](https://learnhubplay.com).

---

*Built by [Manoj Mallick](https://github.com/manojmallick) · [LearnHubPlay BV](https://learnhubplay.com) · KvK 97741825 (Netherlands)*

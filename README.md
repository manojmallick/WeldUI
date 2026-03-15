# WeldUI

**One component library. Any framework. Any brand. Compliance-ready.**

[![CI](https://github.com/manojmallick/WeldUI/actions/workflows/ci.yml/badge.svg)](https://github.com/manojmallick/WeldUI/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@weldui/core)](https://www.npmjs.com/package/@weldui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

WeldUI is a framework-agnostic component library built on **Web Components (Lit)** with a 3-layer CSS token theming system. Write once — use in React, Vue, Angular, Svelte, or plain HTML. Swap the entire visual identity with a single CSS file.

---

## Features

- **102 production-ready components** — 9 phases covering foundations, complex, compound, form primitives, data display, nav/overlays, charts, and rich media
- **Framework wrappers** — React, Vue 3, Angular, Svelte 5
- **3-layer token theming** — primitive → semantic → component; theme with one CSS file
- **12 themes** — default, ocean, forest, midnight, sunset, fintech, healthcare, government, startup, editorial, high-contrast (WCAG AAA)
- **Compliance pack** — `@weldui/compliance` with GDPR, DORA, SOX components
- **`@weldui/charts`** — 8 SVG chart components (bar, line, pie, gauge, sparkline, heatmap, area, scatter)
- **Zero JavaScript theming** — 100% CSS custom properties
- **WCAG 2.1 AA** minimum on every component

---

## Packages

| Package | Description | Version |
|---|---|---|
| `@weldui/core` | Web Components (Lit) — the source of truth | `0.1.0` |
| `@weldui/charts` | SVG chart components (bar, line, pie, gauge, sparkline, heatmap, area, scatter) | `0.1.0` |
| `@weldui/react` | React wrappers (94 components) | `0.1.0` |
| `@weldui/vue` | Vue 3 wrappers (94 components) | `0.1.0` |
| `@weldui/angular` | Angular directives (94 components) | `0.1.0` |
| `@weldui/svelte` | Svelte 5 wrappers (94 components) | `0.1.0` |
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

### Phase 4 — Compound Components

| Component | Tag | Description |
|---|---|---|
| Navbar | `<wu-navbar>` | Sticky/fixed top bar · mobile drawer · logo, nav, and actions slots |
| Sidebar | `<wu-sidebar>` + `<wu-sidebar-item>` | Collapsible navigation · active/disabled items · icon-only mode |
| Form | `<wu-form>` | Slot-based form wrapper · submit/invalid events · loading state |
| Dashboard | `<wu-dashboard>` | Shell layout combining navbar, sidebar, and main content area |
| Empty State | `<wu-empty-state>` | Placeholder for empty content · icon, title, description, actions slots |
| Error Page | `<wu-error-page>` | 400/401/403/404/408/500/502/503/504 error pages · branded variant |
| Search | `<wu-search>` | Debounced search input · clearable · loading indicator |
| Data Table | `<wu-data-table>` | Server-side pagination · sortable columns · row selection · inline search |

### Phase 5 — Form Primitives

| Component | Tag | Description |
|---|---|---|
| Radio | `<wu-radio>` + `<wu-radio-group>` | Mutually exclusive radio group · keyboard navigation |
| Slider | `<wu-slider>` | Range slider · min/max/step · aria-valuenow |
| Color Picker | `<wu-color-picker>` | Hex color input with swatch preview |
| Rating | `<wu-rating>` | Interactive star rating · read-only mode |
| Switch | `<wu-switch>` | Accessible on/off switch · `role="switch"` |
| Pin Input | `<wu-pin-input>` | OTP/verification code · 4–8 split digit cells · paste support |
| Combobox | `<wu-combobox>` | Autocomplete with filtered dropdown · async option loading |
| Tag Input | `<wu-tag-input>` | Free-form chip creation · duplicate prevention |
| Number Input | `<wu-number-input>` | Stepper buttons · min/max/step · keyboard increment |
| Multi Select | `<wu-multi-select>` | Multi-value select with chip display · searchable |

### Phase 6 — Data Display

| Component | Tag | Description |
|---|---|---|
| Stat | `<wu-stat>` | KPI card · value, label, trend indicator, icon slot |
| Timeline | `<wu-timeline>` + `<wu-timeline-item>` | Vertical/horizontal event timeline · icon variants |
| Tag / Chip | `<wu-tag>` | Dismissible label chip · status color variants |
| Kbd | `<wu-kbd>` | Keyboard key display — `⌘K`, `Ctrl+S` |
| Code | `<wu-code>` | Inline or block code display · language hint |
| Copy Button | `<wu-copy-button>` | Clipboard copy with success feedback |
| Carousel | `<wu-carousel>` | Touch/swipe content slider · auto-play · loop |
| List | `<wu-list>` + `<wu-list-item>` | Styled list with icons, descriptions, and actions |
| Description List | `<wu-description-list>` | Accessible key/value pairs · horizontal/vertical layout |
| Callout | `<wu-callout>` | Prominent info/warning/danger/success block |
| Meter | `<wu-meter>` | Semantic `<meter>` wrapper · colour-coded ranges |
| Collapse | `<wu-collapse>` | Animated expand/collapse content region |

### Phase 7 — Navigation & Overlays

| Component | Tag | Description |
|---|---|---|
| Drawer | `<wu-drawer>` | Slide-in panel (left/right/top/bottom) · focus trap |
| Context Menu | `<wu-context-menu>` | Right-click / long-press trigger · nested sub-menus |
| Dropdown | `<wu-dropdown>` | Button-triggered menu list · keyboard navigation |
| Tree | `<wu-tree>` + `<wu-tree-item>` | Hierarchical file/folder tree · expand/collapse |
| Bottom Nav | `<wu-bottom-nav>` | Mobile tab bar · active state · badge support |
| Mega Menu | `<wu-mega-menu>` | Full-width nav panel with multi-column slot layout |
| Notification Center | `<wu-notification-center>` | Bell icon + popover list · mark-read · mark-all-read |
| Scroll Area | `<wu-scroll-area>` | Custom scrollbar skin · horizontal/vertical |
| Split Pane | `<wu-split-pane>` | Drag-resizable two-panel layout · collapse to min size |
| Speed Dial | `<wu-speed-dial>` | Floating action button with expandable action list |

### Phase 8 — Charts (`@weldui/charts`)

> Install separately: `pnpm add @weldui/charts`

| Component | Tag | Description |
|---|---|---|
| Bar Chart | `<wu-bar-chart>` | Vertical bar chart · labelled axes · click events |
| Line Chart | `<wu-line-chart>` | Multi-point line · optional area fill |
| Pie / Donut | `<wu-pie-chart>` | Pie and donut variants · optional legend |
| Gauge | `<wu-gauge>` | Radial arc gauge for dashboard KPIs |
| Sparkline | `<wu-sparkline>` | Compact inline trend line — no axes |
| Heatmap | `<wu-heatmap>` | GitHub-style contribution grid |
| Area Chart | `<wu-area-chart>` | Filled area chart with gradient |
| Scatter Plot | `<wu-scatter-plot>` | X/Y dot plot · labeled points · click events |

### Phase 9 — Rich Media

| Component | Tag | Description |
|---|---|---|
| Lightbox | `<wu-lightbox>` | Full-screen image viewer · prev/next · caption · Escape close |
| Gallery | `<wu-gallery>` | Responsive CSS-grid photo grid · opens Lightbox on click |
| Virtual List | `<wu-virtual-list>` | Windowed renderer for 10 000+ rows — fixed-height |
| Sortable | `<wu-sortable>` | Drag-and-drop list reorder · HTML5 drag API · handle icon |
| Kanban | `<wu-kanban>` + `<wu-kanban-column>` | Drag-and-drop card board · card move events |
| Mention Input | `<wu-mention>` | `@user` trigger with autocomplete dropdown · keyboard nav |
| QR Code | `<wu-qr-code>` | Pure-SVG QR code generator · size and color props |
| Video Player | `<wu-video>` | HTML5 `<video>` wrapper with custom overlay controls |

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
pnpm test           # Run all tests (230 tests)
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
│   ├── core/           @weldui/core          — Web Components (Lit, 94 components)
│   ├── charts/         @weldui/charts        — SVG chart components (8 charts)
│   ├── react/          @weldui/react         — React wrappers (94 components)
│   ├── vue/            @weldui/vue           — Vue 3 wrappers (94 components)
│   ├── angular/        @weldui/angular       — Angular directives (94 components)
│   ├── svelte/         @weldui/svelte        — Svelte 5 wrappers (94 components)
│   ├── themes/         @weldui/theme-*       — CSS theme packages (12 themes)
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

### Using `@weldui/charts`

```bash
pnpm add @weldui/charts @weldui/core
```

```html
<script type="module" src="node_modules/@weldui/charts/dist/index.js"></script>

<wu-bar-chart
  .data=${[120, 200, 150, 80, 240]}
  .labels=${['Jan', 'Feb', 'Mar', 'Apr', 'May']}
  height="200"
  show-values
></wu-bar-chart>
```

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

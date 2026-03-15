# WeldUI Architecture

## System Overview

WeldUI is an open-core design system toolkit built on Web Components (Lit).
The architecture is designed for three primary goals:

1. **Framework agnosticism** — write once, run in any framework
2. **Theme flexibility** — swap any theme with zero code changes
3. **Enterprise readiness** — compliance, accessibility, and support built in

---

## Architectural Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    CONSUMER LAYER                           │
│  React App │ Angular App │ Vue App │ Svelte │ Vanilla HTML  │
└──────────────────────┬──────────────────────────────────────┘
                       │ uses
┌──────────────────────▼──────────────────────────────────────┐
│                 FRAMEWORK WRAPPER LAYER                      │
│  @weldui/react │ @weldui/angular │ @weldui/vue │ @weldui/svelte │
│  (auto-generated, thin, event-mapping only)                 │
└──────────────────────┬──────────────────────────────────────┘
                       │ wraps
┌──────────────────────▼──────────────────────────────────────┐
│                   CORE LAYER (@weldui/core)                │
│                                                             │
│  Web Components (Lit 3.x)                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │wu-button │ │wu-input  │ │wu-modal  │ │wu-table  │ ...  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  94 components across 9 phases                              │
│  All styles reference CSS Custom Properties only            │
└──────────────────────┬──────────────────────────────────────┘
                       │ reads
┌──────────────────────▼──────────────────────────────────────┐
│                   TOKEN LAYER                               │
│                                                             │
│  Layer 3: Component Tokens (per-component, in :host {})    │
│     ↓ reference                                            │
│  Layer 2: Semantic Tokens (meaning: primary, surface, text) │
│     ↓ reference                                            │
│  Layer 1: Primitive Tokens (raw: color palette, spacing)   │
└──────────────────────┬──────────────────────────────────────┘
                       │ overrides layer 2
┌──────────────────────▼──────────────────────────────────────┐
│                   THEME LAYER                               │
│                                                             │
│  @weldui/theme-default  │  @weldui/theme-ocean            │
│  @weldui/theme-forest   │  @weldui/theme-acme-corp        │
│                                                             │
│  Each theme is a CSS file. Applying a theme = adding a     │
│  data-theme attribute. Zero JavaScript required.           │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Technology Choices

### Web Components (Lit)
- Browser standard — no framework lock-in
- Shadow DOM provides style isolation
- Custom Elements v1 — supported in all modern browsers
- Lit adds ~5KB overhead only

### CSS Custom Properties for Theming
- Inherited by all descendants including Shadow DOM children
- Zero JavaScript runtime cost for theme switching
- Can be overridden at any scope (`:root`, `data-theme`, individual elements)
- Works in server-side rendering contexts

### pnpm + Turborepo Monorepo
- Single repository for all packages
- Shared build cache — only rebuild what changed
- Enforces package boundary rules
- Parallel task execution

### Changesets for Versioning
- Packages versioned independently
- Human-written CHANGELOG entries
- Automated npm publishing on merge

---

## Data Flow: Theme Application

```
User adds data-theme="ocean" to <body>
          │
          ▼
Browser applies [data-theme="ocean"] { --wu-color-primary: #0ea5e9; ... }
          │
          ▼
Shadow DOM inherits CSS custom properties from document scope
          │
          ▼
Component reads var(--wu-btn-bg) → resolved to var(--wu-color-primary)
          │
          ▼
Component renders with ocean-blue button
          │
Total time: < 1ms (single CSS cascade pass, zero JavaScript)
```

---

## Component Lifecycle

```
HTML parsed: <wu-button variant="primary">
          │
          ▼
Custom element registry finds WuButton class
          │
          ▼
constructor() → attachShadow({ mode: 'open' })
          │
          ▼
Lit schedules render (microtask)
          │
          ▼
render() → Lit template compiled to DOM
          │
          ▼
connectedCallback() fires
          │
          ▼
User interaction → event handler → CustomEvent dispatched
          │
          ▼
@property changes → Lit schedules re-render (batched)
          │
          ▼
Only changed parts of DOM updated (Lit's virtual DOM)
```

---

## Security Model

- **Shadow DOM** — external CSS cannot penetrate component internals
- **No innerHTML** — Lit template literals are XSS-safe by design
- **No eval()** — zero dynamic code execution
- **Compliance pack** — sensitive field values are hashed before logging
- **Theme files** — CSS only, no JavaScript execution surface

---

## Performance Architecture

- **Tree-shaking** — importing one component does not load the rest
- **CSS containment** — `contain: content` on heavy components
- **Lazy loading** — compound components (Modal, DatePicker) loaded on demand
- **Virtual scroll** — DataGrid uses intersection observer, not full DOM render
- **CSS animations** — all transitions use CSS, not JavaScript animation frames

---

## Compliance Architecture

The `@weldui/compliance` package adds:

```
Consumer form submission
          │
          ▼
<wu-audit-form> intercepts all field changes
          │
          ▼
Hashes sensitive values (SHA-256, client-side)
          │
          ▼
Emits structured AuditEvent to consumer's log handler
          │
          ▼
Consumer sends to their audit log / SIEM
          │
WeldUI never receives or stores audit data.
WeldUI only provides the UI structure.
```

---

## Monorepo Dependency Graph

```
@weldui/build-tools  (no internal deps)
         ▲
         │ devDependency
@weldui/core  ──────────────────────────────┐
         ▲                                   │
         │ peerDependency                    │ peerDependency
@weldui/react                    @weldui/compliance
@weldui/vue
@weldui/angular
@weldui/svelte
         ▲
         │ devDependency
      apps/docs
      apps/playground

@weldui/charts  (peer: @weldui/core)
         ▲
         │ peerDependency
      Consumer apps that need charts
```

---

## Component Library Phases

| Phase | Package | Count | Focus |
|---|---|---|---|
| 1 | `@weldui/core` | 8 | Foundation primitives: button, badge, avatar, input, textarea, select, checkbox, toggle |
| 3A | `@weldui/core` | 10 | Simple complex: card, modal, alert, spinner, progress, skeleton, divider, tooltip, popover, toast |
| 3C | `@weldui/core` | 10 | Advanced: tabs, accordion, breadcrumb, pagination, table, date-picker, file-upload, stepper, command, data-grid |
| 4 | `@weldui/core` | 8 | Compound: navbar, sidebar, form, dashboard, empty-state, error-page, search, data-table |
| 5 | `@weldui/core` | 10 | Form primitives: radio, slider, color-picker, rating, switch, pin-input, combobox, tag-input, number-input, multi-select |
| 6 | `@weldui/core` | 12 | Data display: stat, timeline, tag, kbd, code, copy-button, carousel, list, description-list, callout, meter, collapse |
| 7 | `@weldui/core` | 10 | Nav & overlays: drawer, context-menu, dropdown, tree, bottom-nav, mega-menu, notification-center, scroll-area, split-pane, speed-dial |
| 8 | `@weldui/charts` | 8 | SVG charts: bar, line, pie, gauge, sparkline, heatmap, area, scatter |
| 9 | `@weldui/core` | 8 | Rich media: lightbox, gallery, virtual-list, sortable, kanban, mention, qr-code, video |
| — | `@weldui/compliance` | 6 | Compliance: audit-form, immutable-display, consent-banner, dora-incident-status, sox-evidence-export |

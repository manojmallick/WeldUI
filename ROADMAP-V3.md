# WeldUI — v3.0 Future-State Roadmap

> **Document purpose:** Deep analysis of every existing component's enhancement potential + all missing components needed to build *any* platform on earth from a single design system.
> **Horizon:** 3 years (2026–2029). Considers AI-native UIs, spatial computing, edge-first architecture, real-time collaboration, and privacy-first web.
> **Last updated:** 2026-03-15
> **Owner:** Manoj Mallick / LearnHubPlay BV

---

## 1 · Design Philosophy for v3.0

### Core Principles (unchanged)
- Web Components (Lit 3.x) + CSS custom properties only
- Zero runtime dependencies in `@weldui/core`
- WCAG 2.2 AA minimum; AAA for High Contrast theme

### New v3.0 Principles
| Principle | What it means in practice |
|---|---|
| **AI-native by default** | Every input, textarea, and command component ships with optional AI-assist hooks |
| **Composable over monolithic** | Headless primitives + styled shells — consumers can swap either layer |
| **Offline-first state** | Status indicators, sync queues, and optimistic UI patterns baked in |
| **Real-time collaborative** | Presence, cursor, and conflict-resolution UI atoms |
| **Edge-renderable** | Every component works with SSR/SSG + streaming HTML (no hydration flash) |
| **Privacy-preserving** | No analytics beaconing from components; consent surface built-in |
| **Carbon-aware** | `prefers-reduced-data` and `prefers-reduced-motion` respected everywhere |

---

## 2 · Existing Component Deep Enhancement Plan

Each existing component is analysed for: **new variants → new props → new slots → new events → new CSS parts → new sub-components**.

---

### 2.1 `<wu-button>` — From simple to super-button

**Current:** 5 variants, 3 sizes, loading, disabled.

**Enhancements:**

#### New variants
| Variant | Visual | Use case |
|---|---|---|
| `link` | No background, looks like `<a>` | Inline actions in prose |
| `icon` | Square, equal padding, no label gap | Icon-only with tooltip |
| `outline` | Transparent + coloured border | Softer hierarchy |
| `contrast` | Inverted — white bg on dark section | Hero sections, banners |

#### New props
| Prop | Type | Description |
|---|---|---|
| `href` | string | Renders `<a>` instead of `<button>` when set |
| `target` | string | `_blank` etc. when `href` is set |
| `download` | string | download attribute when `href` set |
| `icon-only` | boolean | Square aspect ratio, aria-label required |
| `full-width` | boolean | `width: 100%` |
| `pressed` | boolean | `aria-pressed` toggle button state |
| `count` | number | Shows a badge count (notification-style) |
| `progress` | number 0–100 | Animated fill bar behind button text (upload, generation) |
| `haptic` | boolean | Trigger `navigator.vibrate(10)` on mobile tap |
| `confirm` | string | Shows a confirmation popover with this text before emitting `wu-click` |

#### New slots
- `loading-label` — custom text shown while `loading` is true (replaces spinner)

#### New sub-components
- `<wu-button-group>` — horizontal/vertical button cluster with shared radius and border collapse
- `<wu-split-button>` — primary action + dropdown for secondary actions

#### New CSS parts
- `progress-track` — background fill bar when `progress` prop is set
- `badge` — count badge overlay

---

### 2.2 `<wu-badge>` — Richer status and notification surface

**Enhancements:**

#### New variants + modes
| Mode | Prop | Description |
|---|---|---|
| Dot | `dot` boolean | 8px dot only, no text |
| Counter | `count` number | Auto-caps at `max-count` (default 99) |
| Pulsing | `pulse` boolean | CSS animation to draw attention |
| Positioned | `position="top-right"` | Overlays on a parent — needs `slot="badge"` in parent |
| Removable | `dismissible` boolean | Close × button |

#### New props
| Prop | Description |
|---|---|
| `max-count` | Cap number display (e.g. "99+") |
| `show-zero` | Whether to show when count = 0 |
| `animate-in` | Scale-in entrance animation |
| `position` | `top-right \| top-left \| bottom-right \| bottom-left` for overlay mode |

#### New sub-components
- `<wu-status-dot>` — coloured online/offline/busy/away/dnd indicator (used in Avatar, Chat)

---

### 2.3 `<wu-avatar>` — Identity system

**Enhancements:**

#### New props
| Prop | Description |
|---|---|
| `status` | `online \| offline \| busy \| away \| dnd` — shows status dot |
| `status-position` | `bottom-right \| top-right` etc. |
| `shape` | `circle \| square \| rounded` |
| `border` | boolean — adds ring border (useful on dark backgrounds) |
| `loading` | boolean — shows skeleton while src loads |
| `verified` | boolean — adds verification checkmark overlay |

#### New sub-components
- `<wu-avatar-group>` — *(already in Phase 6)* — enhance with `max`, `size`, `direction`
- `<wu-avatar-upload>` — avatar + file picker overlay (click to replace)

---

### 2.4 `<wu-input>` — The universal data entry surface

**Current:** text, email, password, number, search, tel, url types.

**Enhancements:**

#### New input types (all native, just styled)
| Type prop | Special behaviour |
|---|---|
| `color` | Custom colour swatch + hex panel |
| `date`, `time`, `datetime-local` | Native with token-styled calendar |
| `file` | Drag-zone variant |
| `range` | Delegates to `<wu-slider>` |
| `currency` | Right-aligns, masks decimal, shows currency symbol |

#### New props
| Prop | Description |
|---|---|
| `prefix` | Short string shown inside left of input (e.g. "$", "+1") |
| `suffix` | Short string shown inside right (e.g. "USD", "kg") |
| `prefix-icon` | Icon slot mirror as property for simple cases |
| `clearable` | Shows × when value is non-empty |
| `copy` | Shows copy-to-clipboard button |
| `reveal` | For password: show/hide toggle |
| `mask` | Input mask pattern (phone, credit card, IBAN) |
| `pattern-hint` | Description of valid pattern shown on focus |
| `counter` | Show character count (auto-enables when maxlength set) |
| `autocomplete-items` | Inline datalist suggestions array |
| `strength` | boolean — for password: shows strength meter below |
| `ai-assist` | boolean — shows AI magic wand button that fills/improves value |
| `loading` | boolean — right-side spinner (async validation) |
| `debounce` | number — ms for `wu-change` event delay |
| `format` | `number \| currency \| percent \| date` — auto-formats display |
| `spellcheck-language` | Sets `lang` for better browser spellcheck |

#### New slots
- `prefix-icon` — SVG icon left-inside input
- `suffix-icon` — SVG icon right-inside input
- `prefix-addon` — full-height block left of input (like Bootstrap input-group)
- `suffix-addon` — full-height block right of input

#### New sub-components
- `<wu-input-group>` — connects multiple inputs/selects/buttons in a single visual row

---

### 2.5 `<wu-textarea>` — Writing surface

**Enhancements:**

| Prop | Description |
|---|---|
| `auto-resize` | Grows with content, min-rows / max-rows caps |
| `mode` | `plain \| markdown \| rich` |
| `preview` | boolean — toggle markdown preview pane |
| `ai-assist` | boolean — "Improve with AI" button |
| `ai-prompt` | string — custom prompt for AI assist |
| `spell-check` | enhanced spell-check language |
| `paste-as-plain` | Strips formatting on paste |
| `dragover-text` | Accepts dragged text/files |
| `character-count` | enhanced: words count mode option |

---

### 2.6 `<wu-select>` — Selection, evolved

**Enhancements:**

| Prop | Description |
|---|---|
| `searchable` | Filter options by typing |
| `creatable` | Allow creating new options not in list |
| `virtual-scroll` | Window large option lists (1 000+) |
| `groups` | Render option groups with `group` key on options |
| `option-avatar` | Show `imageUrl` on each option |
| `option-description` | Show `description` below option label |
| `clearable` | Shows × to deselect |
| `loading` | Async options loading state |
| `load-options` | Function prop: `(query) => Promise<Option[]>` |
| `empty-label` | Text when no options match filter |
| `max-height` | Dropdown list max height |

#### New sub-components
- `<wu-option>` — slotted option element (alternative to array prop)
- `<wu-option-group>` — option group with label

---

### 2.7 `<wu-checkbox>` — Selection patterns

**Enhancements:**

| Prop/Feature | Description |
|---|---|
| `checkbox-card` | boolean — full-card clickable surface with title/description |
| Card slots | `title`, `description`, `icon` when in card mode |
| `switch-style` | boolean — renders as toggle switch (bridges to wu-toggle) |
| `group` component | `<wu-checkbox-group>` — manages array of values |
| `orientation` on group | horizontal / vertical |
| `required` on group | require at least 1 checked |
| Animated checkmark | SVG path animation on check |

---

### 2.8 `<wu-toggle>` / `<wu-switch>` — Rich toggle surface

**Enhancements:**

| Prop | Description |
|---|---|
| `on-icon` | SVG icon shown inside thumb when checked |
| `off-icon` | SVG icon shown inside thumb when unchecked |
| `on-label-text` | Text inside track when on (e.g. "ON") |
| `off-label-text` | Text inside track when off (e.g. "OFF") |
| `confirm` | string — show confirmation popover before toggling |
| `loading` | boolean — async toggle (shows spinner in thumb) |
| `description` | Sub-label for settings UIs |

#### New sub-component
- `<wu-toggle-group>` — exclusive (radio-like) or multi toggle buttons (like segmented control)

---

### 2.9 `<wu-card>` — The universal container

**Enhancements:**

| Prop | Description |
|---|---|
| `orientation` | `vertical \| horizontal` — image-card layout |
| `aspect-ratio` | `16/9 \| 4/3 \| 1/1` for media slot |
| `loading` | boolean — overlay skeleton state |
| `selected` | boolean — selected/checked state (checkbox card) |
| `collapsible` | boolean — accordion-like collapse |
| `flip` | boolean — 3D flip card (front/back slots) |
| `drag-handle` | boolean — show drag handle for sortable lists |
| `ribbon` | string — diagonal corner ribbon text ("NEW", "SALE") |

#### New slots
- `media` — image/video area (top or left depending on orientation)
- `ribbon` — corner ribbon content
- `back` — card back for flip variant
- `drag-handle` — custom drag handle content

#### New sub-components
- `<wu-card-grid>` — responsive CSS grid of cards with gap/cols props
- `<wu-pricing-card>` — specialised: tier name, price, feature list, CTA button
- `<wu-stats-card>` — KPI number + label + sparkline + trend

---

### 2.10 `<wu-modal>` — Overlay system

**Enhancements:**

| Prop | Description |
|---|---|
| `size` | `sm \| md \| lg \| xl \| full` — controls max-width |
| `position` | `center \| top \| bottom` — vertical alignment |
| `sheet` | boolean — bottom/top sheet (mobile drawer style) |
| `drawer` | boolean — side panel mode (delegates to `<wu-drawer>`) |
| `confirm` | object — quick confirm dialog mode `{ title, description, confirmLabel, cancelLabel }` |
| `step` | number — multi-step wizard mode |
| `total-steps` | number — for wizard progress bar |
| `loading` | boolean — full modal loading overlay |
| `blur-backdrop` | boolean — CSS `backdrop-filter: blur(4px)` |
| `animate` | `scale \| slide-up \| slide-down \| fade` |

#### New slots
- `breadcrumb` — step indicator for wizard modals
- `sidebar` — two-column modal (form left, preview right)

#### New sub-components
- `<wu-confirm-dialog>` — shorthand for common confirm pattern
- `<wu-alert-dialog>` — accessible `role="alertdialog"` blocking modal

---

### 2.11 `<wu-toast>` — Notification system

**Enhancements:**

| Prop | Description |
|---|---|
| `progress-bar` | boolean — visual countdown bar |
| `closable` | boolean (default true) — show/hide close button |
| `icon` slot | custom icon replacing variant icon |
| `actions` slot | up to 2 action buttons |
| Provider: `stack-limit` | max visible toasts before queuing |
| Provider: `gap` | spacing between toasts |
| Provider: `pause-on-hover` | pause duration countdown on hover |

#### Static API enhancement on `<wu-toast-provider>`
```ts
provider.toast({ type: 'promise', promise, loading, success, error });
// → automatically transitions through 3 states
```

#### New sub-components
- `<wu-snackbar>` — Material-style bottom snackbar (single, no stack)

---

### 2.12 `<wu-alert>` — Status messaging

**Enhancements:**

| Prop | Description |
|---|---|
| `expandable` | boolean — "show more" to reveal full detail |
| `actions` slot | inline action buttons |
| `collapsible` | boolean — dismisses into a compact dot |
| `link` | `{ text, href }` — adds link at bottom of alert |
| Compound `<wu-alert-group>` | stacks/collapses multiple alerts |

---

### 2.13 `<wu-progress>` — Progress patterns

**Enhancements:**

| Prop | Description |
|---|---|
| `shape` | `linear \| circular \| radial \| segments` |
| `segments` | number — split bar into N segments |
| `segment-labels` | string[] — label each segment |
| `color-stops` | `{ value: number, color: string }[]` — gradient fill |
| `stripe` | boolean — animated stripe pattern |
| `pulse` | boolean — pulse when indeterminate |
| Circular props | `stroke-width`, `track-color`, `rotate` |
| `steps` | Step progress mode (1 of 5, etc.) |
| `label-position` | `inside \| outside \| none` |

---

### 2.14 `<wu-tooltip>` — Rich tooltips

**Enhancements:**

| Prop | Description |
|---|---|
| `rich` | boolean — enables HTML/slot content instead of plain text |
| `arrow` | boolean — show arrow pointer (default true) |
| `offset` | number — distance from trigger |
| `flip` | boolean — auto-flip when hitting viewport edge |
| `max-width` | string |
| `trigger` | `hover \| focus \| click \| manual` |
| `show-delay` | ms |
| `hide-delay` | ms |
| Slot | Default slot usable in rich mode (images, links, icons) |

#### New sub-components
- `<wu-definition>` — `<abbr>`-style tooltip for terms and definitions

---

### 2.15 `<wu-table>` — Data grid foundation

**Enhancements:**

| Prop | Description |
|---|---|
| `column-resize` | boolean — drag column widths |
| `column-reorder` | boolean — drag columns left/right |
| `frozen-columns` | number — first N columns stay sticky |
| `frozen-right` | number — last N columns sticky right |
| `row-groups` | boolean — expand/collapse row groups |
| `group-by` | string — column key to group by |
| `tree-data` | boolean — rows have `children` arrays |
| `inline-edit` | boolean — double-click cell to edit |
| `cell-renderers` | Map<columnKey, fn> — custom cell render functions |
| `row-height` | `compact \| default \| relaxed \| number` |
| `density` | `compact \| default \| comfortable` |
| `export` | `csv \| xlsx \| json` — built-in export button |
| `print` | boolean — print-optimised view |
| `column-visibility` | boolean — column picker toggle |
| `global-filter` | boolean — table-level search |
| `filters` | Per-column filter objects |
| `aggregation` | Row sum/avg/count in footer |
| `row-detail` | Expandable sub-row with slot |
| `sticky-header` | boolean (already exists, make it `true` by default) |
| `loading` | boolean — overlay skeleton rows |

---

### 2.16 `<wu-tabs>` — Navigation patterns

**Enhancements:**

| Prop | Description |
|---|---|
| `variant` | `default \| pills \| underline \| lifted \| boxed` |
| `closeable` | boolean — each tab has ✕ |
| `addable` | boolean — "+" button to add tab |
| `scrollable` | boolean — horizontal scroll with overflow arrows |
| `overflow-menu` | boolean — hidden tabs collapse into "…" menu |
| `draggable` | boolean — drag to reorder tabs |
| `badge` | per-tab badge count via `<wu-tab badge="3">` |
| `icon` slot on `<wu-tab>` | icon before label |
| `lazy` | boolean — panel content rendered only when first activated |
| `persist` | `session \| local` — remember active tab |
| Vertical full tabs | `orientation="vertical"` with content right |
| `size` | `sm \| md \| lg` |

---

### 2.17 `<wu-accordion>` — Disclosure patterns

**Enhancements:**

| Prop | Description |
|---|---|
| `variant` | `default \| flush \| separated \| ghost` |
| `icon-position` | `left \| right` — chevron position |
| `icon` slot on item | custom expand/collapse icon |
| `flush` | boolean — no outer border |
| `animate-height` | `smooth \| instant` |
| `nested` | boolean — support nested accordions |
| `lazy` | boolean — only render content when first opened |
| Item `badge` prop | show badge on header |
| Item `description` prop | secondary header text |

---

### 2.18 `<wu-navbar>` — App chrome

**Enhancements:**

| Prop | Description |
|---|---|
| `variant` | `default \| transparent \| glass \| solid \| bordered` |
| `shrink-on-scroll` | boolean — reduces height when user scrolls |
| `hide-on-scroll` | boolean — hides on scroll down, reappears on scroll up |
| `blend-with-hero` | boolean — transparent until hero ends |
| `announcement-bar` | boolean — slot for dismissible announcement above navbar |
| `search-slot` | Inline search bar slot |
| `theme-toggle` | boolean — adds light/dark switch to actions |
| `breadcrumb-slot` | Secondary bar below main navbar |
| Mega-menu integration | `<wu-mega-menu>` in default slot |

---

### 2.19 `<wu-sidebar>` — Navigation architecture

**Enhancements:**

| Prop | Description |
|---|---|
| `variant` | `default \| rail \| floating \| overlay` |
| `rail` | boolean — icon-only compact mode (expands to full on hover) |
| `breakpoint` | number — auto-collapse below this px width |
| `resizable` | boolean — user can drag to set width |
| `persist` | `session \| local` — remember collapsed state |
| `item-groups` | Section labels between nav items |
| Sub-items | `<wu-sidebar-item>` with nested `<wu-sidebar-item>` children |
| `badge` on item | per-item notification count |
| `active-indicator` | `bar \| pill \| dot \| background` |
| `mini-variant` | Shows tooltips on hover in collapsed mode |

---

### 2.20 `<wu-form>` — Smart form orchestration

**Enhancements:**

| Prop | Description |
|---|---|
| `schema` | JSON Schema / Zod object — auto-generates fields |
| `steps` | boolean — multi-step wizard wrapper |
| `autosave` | number — debounce ms for autosaving to localStorage |
| `dirty-check` | boolean — warns on navigation away with unsaved changes |
| `conditional-fields` | `{ field, condition, show: string[] }[]` |
| `submit-on-enter` | boolean |
| `error-placement` | `inline \| summary \| both` |
| `reset-on-success` | boolean |
| `optimistic` | boolean — UI success before server response |

#### New sub-components
- `<wu-field>` — label + control + hint + error wrapper (form row layout)
- `<wu-field-group>` — horizontal multi-field row
- `<wu-form-step>` — step panel for wizard forms

---

### 2.21 `<wu-data-table>` — Enterprise data surface

**Enhancements:**

| Feature | Description |
|---|---|
| Column filters | Per-column filter dropdowns |
| Row grouping | `group-by` prop collapses rows |
| Tree data | Nested rows with expand/collapse |
| Frozen columns | Horizontal scroll with sticky cols |
| Column visibility | Show/hide picker |
| Export | CSV / XLSX / JSON |
| Bulk actions | Toolbar with selected-rows action bar |
| Inline editing | Click cell to edit |
| Row detail expand | Click row to reveal detail panel |
| Column pinning | Pin to left or right |
| Virtualization | Window >10 k rows |
| Aggregation | Sum/avg/count footer rows |
| Cell click events | `wu-cell-click` with column + row data |
| Right-click context | `<wu-context-menu>` on right-click |

---

### 2.22 `<wu-search>` — Universal discovery

**Enhancements:**

| Feature | Description |
|---|---|
| `ai-powered` | boolean — shows AI-generated answer above results |
| `filters` | Array of quick filter chips above results |
| `facets` | Sidebar facet counts |
| `recent-searches` | Stored in localStorage, dismissible |
| `keyboard-shortcut` | string — e.g. `"⌘K"` shown as trigger hint |
| `categories` | Group results by category with icons |
| `empty-state` slot | Custom no-results UI |
| `footer` slot | "Advanced search" link area |
| Live preview | Right panel showing selected result preview |
| `load-results` | Async function: `(query) => Promise<SearchResult[]>` |

---

### 2.23 `<wu-slider>` — Input range

**Enhancements:**

| Prop | Description |
|---|---|
| `range` | boolean — two thumbs (min + max values) |
| `vertical` | boolean |
| `marks` | `{ value, label }[]` — labelled tick marks |
| `tooltip` | boolean — floating value tooltip above thumb |
| `color-track` | CSS gradient string behind fill |
| `snap` | boolean — snap to marks |
| `reverse` | boolean — inverts direction |
| `format-value` | Function `(v) => string` for tooltip/label |

---

### 2.24 `<wu-pagination>` — Navigation patterns

**Enhancements:**

| Prop | Description |
|---|---|
| `variant` | `default \| simple \| compact \| dots` |
| `show-page-size` | boolean — page size selector |
| `page-size-options` | number[] = [10, 25, 50, 100] |
| `show-total` | boolean — "Showing 1–10 of 234" |
| `show-first-last` | boolean — first/last page jump buttons |
| `show-jump` | boolean — direct page number input |
| Dots variant | Carousel-style dot indicators |

---

### 2.25 `<wu-breadcrumb>` — Context trail

**Enhancements:**

| Prop | Description |
|---|---|
| `max-items` | number — collapse middle items with "…" |
| `items` | `{ label, href, icon? }[]` — prop API alternative to slots |
| `separator` | `slash \| chevron \| arrow \| dot \| custom` |
| `structured-data` | boolean — auto-injects `<script type="application/ld+json">` |
| `back-link` | boolean — shows ← on mobile instead of full trail |

---

### 2.26 `<wu-skeleton>` — Loading states

**Enhancements:**

| Feature | Description |
|---|---|
| `animation` | `shimmer \| pulse \| wave \| none` |
| Composite skeletons | `<wu-skeleton-card>`, `<wu-skeleton-list>`, `<wu-skeleton-table>`, `<wu-skeleton-form>` |
| `repeat` | number — renders N copies of default slot pattern |
| `speed` | `slow \| normal \| fast` |
| Dark mode auto | Adapts shimmer to dark theme tokens |

---

### 2.27 `<wu-date-picker>` — Temporal input

**Enhancements:**

| Prop | Description |
|---|---|
| `mode` | `single \| range \| multiple` |
| `inline` | boolean — always-visible calendar (no popover) |
| `view` | `month \| week \| year` — starting view |
| `locale` | string — IETF locale for day names, month names |
| `first-day-of-week` | 0–6 (Sunday–Saturday) |
| `disabled-dates` | Date[] or function |
| `highlighted-dates` | `{ date, label, color }[]` |
| `show-week-numbers` | boolean |
| `time-picker` | boolean — include time selection |
| `presets` | `{ label, value }[]` — "Today", "This week", etc. |
| `min-range` | number — minimum days in range selection |
| `max-range` | number |

---

### 2.28 `<wu-file-upload>` — Rich file input

**Enhancements:**

| Prop | Description |
|---|---|
| `multiple` | boolean — allow multi-file |
| `max-files` | number |
| `max-size` | number — bytes |
| `accept` | string — MIME types |
| `preview` | boolean — image thumbnail previews |
| `chunk-upload` | boolean — resumable chunked upload |
| `progress-per-file` | individual file progress bars |
| `camera` | boolean — add "Take photo" option on mobile |
| `s3-direct` | object — S3 presigned URL config for client-side upload |
| `retry-on-fail` | boolean |
| `image-compress` | boolean — client-side compression before upload |

---

### 2.29 `<wu-command>` — Command palette

**Enhancements:**

| Prop | Description |
|---|---|
| `keyboard-shortcut` | string — global hotkey e.g. `"meta+k"` |
| `placeholder` | Custom search placeholder |
| `groups` | Named command groups |
| `recent` | boolean — show recent commands at top |
| `ai-mode` | boolean — free-text AI query fallback |
| `ai-handler` | Function — `(query) => Promise<CommandItem[]>` |
| `shortcut-hints` | boolean — shows keyboard shortcut next to each item |
| `breadcrumb` | Current navigation context shown in input |

---

### 2.30 `<wu-data-grid>` — Spreadsheet-grade grid

**Enhancements:**

| Feature | Description |
|---|---|
| Cell types | text, number, date, boolean, select, formula, rich-text, image |
| Formula support | `=SUM(A1:A10)` style evaluation |
| Range selection | Click-drag to select cell range |
| Copy/paste | Clipboard paste from Excel/Sheets |
| Column formulas | Auto-compute column values |
| Frozen rows | Sticky header rows |
| Column/row resize | Drag to resize |
| Merge cells | Span cells horizontally/vertically |
| Undo/redo | Full edit history stack |
| Validation | Per-cell validation rules |
| Comments | Cell comments (hover to view) |
| Import/Export | CSV, XLSX, JSON |
| Collaborative | Multi-user cursor indicators |

---

## 3 · New Components — Complete Missing Catalogue

Organised by domain. **Target: every web platform type is buildable from this list alone.**

---

### 3.1 Layout & Structure (10 components)

| Tag | Description |
|---|---|
| `<wu-container>` | Max-width content wrapper with responsive padding |
| `<wu-stack>` | Vertical/horizontal flexbox layout primitive |
| `<wu-cluster>` | Wrapping flex group (tags, chips, filters) |
| `<wu-grid>` | CSS grid wrapper with `cols`, `gap`, `min-item-width` props |
| `<wu-masonry>` | CSS masonry grid (uses `grid-template-rows: masonry`) |
| `<wu-aspect-ratio>` | Maintains W:H ratio for media containers |
| `<wu-sticky>` | `position: sticky` wrapper with offset and threshold events |
| `<wu-spacer>` | Flexible gap filler in flex layouts |
| `<wu-visually-hidden>` | Screen-reader-only text wrapper |
| `<wu-print-area>` | Wraps content targeted for `@media print` |

---

### 3.2 Typography & Content (8 components)

| Tag | Description |
|---|---|
| `<wu-prose>` | Long-form readable text with typographic styles |
| `<wu-heading>` | Semantic `h1–h6` with consistent token-driven scale |
| `<wu-text>` | Inline text with variant/size/weight/color props |
| `<wu-label>` | `<label>`-equivalent for describing other elements |
| `<wu-link>` | Styled `<a>` with external icon, download support |
| `<wu-mark>` | Highlighted/marked text |
| `<wu-blockquote>` | Pull quote with source attribution |
| `<wu-abbr>` | Abbreviation with tooltip definition |

---

### 3.3 Feedback & Validation (8 components)

| Tag | Description |
|---|---|
| `<wu-banner>` | Full-width top-of-page announcement (cookie banner, promo) |
| `<wu-inline-message>` | Field-level error/hint inline with form controls |
| `<wu-validation-summary>` | Grouped form error list at top of form |
| `<wu-progress-steps>` | Multi-step process indicator (wizard breadcrumb) |
| `<wu-feedback>` | 👍/👎 or ⭐ feedback widget (survey micro-interaction) |
| `<wu-survey>` | NPS score 0–10 with comment box |
| `<wu-support-bubble>` | Floating help/chat launcher button |
| `<wu-onboarding-checklist>` | Getting-started checklist with progress tracking |

---

### 3.4 Authentication & Security (8 components)

| Tag | Description |
|---|---|
| `<wu-login-form>` | Email + password form with show/hide, forgot password |
| `<wu-signup-form>` | Email + password + confirm + T&C checkbox |
| `<wu-otp-verify>` | 6-digit OTP input with auto-advance and resend timer |
| `<wu-password-strength>` | Strength meter + requirements checklist |
| `<wu-social-login>` | OAuth provider buttons (Google, GitHub, Apple, Microsoft) |
| `<wu-api-key-display>` | Masked key with show/copy/regenerate actions |
| `<wu-session-timeout>` | Countdown warning before session expires |
| `<wu-captcha>` | CAPTCHA widget wrapper (Turnstile/hCaptcha) |

---

### 3.5 E-Commerce (10 components)

| Tag | Description |
|---|---|
| `<wu-product-card>` | Image, title, price, rating, "Add to cart" button |
| `<wu-product-gallery>` | Main image + thumbnails with zoom |
| `<wu-price>` | Formatted price: currency, original + sale, per-unit |
| `<wu-quantity-picker>` | +/- stepper with min/max/step |
| `<wu-cart-icon>` | Bag/cart icon with item count badge |
| `<wu-cart-line-item>` | Product row in cart (image, name, qty, price, remove) |
| `<wu-checkout-steps>` | 3-step checkout progress bar |
| `<wu-payment-form>` | Credit card form (delegates to Stripe/Adyen elements) |
| `<wu-order-status>` | Order lifecycle tracker (placed → shipped → delivered) |
| `<wu-wishlist-button>` | ♡ heart toggle for wishlists |

---

### 3.6 SaaS / Application Shell (10 components)

| Tag | Description |
|---|---|
| `<wu-app-shell>` | Top-level layout: navbar + sidebar + main + footer |
| `<wu-app-header>` | Page-level header: title, breadcrumb, actions |
| `<wu-command-bar>` | Office 365-style ribbon command bar |
| `<wu-activity-feed>` | Chronological events list (social/audit trail) |
| `<wu-mention-input>` | `@user` / `#tag` input with resolver dropdown |
| `<wu-reaction-bar>` | Emoji reaction row (Slack-style) |
| `<wu-rich-text-viewer>` | Read-only HTML/Markdown renderer |
| `<wu-changelog>` | Release notes / version history display |
| `<wu-keyboard-shortcuts>` | Searchable shortcut reference modal |
| `<wu-feature-flag-badge>` | "Beta" / "New" / "Deprecated" label |

---

### 3.7 AI / LLM-Native Components (12 components)

> These are the highest-priority additions for 2026–2029 web development.

| Tag | Description |
|---|---|
| `<wu-chat>` | Full conversation thread (messages list + input) |
| `<wu-chat-message>` | Single message bubble: text, code, image, tool-call |
| `<wu-chat-input>` | Multiline prompt input with send, attach, voice buttons |
| `<wu-typing-indicator>` | Animated "…" dots for streaming/thinking state |
| `<wu-streaming-text>` | Text that renders character-by-character (typewriter) |
| `<wu-model-selector>` | Dropdown to choose AI model (GPT-4, Claude, Gemini) |
| `<wu-token-counter>` | Real-time token count with limit bar |
| `<wu-prompt-library>` | Saved prompts browser with insert action |
| `<wu-ai-suggestion>` | Ghost/preview text inline suggestion (Copilot-style) |
| `<wu-ai-action-bar>` | Floating toolbar on text selection (Explain, Fix, Improve) |
| `<wu-reasoning-trace>` | Collapsible thought-chain display |
| `<wu-tool-call-display>` | Shows AI tool invocations with inputs/outputs |

---

### 3.8 Real-Time & Collaborative (8 components)

| Tag | Description |
|---|---|
| `<wu-presence>` | Shows who else is viewing/editing (avatar stack) |
| `<wu-user-cursor>` | Other users' cursors rendered in shared canvas |
| `<wu-live-indicator>` | Pulsing "LIVE" badge (dashboards, sports scores) |
| `<wu-sync-status>` | Cloud save / sync / offline indicator |
| `<wu-connection-status>` | Online/offline/reconnecting banner |
| `<wu-conflict-resolver>` | Side-by-side diff for edit conflicts |
| `<wu-collaborative-form>` | Form with field-level locking when another user edits |
| `<wu-typing-users>` | "Alice and Bob are typing…" indicator |

---

### 3.9 Data Visualisation Extensions (8 components)

*(Extends `@weldui/charts`)*

| Tag | Description |
|---|---|
| `<wu-funnel-chart>` | Conversion funnel stages |
| `<wu-sankey>` | Flow diagram (budget allocation, user journey) |
| `<wu-tree-map>` | Hierarchical nested rectangles |
| `<wu-radar-chart>` | Spider/web chart for multi-dimensional data |
| `<wu-candlestick>` | OHLC financial chart |
| `<wu-waterfall-chart>` | Running total with increments/decrements |
| `<wu-geo-map>` | SVG choropleth world/region map |
| `<wu-network-graph>` | Force-directed node/edge graph |

---

### 3.10 Media & Creative (10 components)

| Tag | Description |
|---|---|
| `<wu-image-crop>` | Client-side image crop/zoom/rotate before upload |
| `<wu-image-compare>` | Before/after slider (two overlapping images) |
| `<wu-color-swatch>` | Single colour chip with name and hex/rgb tooltip |
| `<wu-color-palette>` | Grid of swatches with selection |
| `<wu-icon>` | Wrapper for SVG icon sets with `name`, `size`, `color` |
| `<wu-lottie>` | Lottie animation player (JSON animations) |
| `<wu-emoji-picker>` | Categorised emoji grid (already in Phase 10) |
| `<wu-confetti>` | Canvas-based celebration animation (trigger on event) |
| `<wu-canvas-sketch>` | Drawing canvas with stroke/erase/undo |
| `<wu-pdf-viewer>` | PDF.js wrapper with page navigation and zoom |

---

### 3.11 Maps & Location (6 components)

| Tag | Description |
|---|---|
| `<wu-map>` | MapLibre/Leaflet wrapper with token-themed controls |
| `<wu-address-input>` | Address autocomplete (Google Places / OpenStreetMap) |
| `<wu-location-picker>` | Click-on-map to pick coordinates |
| `<wu-route-display>` | Start → End route on map |
| `<wu-geofence>` | Draw radius/polygon on map |
| `<wu-distance-calculator>` | A-to-B distance badge |

---

### 3.12 Print & Documents (6 components)

| Tag | Description |
|---|---|
| `<wu-invoice>` | Print-ready A4 invoice layout with line items table |
| `<wu-receipt>` | Thermal receipt layout |
| `<wu-letter>` | Formal letter layout with letterhead |
| `<wu-report>` | Multi-section report layout with cover, TOC, sections |
| `<wu-certificate>` | Certificate/diploma print layout |
| `<wu-label-sheet>` | Avery-compatible address label grid |

---

### 3.13 Developer Experience (8 components)

*(Part of `@weldui/enterprise`)*

| Tag | Description |
|---|---|
| `<wu-api-explorer>` | REST API playground (like Swagger UI but themed) |
| `<wu-code-editor>` | Monaco-based editor with language/theme |
| `<wu-terminal>` | xterm.js terminal emulator |
| `<wu-schema-viewer>` | JSON Schema / TypeScript type tree |
| `<wu-webhook-log>` | Real-time webhook event stream |
| `<wu-env-vars>` | .env file editor with secret masking |
| `<wu-cron-builder>` | Visual cron expression builder with preview |
| `<wu-regex-tester>` | Regex input + test string + highlighted matches |

---

### 3.14 Analytics & Monitoring (8 components)

| Tag | Description |
|---|---|
| `<wu-metric-card>` | KPI card: number, label, sparkline, trend arrow |
| `<wu-uptime-bar>` | 90-day uptime history blocks (Betterstack-style) |
| `<wu-alert-rule>` | Threshold alert condition builder |
| `<wu-log-stream>` | Real-time scrolling log output |
| `<wu-error-trace>` | Stack trace display with code frame |
| `<wu-event-timeline>` | Horizontal timeline of system events |
| `<wu-health-check>` | Service dependency status grid |
| `<wu-sla-tracker>` | SLA window remaining / consumed display |

---

### 3.15 Accessibility & Utility (8 components)

| Tag | Description |
|---|---|
| `<wu-skip-link>` | "Skip to main content" hidden link |
| `<wu-focus-trap>` | Programmatic focus containment for overlays |
| `<wu-announce>` | `aria-live` region for dynamic announcements |
| `<wu-sr-only>` | Visually hidden content (screen-reader only) |
| `<wu-reduced-motion>` | Wrapper that toggles children based on `prefers-reduced-motion` |
| `<wu-high-contrast>` | Wrapper that toggles children based on `forced-colors` |
| `<wu-keyboard-focus>` | Focus ring only on keyboard nav (suppress mouse focus ring) |
| `<wu-landmark>` | Correct `<main>`, `<nav>`, `<aside>`, `<header>`, `<footer>` wrapper with aria |

---

### 3.16 Web3 & Emerging (6 components)

| Tag | Description |
|---|---|
| `<wu-wallet-connect>` | WalletConnect / MetaMask connect button |
| `<wu-address-display>` | Truncated crypto address with copy and block-explorer link |
| `<wu-transaction-status>` | Pending / confirmed / failed tx indicator |
| `<wu-nft-card>` | NFT image, name, collection, price |
| `<wu-chain-selector>` | Dropdown to choose blockchain network |
| `<wu-gas-fee>` | Current gas price display with speed selector |

---

### 3.17 PWA & Device (6 components)

| Tag | Description |
|---|---|
| `<wu-install-prompt>` | "Add to home screen" banner |
| `<wu-notification-permission>` | Request permission UI with explanation |
| `<wu-share-button>` | Web Share API button with fallback copy-link |
| `<wu-offline-banner>` | Detected offline/online transition banner |
| `<wu-update-available>` | Service worker update prompt |
| `<wu-battery-indicator>` | Battery level display (with Battery API) |

---

## 4 · Component Count Summary

| Group | Existing (enhanced) | New additions |
|---|---|---|
| Core primitives (Phase 1) | 8 | 0 (enhanced only) |
| Complex components (Phase 3) | 18 | 0 (enhanced only) |
| Compound components (Phase 4) | 8 | 0 (enhanced only) |
| Phase 5 form primitives | 10 | 0 (enhanced only) |
| Phase 6 data display | 12 | 0 (enhanced only) |
| Phase 7 nav & overlays | 10 | 0 (enhanced only) |
| Phase 8 charts | 8 | 8 (data viz extensions) |
| Phase 9 rich media | 8 | 0 (enhanced only) |
| Phase 10 enterprise | 12 | 0 (enhanced only) |
| **3.1 Layout & Structure** | — | **10** |
| **3.2 Typography & Content** | — | **8** |
| **3.3 Feedback & Validation** | — | **8** |
| **3.4 Auth & Security** | — | **8** |
| **3.5 E-Commerce** | — | **10** |
| **3.6 SaaS / App Shell** | — | **10** |
| **3.7 AI / LLM-Native** | — | **12** |
| **3.8 Real-Time & Collaborative** | — | **8** |
| **3.9 Charts extensions** | — | **8** |
| **3.10 Media & Creative** | — | **10** |
| **3.11 Maps & Location** | — | **6** |
| **3.12 Print & Documents** | — | **6** |
| **3.13 Developer Experience** | — | **8** |
| **3.14 Analytics & Monitoring** | — | **8** |
| **3.15 Accessibility & Utility** | — | **8** |
| **3.16 Web3 & Emerging** | — | **6** |
| **3.17 PWA & Device** | — | **6** |
| **TOTAL NEW** | | **130** |
| **TOTAL EXISTING** | | **~106** |
| **🏁 GRAND TOTAL** | | **~236 components** |

---

## 5 · Package Architecture for v3.0

```
@weldui/core          → Phases 1–9 core components (FOSS, MIT)
@weldui/charts        → Phase 8 + Section 3.9 chart components (MIT)
@weldui/forms         → Enhanced form primitives, wu-form-wizard (MIT)
@weldui/commerce      → Section 3.5 e-commerce components (Commercial)
@weldui/ai            → Section 3.7 AI/LLM components (Commercial)
@weldui/collab        → Section 3.8 real-time/collab components (Commercial)
@weldui/maps          → Section 3.11 map components (Commercial — API key gated)
@weldui/print         → Section 3.12 print/document templates (Commercial)
@weldui/enterprise    → Phase 10 + Sections 3.13, 3.14 (Enterprise tier)
@weldui/a11y          → Section 3.15 accessibility utilities (MIT)
@weldui/compliance    → Existing compliance pack (Commercial)
```

---

## 6 · Implementation Phasing (3-Year Plan)

### 2026 Q2 — Foundation Polish
- Complete 6-tier test infrastructure (TD-11 through TD-16)
- Publish all Phases 1–9 to npm
- Storybook live at docs.weldui.dev

### 2026 Q3 — Enhanced Core (Section 2 enhancements)
- Roll out all Section 2 enhancements to existing components
- Ship `<wu-button-group>`, `<wu-split-button>`, `<wu-input-group>`, `<wu-field>`, `<wu-field-group>`
- Ship Layout & Structure (Section 3.1) — 10 components
- Ship Typography & Content (Section 3.2) — 8 components

### 2026 Q4 — Application Platform
- Ship Auth & Security (Section 3.4) — 8 components → `@weldui/auth`
- Ship Feedback & Validation (Section 3.3) — 8 components
- Ship SaaS / App Shell (Section 3.6) — 10 components
- Ship AI/LLM components v1 (Section 3.7) — first 6 components → `@weldui/ai`

### 2027 Q1 — Commerce + AI
- Ship E-Commerce (Section 3.5) — 10 components → `@weldui/commerce`
- Complete AI/LLM components (remaining 6) → `@weldui/ai` v1.0
- Ship Real-Time & Collaborative (Section 3.8) — 8 components → `@weldui/collab`

### 2027 Q2 — Media + Developer
- Ship Media & Creative (Section 3.10) — 10 components
- Ship Developer Experience (Section 3.13) — 8 components → `@weldui/enterprise`
- Ship Analytics & Monitoring (Section 3.14) — 8 components

### 2027 Q3 — Charts Extensions + Maps
- Ship Charts extensions (Section 3.9) — 8 advanced charts
- Ship Maps & Location (Section 3.11) — 6 components → `@weldui/maps`
- Ship Print & Documents (Section 3.12) — 6 components → `@weldui/print`

### 2027 Q4 — Accessibility + PWA
- Ship Accessibility & Utility (Section 3.15) — 8 components → `@weldui/a11y`
- Ship PWA & Device (Section 3.17) — 6 components
- Accessibility audit: full WCAG 2.2 AAA on all components

### 2028 Q1 — Web3 + Emerging
- Ship Web3 & Emerging (Section 3.16) — 6 components → `@weldui/web3`
- Spatial computing variants (Vision Pro / WebXR minimum targets)

### 2028 Q2-Q4 — v3.0 Release
- All ~236 components implemented and 6-tier tested
- All framework wrappers (React, Vue, Angular, Svelte, Solid, Qwik)
- MCP server with full 236-component manifest
- Documentation: individual component pages, pattern guides, full design system handbook

---

## 7 · Future Web Development Considerations

### AI-native UIs (Highest impact, 2026–2027)
- Every text input will offer AI completions via `ai-assist` prop
- Streaming text rendering (`<wu-streaming-text>`) becomes as common as `<wu-spinner>`
- `<wu-chat>` becomes the new "sidebar" in productivity apps
- Tool-call displays (`<wu-tool-call-display>`) standard in developer tools

### Edge & Streaming SSR (2026)
- All components must render meaningful HTML before JS loads
- `<template shadowrootmode="open">` (Declarative Shadow DOM) is the default
- No layout shifts on hydration — CSS custom properties ensure first-paint styling

### Spatial Computing (2027)
- Components work in flat 2D mode but have `spatial` prop for WebXR
- Minimum 44px tap targets become 60px for Vision Pro spatial targeting
- `<wu-3d-card>` — component with depth/parallax aware of pointer tilt

### Privacy-first Web (2026–2028)
- No component beacons analytics to third parties
- `<wu-consent-banner>` (already in compliance) becomes default in `@weldui/core`
- `prefers-reduced-data` CSS media query support in image/video components

### Real-time Collaboration (2027)
- CRDTs (Conflict-free Replicated Data Types) as optional enhancement for `<wu-data-grid>`, `<wu-rich-text>`
- `<wu-presence>` becomes standard in any shared workspace app

### Web Components v2 / CSS Houdini (2026)
- `@property` CSS declarations for typed custom properties (enables animation of tokens)
- `::part()` improvements let consumers style deeply without bypassing Shadow DOM
- CSS `if()` and container queries further reduce JS logic needed in components

---

## 8 · Definition of Done — v3.0 Component (Enhanced Standard)

A v3.0 component is marked ✅ when it passes all 8 gates:

| Gate | Requirement |
|---|---|
| 1 | **Tier 1 Unit** — 15+ tests, 100% prop/event coverage |
| 2 | **Tier 2 A11y** — 0 axe violations, ARIA snapshot approved, keyboard full-flow recorded |
| 3 | **Tier 3 Visual** — 288+ snapshots across 12 themes × 3 viewports × 8 states |
| 4 | **Tier 4 E2E** — All user journeys automated in Playwright |
| 5 | **Tier 5 Perf** — Bundle < 2 KB gzip; renders < 100 ms cold |
| 6 | **Tier 6 Token** — 0 hardcoded values; all 12 themes contrast-pass |
| 7 | **Tier 7 DX** — JSDoc complete; MCP `get_component()` returns correct spec; Storybook interactive; AI scaffolding works via `pnpm scaffold:component` |
| 8 | **Tier 8 SSR** — Renders valid Declarative Shadow DOM; no hydration flash; Lighthouse ≥ 95 |

---

*Last updated: 2026-03-15 | ROADMAP-V3.md*

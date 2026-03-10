# SKILL: Scaffold a New UIForge Theme

Use this skill when asked to create a new theme. Follow every step in order.

---

## Pre-flight Questions

Before writing any code, confirm:
1. **Theme name** — kebab-case slug (e.g., `ocean`, `acme-corp`, `healthcare-calm`)
2. **Display name** — human-readable (e.g., "Ocean Pro", "Acme Corp Brand")
3. **Primary colour** — brand hex (e.g., `#0ea5e9`)
4. **Surface preference** — light background, dark background, or both?
5. **Target industry** — informs palette tone choices
6. **Is this a premium/paid theme?** — affects which package registry it goes to

---

## Step 1: Copy Template

```bash
cp -r packages/themes/_template packages/themes/[name]
```

Update `packages/themes/[name]/package.json`:
```json
{
  "name": "@uiforge/theme-[name]",
  "version": "1.0.0",
  "description": "[Display Name] theme for UIForge",
  "keywords": ["uiforge", "theme", "[name]"],
  "files": ["light.css", "dark.css", "index.css", "preview.html"],
  "exports": {
    ".": "./index.css",
    "./light": "./light.css",
    "./dark": "./dark.css"
  }
}
```

---

## Step 2: Generate Colour Scale

From the primary hex colour, generate the full 50–950 scale using HSL:

```
Given: Primary = #0ea5e9 (sky-500, HSL: 199° 89% 48%)

Generate scale by adjusting lightness:
50:  HSL(199, 89%, 97%)  → #f0f9ff
100: HSL(199, 89%, 94%)  → #e0f2fe
200: HSL(199, 89%, 87%)  → #bae6fd
300: HSL(199, 89%, 76%)  → #7dd3fc
400: HSL(199, 89%, 62%)  → #38bdf8
500: HSL(199, 89%, 48%)  → #0ea5e9  ← PRIMARY
600: HSL(199, 89%, 40%)  → #0284c7
700: HSL(199, 89%, 32%)  → #0369a1
800: HSL(199, 89%, 24%)  → #075985
900: HSL(199, 89%, 18%)  → #0c4a6e
950: HSL(199, 89%, 10%)  → #082f49
```

Always verify WCAG contrast:
- Primary text on white: must be ≥ 4.5:1
- White text on primary: must be ≥ 4.5:1
- Use: https://webaim.org/resources/contrastchecker/

---

## Step 3: Write `light.css`

Only override semantic tokens (Layer 2). Never define primitive tokens in theme files.

```css
/* packages/themes/[name]/light.css */
/* [Display Name] — Light Mode */
/* Target: [industry] */

[data-theme="[name]"],
[data-theme="[name]-light"] {
  /* ── Brand ── */
  --uf-color-primary:        [primary-600];
  --uf-color-primary-hover:  [primary-700];
  --uf-color-primary-subtle: [primary-50];
  --uf-color-primary-fg:     #ffffff;

  /* ── Surfaces ── */
  --uf-color-background:     [primary-50 or white];
  --uf-color-surface:        [primary-50];
  --uf-color-surface-raised: #ffffff;
  --uf-color-surface-overlay:#ffffff;

  /* ── Text ── */
  --uf-color-text:           [primary-950 or gray-900];
  --uf-color-text-secondary: [primary-700 or gray-600];
  --uf-color-text-disabled:  [primary-300 or gray-400];
  --uf-color-text-inverse:   #ffffff;

  /* ── Borders ── */
  --uf-color-border:         [primary-200 or gray-200];
  --uf-color-border-strong:  [primary-300 or gray-300];
  --uf-color-border-focus:   [primary-500];

  /* ── Focus Ring ── */
  --uf-focus-ring: 0 0 0 3px [primary-200];

  /* ── Status colours — keep accessible ── */
  /* Only override if brand requires it */
  /* --uf-color-success: var(--uf-color-green-600); */
  /* --uf-color-danger:  var(--uf-color-red-600); */
}
```

---

## Step 4: Write `dark.css`

Dark mode inverts the surface hierarchy and softens the primary:

```css
/* packages/themes/[name]/dark.css */
/* [Display Name] — Dark Mode */

[data-theme="[name]-dark"] {
  /* ── Brand ── */
  --uf-color-primary:        [primary-400];   /* lighter in dark mode */
  --uf-color-primary-hover:  [primary-300];
  --uf-color-primary-subtle: color-mix(in srgb, [primary-500] 15%, transparent);
  --uf-color-primary-fg:     [primary-950];   /* dark text on light primary */

  /* ── Surfaces — deep and layered ── */
  --uf-color-background:     [primary-950];
  --uf-color-surface:        [primary-900];
  --uf-color-surface-raised: [primary-800];
  --uf-color-surface-overlay:[primary-800];

  /* ── Text ── */
  --uf-color-text:           [primary-50];
  --uf-color-text-secondary: [primary-300];
  --uf-color-text-disabled:  [primary-600];
  --uf-color-text-inverse:   [primary-950];

  /* ── Borders ── */
  --uf-color-border:         [primary-800];
  --uf-color-border-strong:  [primary-700];
  --uf-color-border-focus:   [primary-400];

  /* ── Focus Ring ── */
  --uf-focus-ring: 0 0 0 3px color-mix(in srgb, [primary-400] 30%, transparent);
}
```

---

## Step 5: Write `index.css`

Entry point that imports both:
```css
/* packages/themes/[name]/index.css */
/* [Display Name] Theme for UIForge */
/* Usage: import '@uiforge/theme-[name]' */

@import './light.css';
@import './dark.css';
```

---

## Step 6: Write `preview.html`

A standalone HTML file showing all Phase 1 components with this theme applied.
Must render correctly in any browser without a build step.

```html
<!DOCTYPE html>
<html data-theme="[name]">
<head>
  <title>[Display Name] Theme Preview — UIForge</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@uiforge/core/dist/tokens/index.css">
  <link rel="stylesheet" href="./index.css">
  <script type="module" src="https://cdn.jsdelivr.net/npm/@uiforge/core/dist/index.js"></script>
</head>
<body>
  <div style="padding: 2rem; font-family: system-ui; background: var(--uf-color-background); min-height: 100vh">
    <h1 style="color: var(--uf-color-text)">[Display Name] Theme</h1>
    
    <!-- Buttons -->
    <section>
      <uf-button variant="primary">Primary</uf-button>
      <uf-button variant="secondary">Secondary</uf-button>
      <uf-button variant="ghost">Ghost</uf-button>
      <uf-button variant="danger">Danger</uf-button>
    </section>

    <!-- Inputs -->
    <section>
      <uf-input placeholder="Enter text..."></uf-input>
      <uf-select>
        <option>Option 1</option>
        <option>Option 2</option>
      </uf-select>
    </section>

    <!-- Badges -->
    <section>
      <uf-badge>Default</uf-badge>
      <uf-badge variant="primary">Primary</uf-badge>
      <uf-badge variant="success">Success</uf-badge>
      <uf-badge variant="warning">Warning</uf-badge>
      <uf-badge variant="danger">Danger</uf-badge>
    </section>
  </div>
</body>
</html>
```

---

## Step 7: Write `README.md`

```markdown
# @uiforge/theme-[name]

[Display Name] theme for [UIForge](https://uiforge.dev).
Designed for [target industry].

## Installation

\`\`\`bash
npm install @uiforge/theme-[name]
\`\`\`

## Usage

### Import both light and dark
\`\`\`js
import '@uiforge/theme-[name]';
\`\`\`

### Light mode only
\`\`\`js
import '@uiforge/theme-[name]/light';
\`\`\`

### Apply theme
\`\`\`html
<body data-theme="[name]">
  <!-- or -->
  <div data-theme="[name]-dark"> ... </div>
</body>
\`\`\`

## Colours

| Token | Value | Usage |
|-------|-------|-------|
| Primary | [primary hex] | Buttons, links, focus rings |
| Background | [bg hex] | Page background |
| Surface | [surface hex] | Cards, panels |

## Accessibility

- All colour combinations meet WCAG AA (4.5:1 contrast ratio)
- Dark mode variants tested for readability
```

---

## Step 8: Add to Storybook

In `apps/docs/.storybook/preview.ts`, add to toolbar items:
```typescript
{ value: '[name]', title: '[Display Name]' },
{ value: '[name]-dark', title: '[Display Name] Dark' },
```

In `apps/docs/.storybook/preview.ts`, add CSS import:
```typescript
import '@uiforge/theme-[name]';
```

---

## Step 9: Contrast Validation

Run the contrast checker on all generated colour combinations:
```bash
pnpm --filter @uiforge/build-tools contrast-check packages/themes/[name]/light.css
pnpm --filter @uiforge/build-tools contrast-check packages/themes/[name]/dark.css
```

All combinations must pass. Fix any failures before proceeding.

---

## Completion Checklist

- [ ] `light.css` — only semantic token overrides, contrast ≥ 4.5:1
- [ ] `dark.css` — contrast verified, surfaces properly layered
- [ ] `index.css` — imports both files
- [ ] `preview.html` — all components visible and themed
- [ ] `README.md` — installation, usage, colour table
- [ ] `package.json` — correct name, version, exports
- [ ] Added to Storybook toolbar
- [ ] Contrast check passes
- [ ] Screenshots taken for marketplace listing (if premium)
- [ ] Published to npm: `pnpm --filter @uiforge/theme-[name] publish`

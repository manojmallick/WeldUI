# SKILL: Scaffold a New UIForge Component

Use this skill when asked to create a new component. Follow every step in order.
Do not skip steps. Do not generate code that violates the token rules.

---

## Pre-flight Questions

Before writing any code, confirm:
1. **Component name** — what is the kebab-case name? (e.g., `date-picker`)
2. **Variants** — what visual variants does it need?
3. **Sizes** — does it need sm/md/lg sizes?
4. **Events** — what custom events does it emit?
5. **Slots** — what content areas does it expose?
6. **Form element?** — does it need to participate in native `<form>` submission?

---

## Step 1: Create Directory

```bash
mkdir -p packages/core/src/components/[name]
```

Files to create:
```
packages/core/src/components/[name]/
├── uf-[name].styles.ts   ← Write this FIRST
├── uf-[name].ts          ← Write this SECOND
├── uf-[name].stories.ts  ← Write this THIRD
└── uf-[name].test.ts     ← Write this FOURTH
```

---

## Step 2: Write `uf-[name].styles.ts`

Rules:
- Start with `:host {}` defining all component-level tokens
- Component tokens MUST reference semantic tokens (Layer 2), never primitives (Layer 1)
- Every visual property (colour, spacing, radius, font) MUST use a CSS var
- Include `:host([variant="..."])` blocks for each variant
- Include `:host([size="..."])` blocks if sizes exist
- Include `:host([disabled])` block
- Define `button:focus-visible` or equivalent with `var(--uf-focus-ring)`

Template:
```typescript
import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    /* Component tokens — all reference semantic tokens */
    --uf-[name]-bg:          var(--uf-color-surface);
    --uf-[name]-color:       var(--uf-color-text);
    --uf-[name]-border:      var(--uf-color-border);
    --uf-[name]-radius:      var(--uf-radius-md);
    --uf-[name]-font-size:   var(--uf-text-sm);
    --uf-[name]-padding-x:   var(--uf-space-4);
    --uf-[name]-padding-y:   var(--uf-space-2);
    --uf-[name]-transition:  all var(--uf-duration-normal) var(--uf-ease-default);
  }

  /* Variant overrides */
  :host([variant="primary"]) { ... }
  :host([variant="secondary"]) { ... }

  /* Size overrides */
  :host([size="sm"]) { --uf-[name]-font-size: var(--uf-text-xs); }
  :host([size="lg"]) { --uf-[name]-font-size: var(--uf-text-base); }

  /* Disabled state */
  :host([disabled]) { opacity: 0.5; pointer-events: none; }

  /* Focus visible */
  :focus-visible { box-shadow: var(--uf-focus-ring); outline: none; }
`;
```

---

## Step 3: Write `uf-[name].ts`

Rules:
- Use `@customElement('uf-[name]')` decorator
- All `@property()` must have `reflect: true`
- Boolean props: `@property({ type: Boolean, reflect: true })`
- Custom events: `new CustomEvent('uf-[event]', { bubbles: true, composed: true, detail: {} })`
- Always check `disabled` before dispatching events
- Always add to `HTMLElementTagNameMap` declaration at bottom
- Full JSDoc required: `@element`, `@slot`, `@event`, `@csspart`, `@cssprop`, `@example`

If form-associated (inputs, selects, checkboxes):
```typescript
static formAssociated = true;
private internals = this.attachInternals();
// Use this.internals.setFormValue(value) on change
// Use this.internals.setValidity({...}, message) for validation
```

---

## Step 4: Write `uf-[name].stories.ts`

Required stories (minimum):
1. `Default` — with argTypes for all props, uses args
2. `AllVariants` — shows every variant side by side, no args
3. `Sizes` — if component has size prop
4. `States` — disabled, loading, error states in one view
5. One story per major feature (e.g., `WithIcon`, `WithSlottedContent`)

Each story must work with all 5 themes in the Storybook toolbar.

---

## Step 5: Write `uf-[name].test.ts`

Minimum 6 tests:
```typescript
1. Renders with default props
2. Reflects props as attributes
3. Emits correct custom event on interaction
4. Does NOT emit event when disabled
5. Slot content renders
6. Passes accessibility check: expect(el).to.be.accessible()
```

Additional tests for:
- Each variant changes visual state
- Keyboard interaction (Tab focus, Enter/Space activation)
- Form value submission (if form-associated)

---

## Step 6: Export from Barrel

Add to `packages/core/src/index.ts`:
```typescript
export { Uf[Name] } from './components/[name]/uf-[name].js';
import './components/[name]/uf-[name].js';
```

---

## Step 7: Add to Framework Wrappers

Run the wrapper generator:
```bash
pnpm --filter @uiforge/react generate:wrappers
pnpm --filter @uiforge/vue generate:wrappers
pnpm --filter @uiforge/angular generate:wrappers
```

Verify the generated wrapper for correctness — especially event handler mapping.

---

## Step 8: Verify

```bash
pnpm build                    # Must pass with zero errors
pnpm test --filter @uiforge/core  # All tests must pass
# Open Storybook and verify:
# - All variants render correctly
# - Theme switcher works (test all 5 themes)
# - Docs tab shows all JSDoc
# - Controls panel shows all props
```

---

## Completion Checklist

- [ ] `uf-[name].styles.ts` — zero hardcoded colours/spacing
- [ ] `uf-[name].ts` — full JSDoc, all props reflected, events composed
- [ ] `uf-[name].stories.ts` — Default + AllVariants + States minimum
- [ ] `uf-[name].test.ts` — min 6 tests, accessibility check included
- [ ] Exported from `packages/core/src/index.ts`
- [ ] Framework wrappers regenerated
- [ ] `pnpm build` passes
- [ ] `pnpm test` passes
- [ ] Renders correctly in all 5 Storybook themes

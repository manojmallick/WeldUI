# SKILL: UIForge Refactoring Guide

Use this skill when asked to refactor existing UIForge code.
Refactoring must preserve behaviour, improve quality, and never break the token contract.

---

## Refactoring Priorities (in order)

1. **Token compliance** — eliminate hardcoded values
2. **API consistency** — align with UIForge component conventions
3. **Accessibility** — add missing ARIA, keyboard support
4. **TypeScript strictness** — remove `any`, add types
5. **Test coverage** — add missing tests
6. **Performance** — reduce re-renders, eliminate unnecessary watchers

---

## Common Refactoring Patterns

### Pattern 1: Hardcoded value → Token

```typescript
// BEFORE (styles.ts)
button {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
}

// AFTER
:host {
  --uf-btn-bg:           var(--uf-color-primary);
  --uf-btn-padding-x:    var(--uf-space-4);
  --uf-btn-padding-y:    var(--uf-space-2);
  --uf-btn-radius:       var(--uf-radius-md);
  --uf-btn-font-size:    var(--uf-text-sm);
}

button {
  background:    var(--uf-btn-bg);
  padding:       var(--uf-btn-padding-y) var(--uf-btn-padding-x);
  border-radius: var(--uf-btn-radius);
  font-size:     var(--uf-btn-font-size);
}
```

### Pattern 2: Inline event handler → dispatched custom event

```typescript
// BEFORE
private onClick() {
  this.dispatchEvent(new Event('click')); // Wrong: native events, not composed
}

// AFTER
private onClick(e: MouseEvent) {
  if (this.disabled) { e.stopPropagation(); return; }
  this.dispatchEvent(new CustomEvent('uf-click', {
    bubbles: true,
    composed: true,
    detail: { originalEvent: e }
  }));
}
```

### Pattern 3: Missing focus-visible → accessible focus

```typescript
// BEFORE
button:focus {
  outline: none; // Accessibility violation
}

// AFTER
button:focus {
  outline: none; // Remove default
}
button:focus-visible {
  box-shadow: var(--uf-focus-ring); // Accessible, theme-aware
}
```

### Pattern 4: Unreflected property → reflected attribute

```typescript
// BEFORE
@property()
variant = 'primary'; // Not reflected — can't be set via HTML attribute

// AFTER
@property({ reflect: true })
variant: 'primary' | 'secondary' | 'ghost' | 'danger' = 'primary';
// Now CSS :host([variant="secondary"]) selectors work
```

### Pattern 5: Internal state leaked as property → @state()

```typescript
// BEFORE
@property({ type: Boolean })
_isOpen = false; // Internal state exposed publicly

// AFTER
@state()
private isOpen = false; // Private, triggers re-render, not reflected
```

### Pattern 6: Imperative DOM manipulation → declarative Lit template

```typescript
// BEFORE
connectedCallback() {
  super.connectedCallback();
  const btn = this.shadowRoot!.querySelector('button')!;
  btn.classList.toggle('active', this.active);
}

// AFTER
render() {
  return html`
    <button class=${classMap({ active: this.active })}>
      <slot></slot>
    </button>
  `;
}
```

---

## Refactoring Checklist

Before starting:
- [ ] Read the existing component fully before changing anything
- [ ] Write a test that captures current behaviour (prevents regressions)
- [ ] Run `pnpm test` to confirm baseline passes

During refactoring:
- [ ] Change one thing at a time — run tests after each change
- [ ] Never change public API (prop names, event names, slot names) without a major version bump
- [ ] Update JSDoc if behaviour changes
- [ ] Do not remove CSS parts without a deprecation notice

After refactoring:
- [ ] All existing tests still pass
- [ ] Pre-build hook passes (no hardcoded values)
- [ ] Visual regression test passes in all 5 themes
- [ ] Bundle size did not increase significantly

---

## What NOT to Refactor

- **Do not** rename CSS custom properties — it's a breaking change for theme authors
- **Do not** rename custom events — it breaks framework wrappers
- **Do not** rename slots — it breaks consumer templates
- **Do not** change property types — it's a TypeScript breaking change
- **Do not** remove the `uf-` prefix from anything — it's the public API
- **Do not** switch from Shadow DOM to light DOM — it breaks style isolation

---

## Deprecation Pattern

When a public API must change, deprecate first (one major version), remove second:

```typescript
/**
 * @deprecated Use `variant="danger"` instead. Will be removed in v2.0.
 */
@property({ reflect: true })
destructive = false;

// In render(), handle both:
get _effectiveVariant() {
  if (this.destructive) {
    console.warn('[uf-button] `destructive` is deprecated. Use `variant="danger"`.');
    return 'danger';
  }
  return this.variant;
}
```

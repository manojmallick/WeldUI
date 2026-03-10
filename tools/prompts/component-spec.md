# Prompt Template: Component Specification

Use this prompt when asking Claude to design a new WeldUI component specification.
Copy the prompt below, fill in the blanks, and send to Claude.

---

## Prompt

```
I need to design a new WeldUI component specification for `wu-[COMPONENT-NAME]`.

Context from CLAUDE.md:
- All components are Web Components (Lit 3.x)
- All styles use CSS Custom Properties only — no hardcoded values
- Token naming: --wu-[component]-[property] referencing --wu-color-* semantic tokens
- Events: wu-prefixed, composed: true, bubbles: true
- Properties: reflect: true always

Component purpose:
[Describe what this component does in 1-2 sentences]

Required variants:
[List the visual variants needed]

Required sizes:
[sm/md/lg or none]

Interaction requirements:
[Describe user interactions: clicks, hover states, keyboard behaviour]

Accessibility requirements:
[ARIA roles needed, keyboard nav, screen reader behaviour]

Form participation:
[Yes/No — does it need to submit values in a <form>?]

Slot requirements:
[What content areas should be slottable?]

Please produce:
1. A complete property table (name, type, default, description)
2. A complete event table (name, detail type, when emitted)
3. A complete slot table (name, description)
4. A complete CSS custom property table (name, default token, description)
5. The wu-[name].styles.ts skeleton with all component tokens defined
6. The wu-[name].ts skeleton with all properties and events wired
```

---

## Example (filled in for wu-rating)

```
I need to design a new WeldUI component specification for `wu-rating`.

Component purpose:
A star rating input that allows users to select a rating from 1-5 (or custom max).

Required variants:
- default (outline stars)
- filled (solid stars with primary colour)
- readonly (display only, no interaction)

Required sizes: sm/md/lg

Interaction requirements:
- Click on a star to select that rating
- Hover previews the rating before clicking
- Keyboard: arrow keys to change rating, Enter/Space to confirm

Accessibility requirements:
- role="radiogroup" on the host
- Each star is role="radio" with aria-checked
- aria-label on the group
- Keyboard: Left/Right arrows navigate, Home/End go to min/max

Form participation: Yes — submits numeric value

Slot requirements: None

Please produce the full specification.
```

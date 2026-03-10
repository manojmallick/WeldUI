# @weldui/core

## 0.1.0-beta.1

### Minor Changes

- Phase 1 foundation release.

  **`@weldui/core`**
  - 8 Web Components built with Lit 3.x: `wu-button`, `wu-badge`, `wu-avatar`, `wu-input`, `wu-textarea`, `wu-select`, `wu-checkbox`, `wu-toggle`
  - 3-layer CSS token system: primitive, semantic (light + dark), and component tokens
  - Full WCAG 2.1 AA accessibility support with keyboard navigation and ARIA attributes
  - Tree-shakeable ESM + CJS builds (31.5 kB ESM / 5.56 kB gzip)
  - Storybook stories and Vitest unit tests for all components

  **`@weldui/react`**
  - React wrapper package with `forwardRef` wrappers for all Phase 1 components

  **`@weldui/vue`**
  - Vue 3 wrapper package with `WeldUIPlugin` and component wrappers

  **`@weldui/tokens-tailwind`**
  - Tailwind CSS v3 preset exporting all WeldUI design tokens

  **`create-weldui-theme`**
  - Interactive CLI (`npx create-weldui-theme`) to scaffold custom theme packages
  - HSL-based color scale generation (50–900 stops)
  - Automatic WCAG AA contrast checking
  - Generates `light.css`, `dark.css`, `preview.html`, `package.json`, `README.md`

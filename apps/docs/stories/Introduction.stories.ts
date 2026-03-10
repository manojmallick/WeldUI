import { html } from 'lit';

// Introduction page for Storybook docs
export default {
  title: 'Introduction',
  parameters: {
    docs: {
      description: {
        component: `
# WeldUI Design System

**One component library. Any framework. Any brand. Compliance-ready.**

## Getting Started

\`\`\`bash
pnpm add @weldui/core
\`\`\`

\`\`\`html
<!-- Import tokens -->
<style>@import '@weldui/core/tokens';</style>

<!-- Use components -->
<wu-button variant="primary">Get Started</wu-button>
\`\`\`

## Theming

Apply themes via the \`data-theme\` attribute. No JavaScript required.

\`\`\`html
<body data-theme="ocean">
  <!-- All components inside immediately inherit the Ocean theme -->
</body>
\`\`\`

## Framework Support

| Framework | Package |
|-----------|---------|
| React     | \`@weldui/react\` |
| Vue 3     | \`@weldui/vue\` |
| Angular   | \`@weldui/angular\` |
| Vanilla   | \`@weldui/core\` |
        `,
      },
    },
  },
};

export const Overview = () => html`
  <div style="font-family: var(--wu-font-sans); padding: 2rem; max-width: 800px;">
    <h1>WeldUI Components</h1>
    <p style="color: var(--wu-color-text-secondary)">
      Browse the component library using the sidebar.
      Use the Theme toolbar to preview components in different themes.
    </p>
    <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
      <wu-button variant="primary">Primary</wu-button>
      <wu-button variant="secondary">Secondary</wu-button>
      <wu-button variant="ghost">Ghost</wu-button>
      <wu-button variant="danger">Danger</wu-button>
      <wu-button disabled>Disabled</wu-button>
    </div>
  </div>
`;

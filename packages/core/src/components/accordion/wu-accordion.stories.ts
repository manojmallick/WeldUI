import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'wu-accordion',
  tags: ['autodocs'],
  argTypes: {
    single: {
      control: 'boolean',
      description: 'Restrict so only one item can be open at a time.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    single: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Collapsible disclosure panels. Add the `single` attribute to restrict ' +
          'to one open item at a time. Compose with `<wu-accordion-item>` elements. ' +
          'Each item supports a `summary` slot (the clickable header) and a ' +
          'default slot (the revealed body content).',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/** Default accordion — multiple items can be open simultaneously. */
export const Default: Story = {
  args: { single: false },
  render: (args) => html`
    <wu-accordion ?single=${args['single']} style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">What is WeldUI?</span>
        WeldUI is a framework-agnostic component library built on Lit Web Components.
        It works in React, Vue, Angular, Svelte, or plain HTML with zero dependencies.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">How do I install it?</span>
        Run <code>pnpm add @weldui/core</code> and import the components you need.
        Each component auto-registers its custom element on import.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Is it accessible?</span>
        Yes — all components target WCAG 2.1 AA with full keyboard navigation,
        ARIA attributes, and focus management.
      </wu-accordion-item>
    </wu-accordion>
  `,
};

/** With `single` — opening one item automatically closes the others. */
export const SingleOpen: Story = {
  args: { single: true },
  render: (args) => html`
    <wu-accordion ?single=${args['single']} style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">First item (open by default)</span>
        This item is open by default. Opening another will close this one.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Second item</span>
        This is the second item's content.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Third item</span>
        This is the third item's content.
      </wu-accordion-item>
    </wu-accordion>
  `,
};

/** Items can be individually disabled — they cannot be toggled by the user. */
export const DisabledItems: Story = {
  render: () => html`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item>
        <span slot="summary">Active item</span>
        This item is active and can be expanded freely.
      </wu-accordion-item>
      <wu-accordion-item disabled>
        <span slot="summary">Disabled item (cannot expand)</span>
        This content would never be revealed — the item is locked.
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Another active item</span>
        This item is also fully interactive.
      </wu-accordion-item>
    </wu-accordion>
  `,
};

/** Body slots accept any HTML — code blocks, lists, inline elements. */
export const RichContent: Story = {
  render: () => html`
    <wu-accordion style="max-width:560px">
      <wu-accordion-item open>
        <span slot="summary">Getting started</span>
        <p style="margin:0 0 var(--wu-space-3)">Install WeldUI with your package manager:</p>
        <pre style="
          margin:0;
          background:var(--wu-color-surface);
          padding:var(--wu-space-3) var(--wu-space-4);
          border-radius:var(--wu-radius-md);
          font-family:var(--wu-font-mono);
          font-size:var(--wu-text-xs);
          color:var(--wu-color-text);
          overflow-x:auto;
        ">pnpm add @weldui/core</pre>
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Supported frameworks</span>
        <ul style="margin:0;padding-left:var(--wu-space-5);display:flex;flex-direction:column;gap:var(--wu-space-2)">
          <li>React — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/react</code></li>
          <li>Vue 3 — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/vue</code></li>
          <li>Angular — <code style="font-family:var(--wu-font-mono);font-size:var(--wu-text-xs)">@weldui/angular</code></li>
          <li>Svelte — native Web Components, no wrapper needed</li>
          <li>Plain HTML / JS — zero dependencies</li>
        </ul>
      </wu-accordion-item>
      <wu-accordion-item>
        <span slot="summary">Browser support</span>
        All evergreen browsers — Chrome, Firefox, Safari, and Edge (latest 2 versions).
        Web Components (Custom Elements v1 + Shadow DOM v1) are required.
      </wu-accordion-item>
    </wu-accordion>
  `,
};


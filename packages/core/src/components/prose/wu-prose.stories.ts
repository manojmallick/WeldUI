import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Prose',
  component: 'wu-prose',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'base', 'lg'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { size: 'base' },
  render: (args) => html`
    <wu-prose size=${args.size}>
      <h2>Getting Started</h2>
      <p>WeldUI is a framework-agnostic design system built on Web Components. It works in React, Vue, Angular, and plain HTML.</p>
      <p>Every component uses CSS custom properties for theming, so you can swap themes without touching your markup.</p>
      <h3>Installation</h3>
      <p>Install the core package with your preferred package manager:</p>
      <pre><code>pnpm add @weldui/core</code></pre>
      <p>Then import the components you need and use them directly in your HTML.</p>
      <ul>
        <li>Zero runtime dependencies</li>
        <li>Tree-shakeable by design</li>
        <li>WCAG 2.1 AA accessible</li>
      </ul>
      <blockquote>
        One component library. Any framework. Any brand.
      </blockquote>
    </wu-prose>
  `,
};

export const SmallText: Story = {
  render: () => html`
    <wu-prose size="sm">
      <p>Smaller prose text for secondary content areas or captions.</p>
      <p>Still highly readable with proper line-height and spacing.</p>
    </wu-prose>
  `,
};

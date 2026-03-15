import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Abbr',
  component: 'wu-abbr',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <p style="font-size:var(--wu-text-base);line-height:var(--wu-leading-relaxed);">
      WeldUI supports
      <wu-abbr title="Web Components">WC</wu-abbr>,
      <wu-abbr title="Cascading Style Sheets">CSS</wu-abbr> custom properties,
      and <wu-abbr title="Web Content Accessibility Guidelines">WCAG</wu-abbr> AA compliance.
    </p>
  `,
};

export const Inline: Story = {
  args: { title: 'Model Context Protocol' },
  render: (args) => html`
    <span style="font-size:var(--wu-text-base);">
      The AI uses the <wu-abbr title=${args.title}>MCP</wu-abbr> server to find component definitions.
    </span>
  `,
};

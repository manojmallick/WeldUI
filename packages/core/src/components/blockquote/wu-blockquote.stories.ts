import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Blockquote',
  component: 'wu-blockquote',
  tags: ['autodocs'],
  argTypes: {
    attribution: { control: 'text' },
    cite: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-blockquote attribution="Tim Berners-Lee">
      The Web is more a social creation than a technical one.
    </wu-blockquote>
  `,
};

export const WithoutAttribution: Story = {
  render: () => html`
    <wu-blockquote>
      One component library. Any framework. Any brand. Compliance-ready.
    </wu-blockquote>
  `,
};

export const InContext: Story = {
  render: () => html`
    <div style="max-width:520px;">
      <p style="margin:0 0 var(--wu-space-4);font-size:var(--wu-text-base);line-height:var(--wu-leading-relaxed);">
        When asked about the future of interface development, many experts agree:
      </p>
      <wu-blockquote attribution="WeldUI Design Principles">
        Design systems exist to reduce repetition while enabling infinite brand diversity.
      </wu-blockquote>
    </div>
  `,
};

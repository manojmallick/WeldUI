import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Mark',
  component: 'wu-mark',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'danger', 'info'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <p style="font-size:var(--wu-text-base);line-height:var(--wu-leading-relaxed);">
      The component library ships with <wu-mark>token-driven theming</wu-mark> so every visual property
      is a CSS variable.
    </p>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:var(--wu-space-3);flex-wrap:wrap;font-size:var(--wu-text-base);">
      <wu-mark variant="default">Default</wu-mark>
      <wu-mark variant="success">Success</wu-mark>
      <wu-mark variant="warning">Warning</wu-mark>
      <wu-mark variant="danger">Danger</wu-mark>
      <wu-mark variant="info">Info</wu-mark>
    </div>
  `,
};

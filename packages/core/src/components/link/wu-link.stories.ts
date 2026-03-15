import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Link',
  component: 'wu-link',
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    external: { control: 'boolean' },
    variant: { control: 'radio', options: ['default', 'subtle', 'danger'] },
    underline: { control: 'radio', options: ['hover', 'always', 'never'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-link href="https://weldui.dev">WeldUI Documentation</wu-link>
  `,
};

export const External: Story = {
  render: () => html`
    <wu-link href="https://github.com" external>View on GitHub</wu-link>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:var(--wu-space-6);flex-wrap:wrap;">
      <wu-link href="#" variant="default">Default</wu-link>
      <wu-link href="#" variant="subtle">Subtle</wu-link>
      <wu-link href="#" variant="danger">Danger</wu-link>
    </div>
  `,
};

export const UnderlineOptions: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-3);">
      <wu-link href="#" underline="hover">Underline on hover (default)</wu-link>
      <wu-link href="#" underline="always">Always underlined</wu-link>
      <wu-link href="#" underline="never">Never underlined</wu-link>
    </div>
  `,
};

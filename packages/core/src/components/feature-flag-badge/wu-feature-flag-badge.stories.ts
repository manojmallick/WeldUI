import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Feature Flag Badge',
  component: 'wu-feature-flag-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['alpha','beta','new','experimental','deprecated','stable'] },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
      <wu-feature-flag-badge variant="alpha"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="beta"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="new"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="experimental"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="deprecated"></wu-feature-flag-badge>
      <wu-feature-flag-badge variant="stable"></wu-feature-flag-badge>
    </div>
  `,
};

export const Default: Story = {
  args: { variant: 'beta', label: '' },
  render: (args) => html`<wu-feature-flag-badge variant=${args.variant} label=${args.label}></wu-feature-flag-badge>`,
};

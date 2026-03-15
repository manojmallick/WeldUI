import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Feedback & Validation/Banner',
  component: 'wu-banner',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    dismissible: { control: 'boolean' },
    sticky: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'info', dismissible: false },
  render: (args) => html`
    <wu-banner variant=${args.variant} ?dismissible=${args.dismissible}>
      📢 New feature available: try the theme switcher in the toolbar above.
    </wu-banner>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-banner variant="info" dismissible>Info: System maintenance scheduled for Sunday 02:00 UTC.</wu-banner>
      <wu-banner variant="success" dismissible>Success: Your changes have been saved.</wu-banner>
      <wu-banner variant="warning" dismissible>Warning: Your trial expires in 3 days.</wu-banner>
      <wu-banner variant="danger" dismissible>Critical: Upgrade required to maintain service.</wu-banner>
    </div>
  `,
};

export const WithAction: Story = {
  render: () => html`
    <wu-banner variant="info" dismissible>
      We use cookies to improve your experience.
      <span slot="actions">
        <button style="margin-left:var(--wu-space-3);padding:var(--wu-space-1) var(--wu-space-3);background:var(--wu-color-primary);color:white;border:none;border-radius:var(--wu-radius-sm);font-size:var(--wu-text-xs);cursor:pointer;">Accept</button>
      </span>
    </wu-banner>
  `,
};

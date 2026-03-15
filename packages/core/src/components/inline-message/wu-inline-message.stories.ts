import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Feedback & Validation/Inline Message',
  component: 'wu-inline-message',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { variant: 'info' },
  render: (args) => html`<wu-inline-message variant=${args.variant}>This field is required.</wu-inline-message>`,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);">
      <wu-inline-message variant="info">Use your work email address.</wu-inline-message>
      <wu-inline-message variant="success">Email confirmed successfully.</wu-inline-message>
      <wu-inline-message variant="warning">This email is associated with another account.</wu-inline-message>
      <wu-inline-message variant="error">Email address is invalid.</wu-inline-message>
    </div>
  `,
};

export const BelowInput: Story = {
  render: () => html`
    <div style="max-width:320px;display:flex;flex-direction:column;gap:var(--wu-space-1);">
      <label style="font-size:var(--wu-text-sm);font-weight:var(--wu-font-medium);">Email</label>
      <input
        type="email"
        value="not-an-email"
        style="padding:var(--wu-space-2) var(--wu-space-3);border:1px solid var(--wu-color-danger);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);"
      />
      <wu-inline-message variant="error">Please enter a valid email address.</wu-inline-message>
    </div>
  `,
};

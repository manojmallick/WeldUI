import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Typography & Content/Label',
  component: 'wu-label',
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-label>Email address</wu-label>`,
};

export const Required: Story = {
  render: () => html`<wu-label required>Full name</wu-label>`,
};

export const Disabled: Story = {
  render: () => html`<wu-label disabled>Inactive field</wu-label>`,
};

export const WithInput: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:var(--wu-space-2);max-width:320px;">
      <wu-label for="email-field" required>Email address</wu-label>
      <input
        id="email-field"
        type="email"
        placeholder="you@example.com"
        style="padding:var(--wu-space-2) var(--wu-space-3);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);font-size:var(--wu-text-sm);"
      />
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Feedback & Validation/Validation Summary',
  component: 'wu-validation-summary',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-validation-summary
      .errors=${['Email address is required.', 'Password must be at least 8 characters.', 'You must accept the terms of service.']}
    ></wu-validation-summary>
  `,
};

export const SingleError: Story = {
  render: () => html`
    <wu-validation-summary .errors=${['Email address is invalid.']}></wu-validation-summary>
  `,
};

export const Empty: Story = {
  render: () => html`
    <wu-validation-summary .errors=${[]}></wu-validation-summary>
    <p style="font-size:var(--wu-text-sm);color:var(--wu-color-text-secondary);">Nothing rendered when errors array is empty.</p>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const box = (label: string, color = 'var(--wu-color-primary)') => html`
  <div
    style="padding:var(--wu-space-2) var(--wu-space-3);background:${color};color:white;border-radius:var(--wu-radius-sm);font-size:var(--wu-text-xs);white-space:nowrap;"
  >
    ${label}
  </div>
`;

const meta: Meta = {
  title: 'V3/Layout & Structure/Spacer',
  component: 'wu-spacer',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'auto'] },
  },
};

export default meta;
type Story = StoryObj;

export const AutoFill: Story = {
  render: () => html`
    <div style="display:flex;align-items:center;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      ${box('Logo')}
      <wu-spacer></wu-spacer>
      ${box('Login', 'var(--wu-color-text-secondary)')}
      ${box('Sign Up')}
    </div>
  `,
};

export const FixedSizes: Story = {
  render: () => html`
    <div style="display:flex;align-items:center;padding:var(--wu-space-3);background:var(--wu-color-surface);border:1px solid var(--wu-color-border);border-radius:var(--wu-radius-md);">
      ${box('A')}
      <wu-spacer size="md"></wu-spacer>
      ${box('B')}
      <wu-spacer size="xl"></wu-spacer>
      ${box('C')}
    </div>
  `,
};

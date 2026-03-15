import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'Enterprise/Tour',
  component: 'wu-tour',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const steps = [
  { title: 'Welcome to the dashboard', content: 'This is your central hub for all activity. Let\'s take a quick tour.' },
  { title: 'Create your first project', content: 'Click the "New project" button to get started.' },
  { title: 'Invite your team', content: 'Add teammates via the Settings → Team page.' },
];

export const Active: Story = {
  render: () => html`
    <wu-tour .steps=${steps} active></wu-tour>
    <p style="font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
      Tour overlay is visible above.
    </p>
  `,
};

export const Inactive: Story = {
  render: () => html`
    <wu-tour .steps=${steps}></wu-tour>
    <p style="font-family:var(--wu-font-sans);font-size:14px;color:var(--wu-color-text-secondary)">
      Tour is inactive — nothing rendered.
    </p>
  `,
};

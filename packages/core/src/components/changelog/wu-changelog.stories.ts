import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Changelog',
  component: 'wu-changelog',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const entries = [
  {
    version: 'v1.3.0', date: 'June 10, 2025',
    changes: [
      { type: 'added', text: 'Dark mode support across all core components' },
      { type: 'fixed', text: 'Focus trap in wu-modal not releasing on close' },
    ],
  },
  {
    version: 'v1.2.0', date: 'May 28, 2025',
    changes: [
      { type: 'added', text: 'wu-activity-feed component' },
      { type: 'changed', text: 'Button height from 36px to 38px in md size' },
      { type: 'removed', text: 'Deprecated wu-alert-legacy component' },
    ],
  },
];

export const Default: Story = {
  render: () => html`<wu-changelog .entries=${entries} style="max-width:560px"></wu-changelog>`,
};

export const Empty: Story = {
  render: () => html`<wu-changelog .entries=${[]}></wu-changelog>`,
};

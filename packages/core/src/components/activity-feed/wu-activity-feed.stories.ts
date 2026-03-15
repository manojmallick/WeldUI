import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Activity Feed',
  component: 'wu-activity-feed',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const sampleItems = [
  { id: '1', actor: 'Alice Chen', action: 'pushed to branch', target: 'feature/dark-mode', time: '2 minutes ago' },
  { id: '2', actor: 'Bob Smith', action: 'opened pull request', target: '#48 Add tokens', time: '15 minutes ago' },
  { id: '3', actor: 'Carol Wu', action: 'commented on', target: 'Issue #32', time: '1 hour ago' },
  { id: '4', actor: 'Dave Park', action: 'merged', target: 'PR #45', time: '3 hours ago' },
];

export const Default: Story = {
  render: () => html`
    <wu-activity-feed .items=${sampleItems} show-heading style="max-width:400px"></wu-activity-feed>
  `,
};

export const Empty: Story = {
  render: () => html`<wu-activity-feed .items=${[]} show-heading style="max-width:400px"></wu-activity-feed>`,
};

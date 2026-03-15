import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Navigation/NotificationCenter', component: 'wu-notification-center', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const notes = [
  { id: '1', title: 'New team member', body: 'Alice joined your workspace.', time: '2m ago', read: false },
  { id: '2', title: 'Comment on PR #42', body: 'Bob left a review.', time: '15m ago', read: false },
  { id: '3', title: 'Deployment succeeded', body: 'v2.1.0 is live.', time: '1h ago', read: true },
];

export const WithNotifications: Story = {
  render: () => {
    const el = document.createElement('wu-notification-center') as any;
    el.notifications = notes;
    return el;
  }
};

export const Empty: Story = {
  render: () => html`<wu-notification-center></wu-notification-center>`
};

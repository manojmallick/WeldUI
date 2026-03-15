import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Log Viewer', component: 'wu-log-viewer', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

const logs = [
  { level: 'info',  message: 'Server started on port 3000', timestamp: '10:01:00' },
  { level: 'debug', message: 'Database connection established', timestamp: '10:01:01' },
  { level: 'info',  message: 'GET /api/users 200 12ms', timestamp: '10:01:05' },
  { level: 'warn',  message: 'Rate limit threshold approaching (80%)', timestamp: '10:01:12' },
  { level: 'error', message: 'Unhandled exception in /api/payments', timestamp: '10:01:18' },
];

export const Default: Story = {
  render: () => html`<wu-log-viewer .logs=${logs} style="max-width:640px"></wu-log-viewer>`,
};

export const Empty: Story = {
  render: () => html`<wu-log-viewer .logs=${[]} style="max-width:640px"></wu-log-viewer>`,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/SyncStatus',
  component: 'wu-sync-status',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Synced: Story = { render: () => html`<wu-sync-status status="synced" last-saved="2 min ago"></wu-sync-status>` };
export const Syncing: Story = { render: () => html`<wu-sync-status status="syncing"></wu-sync-status>` };
export const Offline: Story = { render: () => html`<wu-sync-status status="offline"></wu-sync-status>` };
export const Error: Story = { render: () => html`<wu-sync-status status="error"></wu-sync-status>` };

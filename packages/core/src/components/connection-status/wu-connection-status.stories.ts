import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/ConnectionStatus',
  component: 'wu-connection-status',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Online: Story = { render: () => html`<wu-connection-status status="online"></wu-connection-status>` };
export const Offline: Story = { render: () => html`<wu-connection-status status="offline"></wu-connection-status>` };
export const Reconnecting: Story = { render: () => html`<wu-connection-status status="reconnecting"></wu-connection-status>` };

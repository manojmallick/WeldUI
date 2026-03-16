import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/PWA/NotificationPermission',
  component: 'wu-notification-permission',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-notification-permission label="NotificationPermission"></wu-notification-permission>`,
};

export const WithValue: Story = {
  render: () => html`<wu-notification-permission label="NotificationPermission" value="Sample value"></wu-notification-permission>`,
};

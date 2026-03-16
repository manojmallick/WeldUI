import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/PWA/OfflineBanner',
  component: 'wu-offline-banner',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-offline-banner label="OfflineBanner"></wu-offline-banner>`,
};

export const WithValue: Story = {
  render: () => html`<wu-offline-banner label="OfflineBanner" value="Sample value"></wu-offline-banner>`,
};

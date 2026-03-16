import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/PWA/UpdateAvailable',
  component: 'wu-update-available',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-update-available label="UpdateAvailable"></wu-update-available>`,
};

export const WithValue: Story = {
  render: () => html`<wu-update-available label="UpdateAvailable" value="Sample value"></wu-update-available>`,
};

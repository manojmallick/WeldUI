import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/PWA/BatteryIndicator',
  component: 'wu-battery-indicator',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-battery-indicator label="BatteryIndicator"></wu-battery-indicator>`,
};

export const WithValue: Story = {
  render: () => html`<wu-battery-indicator label="BatteryIndicator" value="Sample value"></wu-battery-indicator>`,
};

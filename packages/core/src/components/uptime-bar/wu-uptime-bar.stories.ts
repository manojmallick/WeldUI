import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/UptimeBar',
  component: 'wu-uptime-bar',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-uptime-bar label="UptimeBar"></wu-uptime-bar>`,
};

export const WithValue: Story = {
  render: () => html`<wu-uptime-bar label="UptimeBar" value="Sample value"></wu-uptime-bar>`,
};

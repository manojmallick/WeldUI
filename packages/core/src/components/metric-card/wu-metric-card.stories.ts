import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/MetricCard',
  component: 'wu-metric-card',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-metric-card label="MetricCard"></wu-metric-card>`,
};

export const WithValue: Story = {
  render: () => html`<wu-metric-card label="MetricCard" value="Sample value"></wu-metric-card>`,
};

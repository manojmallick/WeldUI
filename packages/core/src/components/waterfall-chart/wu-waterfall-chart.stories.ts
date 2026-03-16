import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Charts/WaterfallChart',
  component: 'wu-waterfall-chart',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const items = [
  { label: 'Start', value: 100, total: true },
  { label: 'Revenue', value: 80 },
  { label: 'Costs', value: -50 },
  { label: 'Tax', value: -15 },
  { label: 'End', value: 115, total: true },
];

export const Default: Story = {
  render: () => html`<wu-waterfall-chart title="P&L Bridge" .items=${items}></wu-waterfall-chart>`,
};

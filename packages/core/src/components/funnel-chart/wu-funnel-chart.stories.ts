import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Charts/FunnelChart',
  component: 'wu-funnel-chart',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const stages = [
  { label: 'Visits', value: 10000 },
  { label: 'Sign-ups', value: 3200 },
  { label: 'Activated', value: 1100 },
  { label: 'Paid', value: 420 },
  { label: 'Retained', value: 180 },
];

export const Default: Story = {
  render: () => html`<wu-funnel-chart title="Conversion Funnel" .stages=${stages} style="max-width:400px"></wu-funnel-chart>`,
};

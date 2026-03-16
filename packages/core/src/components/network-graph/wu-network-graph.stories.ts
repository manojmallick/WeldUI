import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Charts/NetworkGraph',
  component: 'wu-network-graph',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const nodes = [
  { id: 'a', label: 'Auth Service' },
  { id: 'b', label: 'API Gateway' },
  { id: 'c', label: 'Database' },
  { id: 'd', label: 'Cache' },
];
const edges = [
  { source: 'b', target: 'a' },
  { source: 'b', target: 'c' },
  { source: 'b', target: 'd' },
];

export const Default: Story = {
  render: () => html`<wu-network-graph title="Service Topology" .nodes=${nodes} .edges=${edges}></wu-network-graph>`,
};

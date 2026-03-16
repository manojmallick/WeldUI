import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Charts/GeoMap',
  component: 'wu-geo-map',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const regions = [
  { id: 'US', label: 'United States', value: 331 },
  { id: 'DE', label: 'Germany', value: 83 },
  { id: 'NL', label: 'Netherlands', value: 17 },
  { id: 'GB', label: 'United Kingdom', value: 67 },
];

export const Default: Story = {
  render: () => html`<wu-geo-map title="Users by Country" .regions=${regions}></wu-geo-map>`,
};

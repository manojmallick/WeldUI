import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Maps/DistanceCalculator',
  component: 'wu-distance-calculator',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-distance-calculator label="DistanceCalculator"></wu-distance-calculator>`,
};

export const WithValue: Story = {
  render: () => html`<wu-distance-calculator label="DistanceCalculator" value="Sample value"></wu-distance-calculator>`,
};

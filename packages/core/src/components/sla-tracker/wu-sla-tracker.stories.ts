import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/SlaTracker',
  component: 'wu-sla-tracker',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-sla-tracker label="SlaTracker"></wu-sla-tracker>`,
};

export const WithValue: Story = {
  render: () => html`<wu-sla-tracker label="SlaTracker" value="Sample value"></wu-sla-tracker>`,
};

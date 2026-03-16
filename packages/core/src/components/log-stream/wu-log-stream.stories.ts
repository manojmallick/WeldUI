import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/LogStream',
  component: 'wu-log-stream',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-log-stream label="LogStream"></wu-log-stream>`,
};

export const WithValue: Story = {
  render: () => html`<wu-log-stream label="LogStream" value="Sample value"></wu-log-stream>`,
};

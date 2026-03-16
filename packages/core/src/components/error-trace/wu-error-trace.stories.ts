import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Analytics/ErrorTrace',
  component: 'wu-error-trace',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-error-trace label="ErrorTrace"></wu-error-trace>`,
};

export const WithValue: Story = {
  render: () => html`<wu-error-trace label="ErrorTrace" value="Sample value"></wu-error-trace>`,
};

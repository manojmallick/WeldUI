import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Print/Invoice',
  component: 'wu-invoice',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-invoice label="Invoice"></wu-invoice>`,
};

export const WithValue: Story = {
  render: () => html`<wu-invoice label="Invoice" value="Sample value"></wu-invoice>`,
};

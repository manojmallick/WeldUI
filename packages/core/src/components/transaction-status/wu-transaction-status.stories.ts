import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Web3/TransactionStatus',
  component: 'wu-transaction-status',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-transaction-status label="TransactionStatus"></wu-transaction-status>`,
};

export const WithValue: Story = {
  render: () => html`<wu-transaction-status label="TransactionStatus" value="Sample value"></wu-transaction-status>`,
};

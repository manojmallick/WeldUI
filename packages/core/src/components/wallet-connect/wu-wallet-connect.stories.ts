import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Web3/WalletConnect',
  component: 'wu-wallet-connect',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-wallet-connect label="WalletConnect"></wu-wallet-connect>`,
};

export const WithValue: Story = {
  render: () => html`<wu-wallet-connect label="WalletConnect" value="Sample value"></wu-wallet-connect>`,
};

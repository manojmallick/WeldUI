import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Web3/NftCard',
  component: 'wu-nft-card',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-nft-card label="NftCard"></wu-nft-card>`,
};

export const WithValue: Story = {
  render: () => html`<wu-nft-card label="NftCard" value="Sample value"></wu-nft-card>`,
};

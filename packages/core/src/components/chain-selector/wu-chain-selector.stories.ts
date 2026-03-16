import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Web3/ChainSelector',
  component: 'wu-chain-selector',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-chain-selector label="ChainSelector"></wu-chain-selector>`,
};

export const WithValue: Story = {
  render: () => html`<wu-chain-selector label="ChainSelector" value="Sample value"></wu-chain-selector>`,
};

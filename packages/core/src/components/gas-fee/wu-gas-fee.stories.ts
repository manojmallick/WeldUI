import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Web3/GasFee',
  component: 'wu-gas-fee',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-gas-fee label="GasFee"></wu-gas-fee>`,
};

export const WithValue: Story = {
  render: () => html`<wu-gas-fee label="GasFee" value="Sample value"></wu-gas-fee>`,
};

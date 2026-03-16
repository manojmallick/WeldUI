import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Web3/AddressDisplay',
  component: 'wu-address-display',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-address-display label="AddressDisplay"></wu-address-display>`,
};

export const WithValue: Story = {
  render: () => html`<wu-address-display label="AddressDisplay" value="Sample value"></wu-address-display>`,
};

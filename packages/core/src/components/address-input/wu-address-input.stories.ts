import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/Maps/AddressInput',
  component: 'wu-address-input',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-address-input label="AddressInput"></wu-address-input>`,
};

export const WithValue: Story = {
  render: () => html`<wu-address-input label="AddressInput" value="Sample value"></wu-address-input>`,
};

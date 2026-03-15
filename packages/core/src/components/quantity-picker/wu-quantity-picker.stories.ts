import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Quantity Picker',
  component: 'wu-quantity-picker',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-quantity-picker></wu-quantity-picker>`,
};

export const WithLimits: Story = {
  render: () => html`<wu-quantity-picker value="3" min="1" max="5"></wu-quantity-picker>`,
};

export const Disabled: Story = {
  render: () => html`<wu-quantity-picker disabled></wu-quantity-picker>`,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Cart Icon',
  component: 'wu-cart-icon',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Empty: Story = {
  render: () => html`<wu-cart-icon></wu-cart-icon>`,
};

export const WithItems: Story = {
  render: () => html`<wu-cart-icon count="3"></wu-cart-icon>`,
};

export const ManyItems: Story = {
  render: () => html`<wu-cart-icon count="120"></wu-cart-icon>`,
};

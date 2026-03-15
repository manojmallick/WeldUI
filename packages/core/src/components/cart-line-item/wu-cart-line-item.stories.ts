import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Cart Line Item',
  component: 'wu-cart-line-item',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-cart-line-item
      item-id="p1"
      name="Wireless Headphones"
      price="$79.99"
      variant="Black / Large"
      quantity="2"
    ></wu-cart-line-item>
  `,
};

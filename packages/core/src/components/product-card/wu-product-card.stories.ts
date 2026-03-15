import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Product Card',
  component: 'wu-product-card',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-product-card
      style="max-width:260px"
      product-id="p1"
      name="Wireless Headphones"
      price="$79.99"
      original-price="$129.99"
      badge="Sale"
    ></wu-product-card>
  `,
};

export const SoldOut: Story = {
  render: () => html`
    <wu-product-card
      style="max-width:260px"
      product-id="p2"
      name="Limited Edition Watch"
      price="$299"
      sold-out
    ></wu-product-card>
  `,
};

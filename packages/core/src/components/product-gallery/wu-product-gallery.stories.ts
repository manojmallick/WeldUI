import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Product Gallery',
  component: 'wu-product-gallery',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
];

export const Default: Story = {
  render: () => html`
    <wu-product-gallery style="max-width:300px" .images=${images} alt="Product photos"></wu-product-gallery>
  `,
};

export const SingleImage: Story = {
  render: () => html`
    <wu-product-gallery style="max-width:300px" .images=${[images[0]]} alt="Product photo"></wu-product-gallery>
  `,
};

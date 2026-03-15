import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Price',
  component: 'wu-price',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-price amount="29.99"></wu-price>`,
};

export const WithDiscount: Story = {
  render: () => html`<wu-price amount="19.99" original-amount="34.99" badge="−43%"></wu-price>`,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:16px;align-items:center">
      <wu-price size="sm" amount="9.99"></wu-price>
      <wu-price size="md" amount="9.99"></wu-price>
      <wu-price size="lg" amount="9.99"></wu-price>
    </div>
  `,
};

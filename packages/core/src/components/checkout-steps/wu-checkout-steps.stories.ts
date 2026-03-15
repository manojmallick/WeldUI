import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Checkout Steps',
  component: 'wu-checkout-steps',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Step1: Story = {
  render: () => html`<wu-checkout-steps current="0"></wu-checkout-steps>`,
};

export const Step2: Story = {
  render: () => html`<wu-checkout-steps current="1"></wu-checkout-steps>`,
};

export const Step3: Story = {
  render: () => html`<wu-checkout-steps current="2"></wu-checkout-steps>`,
};

export const Complete: Story = {
  render: () => html`<wu-checkout-steps current="4"></wu-checkout-steps>`,
};

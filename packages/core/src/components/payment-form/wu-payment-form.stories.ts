import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Payment Form',
  component: 'wu-payment-form',
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    loading: { control: 'boolean' },
    error: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { heading: 'Payment details', loading: false, error: '' },
  render: (args) => html`
    <wu-payment-form heading=${args.heading} ?loading=${args.loading} error=${args.error}></wu-payment-form>
  `,
};

export const Loading: Story = {
  render: () => html`<wu-payment-form loading></wu-payment-form>`,
};

export const WithError: Story = {
  render: () => html`
    <wu-payment-form error="Your card was declined. Please try a different card."></wu-payment-form>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Order Status',
  component: 'wu-order-status',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const doneSteps = (n: number) => [
  { label: 'Order placed', date: 'Jun 1, 2025 10:00 AM', done: n > 0 },
  { label: 'Processing', date: 'Jun 1, 2025 11:00 AM', done: n > 1 },
  { label: 'Shipped', date: 'Jun 2, 2025 08:30 AM', done: n > 2 },
  { label: 'Delivered', date: 'Jun 3, 2025 02:15 PM', done: n > 3 },
];

export const Pending: Story = {
  render: () => html`
    <wu-order-status order-id="1038291" status="pending" .steps=${doneSteps(0)}></wu-order-status>
  `,
};

export const Shipped: Story = {
  render: () => html`
    <wu-order-status order-id="1038291" status="shipped" .steps=${doneSteps(2)}></wu-order-status>
  `,
};

export const Delivered: Story = {
  render: () => html`
    <wu-order-status order-id="1038291" status="delivered" .steps=${doneSteps(4)}></wu-order-status>
  `,
};

export const Cancelled: Story = {
  render: () => html`
    <wu-order-status order-id="1038291" status="cancelled" .steps=${doneSteps(1)}></wu-order-status>
  `,
};

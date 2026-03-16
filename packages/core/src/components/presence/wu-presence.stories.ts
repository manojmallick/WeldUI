import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/RealTime/Presence',
  component: 'wu-presence',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const users = [
  { id: '1', name: 'Alice Smith', color: '#3b82f6' },
  { id: '2', name: 'Bob Jones', color: '#22c55e' },
  { id: '3', name: 'Carol White', color: '#f59e0b' },
  { id: '4', name: 'David Black', color: '#ef4444' },
  { id: '5', name: 'Eve Brown', color: '#8b5cf6' },
  { id: '6', name: 'Frank Green', color: '#06b6d4' },
];

export const Default: Story = {
  render: () => html`<wu-presence .users=${users.slice(0, 3)} show-label></wu-presence>`,
};

export const WithOverflow: Story = {
  render: () => html`<wu-presence .users=${users} max="3" show-label></wu-presence>`,
};

export const Empty: Story = {
  render: () => html`<wu-presence .users=${[]} show-label></wu-presence>`,
};

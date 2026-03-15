import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/E-Commerce/Wishlist Button',
  component: 'wu-wishlist-button',
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
    count: { control: 'number' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { active: false, count: 0 },
  render: (args) => html`
    <wu-wishlist-button ?active=${args.active} count=${args.count}></wu-wishlist-button>
  `,
};

export const Active: Story = {
  render: () => html`<wu-wishlist-button active></wu-wishlist-button>`,
};

export const WithCount: Story = {
  render: () => html`
    <div style="display:flex;gap:12px;align-items:center">
      <wu-wishlist-button count="5"></wu-wishlist-button>
      <wu-wishlist-button active count="12"></wu-wishlist-button>
    </div>
  `,
};

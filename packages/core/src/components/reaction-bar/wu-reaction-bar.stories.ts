import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/SaaS & App Shell/Reaction Bar',
  component: 'wu-reaction-bar',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const reactions = [
  { emoji: '👍', count: 12, reacted: false },
  { emoji: '❤️', count: 5, reacted: true },
  { emoji: '🚀', count: 3, reacted: false },
  { emoji: '😂', count: 2, reacted: false },
];

export const Default: Story = {
  render: () => html`<wu-reaction-bar .reactions=${reactions} show-add></wu-reaction-bar>`,
};

export const Compact: Story = {
  render: () => html`<wu-reaction-bar .reactions=${reactions}></wu-reaction-bar>`,
};

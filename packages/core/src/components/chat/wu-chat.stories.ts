import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = { title: 'Enterprise/Chat', component: 'wu-chat', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-chat max-height="320">
      <wu-chat-bubble side="left" author="Alice" time="10:01" show-avatar>Hello! How can I help?</wu-chat-bubble>
      <wu-chat-bubble side="right" time="10:02">I need help with my order.</wu-chat-bubble>
      <wu-chat-bubble side="left" author="Alice" time="10:03" show-avatar>Sure! What's the order number?</wu-chat-bubble>
      <wu-chat-bubble side="right" time="10:03">#1038291</wu-chat-bubble>
    </wu-chat>
  `,
};

export const BubbleOnly: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:8px;max-width:400px">
      <wu-chat-bubble side="left" author="Support">How can we help?</wu-chat-bubble>
      <wu-chat-bubble side="right">I have a question.</wu-chat-bubble>
    </div>
  `,
};

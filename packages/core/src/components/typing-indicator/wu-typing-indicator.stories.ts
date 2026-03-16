import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/TypingIndicator',
  component: 'wu-typing-indicator',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-typing-indicator></wu-typing-indicator>`,
};

export const InContext: Story = {
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:8px;">
      <wu-chat-message role="user">What is the answer?</wu-chat-message>
      <wu-typing-indicator></wu-typing-indicator>
    </div>
  `,
};

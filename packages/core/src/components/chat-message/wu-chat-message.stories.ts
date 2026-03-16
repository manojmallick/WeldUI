import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/ChatMessage',
  component: 'wu-chat-message',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const UserMessage: Story = {
  render: () => html`
    <wu-chat-message role="user" author="You" timestamp="12:01">
      Hello, can you help me with TypeScript generics?
    </wu-chat-message>
  `,
};

export const AssistantMessage: Story = {
  render: () => html`
    <wu-chat-message role="assistant" author="Assistant" timestamp="12:02">
      Of course! TypeScript generics allow you to write reusable, type-safe code.
    </wu-chat-message>
  `,
};

export const CodeMessage: Story = {
  render: () => html`
    <wu-chat-message role="assistant" author="Assistant" type="code" language="typescript">
      function identity&lt;T&gt;(arg: T): T { return arg; }
    </wu-chat-message>
  `,
};

export const ToolCallMessage: Story = {
  render: () => html`
    <wu-chat-message role="assistant" tool-name="search_web" type="tool-call">
      { "query": "TypeScript generics tutorial" }
    </wu-chat-message>
  `,
};

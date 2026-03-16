import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/ChatInput',
  component: 'wu-chat-input',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-chat-input></wu-chat-input>`,
};

export const WithAttachAndVoice: Story = {
  render: () => html`<wu-chat-input show-attach show-voice></wu-chat-input>`,
};

export const Disabled: Story = {
  render: () => html`<wu-chat-input disabled></wu-chat-input>`,
};

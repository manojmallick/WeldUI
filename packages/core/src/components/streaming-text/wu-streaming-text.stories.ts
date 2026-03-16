import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/StreamingText',
  component: 'wu-streaming-text',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wu-streaming-text
      text="The quick brown fox jumps over the lazy dog."
      speed="30"
    ></wu-streaming-text>
  `,
};

export const Fast: Story = {
  render: () => html`
    <wu-streaming-text
      text="Streaming at high speed — no waiting!"
      speed="100"
    ></wu-streaming-text>
  `,
};

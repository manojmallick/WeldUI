import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/TokenCounter',
  component: 'wu-token-counter',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-token-counter count="512" limit="4096"></wu-token-counter>`,
};

export const NearLimit: Story = {
  render: () => html`<wu-token-counter count="3500" limit="4096"></wu-token-counter>`,
};

export const OverLimit: Story = {
  render: () => html`<wu-token-counter count="4500" limit="4096"></wu-token-counter>`,
};

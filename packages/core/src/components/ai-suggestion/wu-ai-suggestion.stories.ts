import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/AiSuggestion',
  component: 'wu-ai-suggestion',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <span>The quick brown fox </span>
    <wu-ai-suggestion suggestion="jumps over the lazy dog." show-hint></wu-ai-suggestion>
  `,
};

export const NoHint: Story = {
  render: () => html`
    <wu-ai-suggestion suggestion="suggested completion text" .showHint=${false}></wu-ai-suggestion>
  `,
};

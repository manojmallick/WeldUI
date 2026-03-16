import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/AiActionBar',
  component: 'wu-ai-action-bar',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-ai-action-bar selected-text="TypeScript is a superset of JavaScript."></wu-ai-action-bar>`,
};

export const CustomActions: Story = {
  render: () => html`
    <wu-ai-action-bar .actions=${[
      { id: 'translate', label: 'Translate', icon: '🌐' },
      { id: 'explain', label: 'Explain', icon: '💡' },
    ]}></wu-ai-action-bar>
  `,
};

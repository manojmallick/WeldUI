import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@weldui/core';

const meta: Meta = {
  title: 'V3/AI-LLM/ModelSelector',
  component: 'wu-model-selector',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<wu-model-selector value="gpt-4o"></wu-model-selector>`,
};

export const Disabled: Story = {
  render: () => html`<wu-model-selector disabled></wu-model-selector>`,
};
